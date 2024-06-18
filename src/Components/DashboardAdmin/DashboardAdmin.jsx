import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const DashboardAdmin = () => {
  const [users, setUsers] = useState([]);
  const [showApproved, setShowApproved] = useState(false);

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
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { isApproved: true, refCode: refCode });
    setUsers(users.map(user => user.id === userId ? { ...user, isApproved: true, refCode: refCode } : user));
  };

  const deleteAccount = async (userId) => {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h1>Panel de Administrador</h1>
      <div>
        <button onClick={() => setShowApproved(false)}>Pendientes</button>
        <button onClick={() => setShowApproved(true)}>Colaboradores Activos</button>
      </div>
      <ul>
        {users.filter(user => user.isApproved === showApproved).map((user) => (
          <li key={user.id}>
            <p>e-mail: {user.email}</p> 
            <p>Instagram: {user.instagram}</p>
            <p>Estado: {user.isApproved ? "Aprobado" : "Pendiente"}</p>

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
                <p>Ref Code: {user.refCode}</p>
                <button onClick={() => deleteAccount(user.id)}>Eliminar</button>
              </>            
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardAdmin;