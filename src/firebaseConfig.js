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
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAISi0NveB_WYAyOU4N7TZCpOizytjrqSI",
  authDomain: "elevenprocars-d280c.firebaseapp.com",
  projectId: "elevenprocars-d280c",
  storageBucket: "elevenprocars-d280c.appspot.com",
  messagingSenderId: "322681451303",
  appId: "1:322681451303:web:906b30cdf7d6c2f07b2f02",
  measurementId: "G-CSE3Z7FYD7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
const auth = getAuth(app);
export const db = getFirestore(app);

export const onSignIn = async ({email, password}) => {
    
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    return res;
  } catch (error) {
    console.log(error);
  }
  
}

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