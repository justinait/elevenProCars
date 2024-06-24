import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import './Dashboard.css'
import avatar from '/avatar.png'

const DashboardAdminCRUD = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    firstName: '',
    month: '',
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
      const ordersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Ordenar los pedidos por fecha de manera descendente (más reciente primero)
      ordersList.sort((a, b) => b.createdAt - a.createdAt); 
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
    const { firstName, month, carModel, finalRate, refCode } = newOrder;
    if (!firstName || !month || !carModel || !finalRate || !refCode) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    const newOrderWithDate = {
      ...newOrder,
      createdAt: new Date()
    };
    try {
      const docRef = await addDoc(collection(db, 'orders'), newOrderWithDate);
      setOrders([...orders, { id: docRef.id, ...newOrderWithDate }]);
      setNewOrder({ firstName: '', month: '', carModel: '', finalRate: '', refCode: '' });
    } catch (error) {
      console.error('Error adding order: ', error);
    }
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

  const getUserCommission = (refCode) => {
    const user = users.find(user => user.refCode === refCode);
    return user ? user.commission || 10 : 10;
  };
  return (
    <div className='dashboardContainer'>
      <h1>Administrador: rentas</h1>

      <div className='cardsAdmin'>
        <div>

          <h5 className='cardAdminTitle'>Agregar Pedido</h5>
          <input type="text" name="firstName" placeholder="Nombre y apellido" value={newOrder.firstName} onChange={handleInputChange} />
          <input type="text" name="month" placeholder="Mes" value={newOrder.month} onChange={handleInputChange} />
          <input type="text" name="carModel" placeholder="Modelo del Coche" value={newOrder.carModel} onChange={handleInputChange} />
          <input type="number" name="finalRate" placeholder="Tarifa Final" value={newOrder.finalRate} onChange={handleInputChange} />
          <select className='selectCardCRUDAdmin' name="refCode" value={newOrder.refCode} onChange={handleInputChange}>
            <option value="">Seleccionar Ref Code</option>
            {users.filter(user => user.refCode).map((user) => (
              <option key={user.id} value={user.refCode}>{user.refCode}</option>
            ))}
          </select>
          <button className='deleteButtonAdmin selectCardCRUDAdmin' onClick={handleAddOrder}>Agregar Pedido</button>
        </div>
      </div>

      <div>
        <h3>Lista de Pedidos</h3>
          {orders.map((e) => (
          <div className='cards' key={e.id}>
            <div className='cardMainData'>
              <img className='avatarCard' src={avatar} alt="" />
              <div className='cardMainDataText'>
                <h5>{e.firstName}</h5>
                <p className='carCardDashboard' >{e.carModel}</p>
                <p><strong>Colaborador:</strong> {e.refCode}</p>
              </div>
            </div>
            <div className='infoBox'>
              <div>
                <p className='cardInfoTitle'>Price</p>
                <p className='cardInfoText'>€ {e.finalRate}</p>
              </div>
              <div>
                <p className='cardInfoTitle'>Month</p>
                <p className='cardInfoText'>{e.month}</p>
              </div>
              <div>
                <p className='cardInfoTitle'>Comission</p>
                <p className='cardInfoText'>€ {(e.finalRate * (getUserCommission(e.refCode) / 100))}</p>
                {/* .toFixed(2) */}
              </div>
            </div>
            <button className="deleteButtonAdmin" onClick={() => handleDeleteOrder(e.id)}>Eliminar</button>
          </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardAdminCRUD;