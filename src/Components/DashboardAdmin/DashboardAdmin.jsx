import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import './Dashboard.css'
import avatar from '/avatar.png'

const DashboardAdmin = () => {
  const [users, setUsers] = useState([]);
  const [showApproved, setShowApproved] = useState(false);
  const [selectedButton, setSelectedButton] = useState('pendientes'); // Estado para el botón seleccionado

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  const approveUser = async (userId, refCode) => {
    if (!refCode) {
      alert("El Ref Code es obligatorio para aprobar el usuario.");
      return;
    }
    // const isUnique = await checkUniqueRefCode(refCode);
    // if (!isUnique) {
    //   alert("El Ref Code ya está en uso. Por favor, ingresa otro.");
    //   return;
    // }
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { isApproved: true, refCode: refCode });
    setUsers(users.map(user => user.id === userId ? { ...user, isApproved: true, refCode: refCode } : user));
  };

  // const checkUniqueRefCode = async (refCode) => {
  //   const querySnapshot = await getDocs(collection(db, "users").where("refCode", "==", refCode));
  //   return querySnapshot.empty;
  // };

  const handleButtonClick = (buttonType) => {
    setShowApproved(buttonType === 'activos');
    setSelectedButton(buttonType);
  };

  const deleteAccount = async (userId) => {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="dashboardContainer">
      <div className="headingBoxDashboard">
        <h1>Panel de Administrador</h1>
        <div>
          <button
            className={`buttonsDashboardAdmin ${selectedButton === 'pendientes' ? 'active' : ''}`}
            onClick={() => handleButtonClick('pendientes')}
          >            Pendientes          </button>
          <button
            className={`buttonsDashboardAdmin ${selectedButton === 'activos' ? 'active' : ''}`}
            onClick={() => handleButtonClick('activos')}
          >            Colaboradores Activos          </button>
        </div>
      </div>

      {users.filter(user => user.isApproved === showApproved).map((user) => (
        <div className="cardsAdmin" key={user.id}>
          <img className='avatarCard' src={avatar} alt="" />
          <div>
            <p> <strong>Instagram:</strong> {user.instagram}</p>
            <p><strong>Estado:</strong> {user.isApproved ? "Aprobado" : "Pendiente"}</p>
            <p><strong>e-mail:</strong> {user.email}</p> 

            {!user.isApproved ? (
              <>
                <input type="text" placeholder="Ref Code" id={`refCode-${user.id}`} />
                <button onClick={() => {
                  const refCode = document.getElementById(`refCode-${user.id}`).value;
                  approveUser(user.id, refCode);
                }}>Aprobar</button>
                <button onClick={() => deleteAccount(user.id)}>Rechazar</button>
              </>
            ) :
              <>
                <p> <strong>Ref Code:</strong> {user.refCode}</p>
                <p><strong>Ref link:</strong> <a href={`https://elevenprocar.com/?ref=${user.refCode}`} target="_blank" rel="noopener noreferrer">{`https://elevenprocar.com/?ref=${user.refCode}`}</a></p>
                <button className="deleteButtonAdmin" onClick={() => deleteAccount(user.id)}>Eliminar</button>
              </>
          }
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardAdmin;
