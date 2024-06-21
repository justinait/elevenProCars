import React, { useEffect, useState, useContext } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import '../DashboardAdmin/Dashboard.css'
import avatar from '/avatar.png'

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
  
  return (
    <div className='dashboardContainer'>

      <h2>My referrals</h2>
      <h6> <strong>Instagram:</strong>  {user.instagram}</h6>
      <p className='refCodeUserDashboard' > <strong>Reference code:</strong> {user.refCode} </p>
      
      {orders.map((e) => (
        <div className='cards' key={e.id}>
          <div className='cardMainData'>
            <img className='avatarCard' src={avatar} alt="" />
            <div className='cardMainDataText'>
              <h5>{e.firstName}</h5>
              <p className='carCardDashboard' >{e.carModel}</p>
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
              <p className='cardInfoText'>€ {(e.finalRate * 0.10)}</p>
              {/* .toFixed(2) */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardUsers;
