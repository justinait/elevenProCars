import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener el CSS de Bootstrap
import './Payment.css';

function Payment() {
  const [amount, setAmount] = useState(); // Monto en euros
  const [order] = useState(`ORD${Math.floor(Math.random() * 1000000)}`);
  const secretKey = import.meta.env.VITE_redSysSecretKey;
  const merchantCode = '14544407';
  const terminal = '001';
  const currency = '978';
  const urlOk = 'https://www.elevenprocar.com';
  const urlKo = 'https://www.elevenprocar.com';
  const [modalVisible, setModalVisible] = useState(false);

  const stringBase64Encode = (input) => {
    const utf8Input = CryptoJS.enc.Utf8.parse(input);
      return CryptoJS.enc.Base64.stringify(utf8Input);
  };

  const base64Decode = (input) => {
      return CryptoJS.enc.Base64.parse(input);
  };

  const desEncrypt = (message, key) => {
    const ivArray = Array(8).fill(0);
    const IV = CryptoJS.enc.Utf8.parse(ivArray.map((item) => String.fromCharCode(item)).join(""));

    const encodedStr = CryptoJS.TripleDES.encrypt(message, key, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return encodedStr.toString();
  };

  const handlePayment = () => {
    const amountInCents = amount * 100; // Convertimos a céntimos
    const merchantOrder = order;

    const Ds_MerchantParameters = {
      DS_MERCHANT_AMOUNT: amountInCents.toString(),
      DS_MERCHANT_CURRENCY: currency,
      DS_MERCHANT_MERCHANTCODE: merchantCode,
      DS_MERCHANT_ORDER: merchantOrder,
      DS_MERCHANT_TERMINAL: terminal,
      DS_MERCHANT_TRANSACTIONTYPE: '0',
      DS_MERCHANT_URLKO: urlKo,
      DS_MERCHANT_URLOK: urlOk
    };

    const encodedParameters = stringBase64Encode(JSON.stringify(Ds_MerchantParameters));
    const decodedSecretKey = base64Decode(secretKey);

    const operationKey = desEncrypt(merchantOrder, decodedSecretKey);

    const encodedDsSignature = CryptoJS.HmacSHA256(encodedParameters, base64Decode(operationKey));
    const dsSignature = CryptoJS.enc.Base64.stringify(encodedDsSignature);

    // Crear formulario dinámicamente para enviar los datos de pago
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://sis-t.redsys.es/sis/realizarPago';

    const parameters = {
      Ds_SignatureVersion: 'HMAC_SHA256_V1',
      Ds_MerchantParameters: encodedParameters,
      Ds_Signature: dsSignature
    };

    for (const key in parameters) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = parameters[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div>
      <button className='makePaymentButton' onClick={() => setModalVisible(true)}>Make a payment</button>

      {/* Modal de React Bootstrap */}
      <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter the amount to pay in Euros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="number"
            placeholder="Monto en euros"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>
          <Button variant="light" onClick={() => {
              handlePayment();
              setModalVisible(false);
          }}>
            Go to checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Payment;
