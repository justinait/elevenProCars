import React, { useState } from 'react';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validación del importe
        if (!amount || Number(amount) <= 0) {
            alert('Por favor, ingrese un importe válido.');
            return;
        }
        const merchantCode = '14544407'; // Código del comercio
        const terminal = '1'; // Terminal
        const currency = '978'; // Ejemplo para Euro

        try {
            // Envío de datos al backend
            const response = await fetch('http://localhost:5000/generate-payment-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, merchantCode, terminal, currency }),
            });

            if (!response.ok) {
                throw new Error('Error en el servidor');
            }

            const data = await response.json();

            // Redirigir a la URL de Redsys con los parámetros generados
            redirectToRedsys(data.parameters);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const redirectToRedsys = (parameters) => {
        const form = document.createElement('form');
        form.action = 'https://sis-t.redsys.es:25443/sis/realizarPago';
        form.method = 'POST';

        // Añadir los parámetros al formulario
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="amount">Importe a pagar:</label>
            <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="0.01" // Asegúrate de que el mínimo sea mayor a 0
                step="0.01" // Para permitir decimales
            />
            <button type="submit">Realizar Pago</button>
        </form>
    );
};

export default PaymentForm;
