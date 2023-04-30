// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATD4nfT_-aO6d9ZaeGzEicUATD-zUOlf8",
  authDomain: "ap-proyect-79d59.firebaseapp.com",
  projectId: "ap-proyect-79d59",
  storageBucket: "ap-proyect-79d59.appspot.com",
  messagingSenderId: "312323647147",
  appId: "1:312323647147:web:9e1ae632fab2274eb279ee",
  measurementId: "G-S5EDLC67J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


// recibe un file
// retorna una URL del archivo subido
export async function uploadFile(file) {
    const storageRef = ref(storage, Date.now() + "-" + file.name)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
    }

