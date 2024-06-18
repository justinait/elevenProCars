import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const DashboardAdminCRUD = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    firstName: '',
    days: '',
    carModel: '',
    finalRate: '',
    refCode: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    };

    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, 'orders'));
      const ordersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setOrders(ordersList);
    };

    fetchUsers();
    fetchOrders();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleAddOrder = async () => {
    const { firstName, days, carModel, finalRate, refCode } = newOrder;
    if (!firstName || !days || !carModel || !finalRate || !refCode) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const docRef = await addDoc(collection(db, 'orders'), newOrder);
    setOrders([...orders, { id: docRef.id, ...newOrder }]);
    setNewOrder({ firstName: '', days: '', carModel: '', finalRate: '', refCode: '' });
  };

  const handleUpdateOrder = async (id) => {
    const orderRef = doc(db, 'orders', id);
    await updateDoc(orderRef, newOrder);
    setOrders(orders.map((order) => (order.id === id ? { ...order, ...newOrder } : order)));
  };

  const handleDeleteOrder = async (id) => {
    const orderRef = doc(db, 'orders', id);
    await deleteDoc(orderRef);
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <h1>CRUD de Administrador</h1>
      <div>
        <h2>Agregar Pedido</h2>
        <input type="text" name="firstName" placeholder="Nombre y apellido" value={newOrder.firstName} onChange={handleInputChange} />
        <input type="number" name="days" placeholder="Cantidad de Días" value={newOrder.days} onChange={handleInputChange} />
        <input type="text" name="carModel" placeholder="Modelo del Coche" value={newOrder.carModel} onChange={handleInputChange} />
        <input type="number" name="finalRate" placeholder="Tarifa Final" value={newOrder.finalRate} onChange={handleInputChange} />
        <select name="refCode" value={newOrder.refCode} onChange={handleInputChange}>
          <option value="">Seleccionar Código de Referencia</option>
          {users.map((user) => (
            <option key={user.id} value={user.refCode}>{user.refCode}</option>
          ))}
        </select>
        <button onClick={handleAddOrder}>Agregar Pedido</button>
      </div>

      <div>
        <h2>Lista de Pedidos</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Nombre y apellido: {order.firstName}</p>
              <p>Cantidad de Días: {order.days}</p>
              <p>Modelo del Coche: {order.carModel}</p>
              <p>Tarifa Final: {order.finalRate}</p>
              <p>Código de Referencia: {order.refCode}</p>
              {/* <button onClick={() => handleUpdateOrder(order.id)}>Actualizar</button> */}
              <button onClick={() => handleDeleteOrder(order.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardAdminCRUD;