const express = require('express');
const cors = require('cors');
const querystring = require('querystring');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Asegúrate de que esta URL sea correcta
}));
app.use(express.json());

// Endpoint para manejar el pago
app.post('/api/generate-payment-data', (req, res) => {
    const {
        merchantCode,
        terminal,
        orderId,
        amount,
        currency,
        productDescription,
        merchantName,
        returnUrlOK,
        returnUrlKO,
        signature,
    } = req.body;

    const paymentUrl = 'https://sis-t.redsys.es/sis/realizarPago';

    // Crear un objeto con los datos de pago
    const formData = {
        Ds_Merchant_MerchantCode: merchantCode,
        Ds_Merchant_Terminal: terminal,
        Ds_Merchant_TransactionType: '0',
        Ds_Merchant_Order: orderId,
        Ds_Merchant_Amount: amount,
        Ds_Merchant_Currency: currency,
        Ds_Merchant_ProductDescription: productDescription,
        Ds_Merchant_MerchantName: merchantName,
        Ds_Merchant_URLOK: returnUrlOK,
        Ds_Merchant_URLKO: returnUrlKO,
        Ds_Merchant_Signature: signature,
    };

    // Generar un formulario HTML
    let formHtml = `<html><body onload="document.forms[0].submit();">`;
    formHtml += `<form method="POST" action="${paymentUrl}">`;

    Object.keys(formData).forEach(key => {
        formHtml += `<input type="hidden" name="${key}" value="${formData[key]}">`;
    });

    formHtml += `</form></body></html>`;

    // Enviar el formulario como respuesta
    res.send(formHtml);
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
