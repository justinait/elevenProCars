import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  getAuth, 
  signOut, 
  signInWithPopup, 
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth"

import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"
import { doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
const auth = getAuth(app);
export const db = getFirestore(app);

// export const onSignIn = async ({email, password}) => {
    
//   try {
//     const res = await signInWithEmailAndPassword(auth, email, password)
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// }
export const onSignIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, "users", res.user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log(userData);
      if (userData.rol === "JsVd2" || userData.isApproved) {
        return res;
      } else {
        alert("Your account is not approved yet. Please contact the administrator.");
      }
    } else {
      alert("User does not exist.");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const onLogOut = () => {
  signOut(auth);
  console.log('cerro');
}

let googleProvider = new GoogleAuthProvider();

export const loginGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    return res
  } catch (error) {
    console.log(error);
  }
}

export const signUp = async ({email, password}) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password)
    return res; //res seria como una confirmacion si esta todo ok 
  } catch (error) {
    console.log(error);
  }
}

export const forgotPassword = async ({email}) => {
  try {
    let res = await sendPasswordResetEmail(auth, email)
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const uploadFile = async (file) =>{
  const storageRef = ref(storage, v4() )
  await uploadBytes(storageRef, file);
  let url = await getDownloadURL(storageRef)
  return url;
}