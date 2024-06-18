import React, { useEffect, useState, useContext } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';

const DashboardUsers = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user?.refCode) {
        const q = query(collection(db, 'orders'), where('refCode', '==', user.refCode));
        const querySnapshot = await getDocs(q);
        const ordersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersList);
      }
    };
    fetchOrders();
  }, [user]);
  
  {console.log(user)}
  {console.log(orders)}
  return (
    <div>
      <h2>Mis Pedidos</h2>
      <ul>
        {orders.map((e) => (
          <li key={e.id}>
            <p>Nombre: {e.firstName}</p>
            <p>Apellido: {e.lastName}</p>
            <p>Cantidad de Días: {e.days}</p>
            <p>Modelo del Coche: {e.carModel}</p>
            <p>Tarifa Final: {e.finalRate}</p>
            <p>Código de Referencia: {e.refCode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardUsers;
