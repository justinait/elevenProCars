import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function Payment() {
    const [amount, setAmount] = useState(1000); // Puedes hacer esto variable si quieres
    const [order] = useState(`ORD${Math.floor(Math.random() * 1000000)}`);
    const secretKey = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7';
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
      const amountInCents = amount * 100;
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
      form.action = 'https://sis-t.redsys.es:25443/sis/realizarPago';

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
        <h2>Pago</h2>
        <button onClick={() => setModalVisible(true)}>Make payment</button>

        {/* Modal */}
        <div className={`modal ${modalVisible ? 'show' : ''}`} style={{ display: modalVisible ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">What is the amount of your order?</h5>
                <button type="button" className="close" onClick={() => setModalVisible(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="number"
                  placeholder="Monto en céntimos"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={() => {
                  handlePayment();
                  setModalVisible(false);
                }}>
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
      </div>

      {/* Fondo del modal */}
      {modalVisible && <div className="modal-backdrop fade show"></div>}
      </div>
    );
}

export default Payment;
