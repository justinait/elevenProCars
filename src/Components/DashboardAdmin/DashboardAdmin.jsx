import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, doc, updateDoc, deleteDoc, query, where  } from "firebase/firestore";
import './Dashboard.css'
import avatar from '/avatarneutro.png'
import { Modal, Button } from 'react-bootstrap';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const DashboardAdmin = () => {
  const [users, setUsers] = useState([]);
  const [showApproved, setShowApproved] = useState(false);
  const [selectedButton, setSelectedButton] = useState('pendientes');
  const [userToDelete, setUserToDelete] = useState(null);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false); 

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  const approveUser = async (userId, refCode, commission=10) => {
    if (!refCode) {
      alert("El Ref Code es obligatorio para aprobar el usuario.");
      return;
    }
    const isUnique = await checkUniqueRefCode(refCode);
    if (!isUnique) {
      alert("El Ref Code ya está en uso. Por favor, ingresa otro.");
      return;
    }
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { isApproved: true, refCode: refCode, commission: commission  });
    setUsers(users.map(user => user.id === userId ? { ...user, isApproved: true, refCode: refCode } : user));
  };

  const checkUniqueRefCode = async (refCode) => {
    const q = query(collection(db, "users"), where("refCode", "==", refCode));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  };

  const handleButtonClick = (buttonType) => {
    setShowApproved(buttonType === 'activos');
    setSelectedButton(buttonType);
  };

  const deleteAccount = async () => {
    const userRef = doc(db, "users", userToDelete);
    await deleteDoc(userRef);
    setUsers(users.filter(user => user.id !== userToDelete));
    handleClose();
  };

  const handleShow = (userId) => {
    setUserToDelete(userId);
    setShow(true);
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Mostrar "Copied" por 2 segundos
    });
  };
  const handleClose = () => setShow(false);
  return (
    <div className="dashboardContainer">
      <div className="headingBoxDashboard">
        <h1>Panel de Administrador</h1>
        <div>
          <p
            className={`buttonsDashboardAdmin ${selectedButton === 'pendientes' ? 'active' : ''}`}
            onClick={() => handleButtonClick('pendientes')}
          >            Pendientes          </p>
          <p
            className={`buttonsDashboardAdmin ${selectedButton === 'activos' ? 'active' : ''}`}
            onClick={() => handleButtonClick('activos')}
          >            Colaboradores Activos          </p>
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
                <input type="number" placeholder="Comisión (%)" id={`commission-${user.id}`} defaultValue={10} />
                <button onClick={() => {
                  const refCode = document.getElementById(`refCode-${user.id}`).value;
                  const commission = document.getElementById(`commission-${user.id}`).value;
                  approveUser(user.id, refCode, commission);
                }}>Aprobar</button>
                <button onClick={() => handleShow(user.id)}>Rechazar</button>
              </>
            ) :
            <>
              <p> <strong>Ref Code:</strong> {user.refCode}</p>
              <p><strong>Comisión:</strong> {user.commission || 10} %</p>
              {
                user.userCBU &&
                <p><strong>CBU:</strong> {user.userCBU} <ContentCopyIcon fontSize="small" onClick={() => copyToClipboard(user.userCBU)} style={{ cursor: 'pointer', marginLeft: '5px' }}  /></p> 
              }
              <p><strong>Ref link:</strong> <a href={`https://elevenprocar.com/?ref=${user.refCode}`} target="_blank" rel="noopener noreferrer">{`https://elevenprocar.com/?ref=${user.refCode}`}</a></p>
              <button className="deleteButtonAdmin" onClick={() => handleShow(user.id)}>Eliminar</button>
            </>
          }
          
          </div>
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro que desea eliminar este colaborador?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={deleteAccount}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DashboardAdmin;
