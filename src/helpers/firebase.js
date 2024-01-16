// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtKt-FI3K4udzr7quoXI20vFrfjw5cnu4",
  authDomain: "nodstonealpha.firebaseapp.com",
  projectId: "nodstonealpha",
  storageBucket: "nodstonealpha.appspot.com",
  messagingSenderId: "132169754191",
  appId: "1:132169754191:web:5a8030b77bddf83c69ac3a",
  measurementId: "G-T3WGR43L8N"
};


firebase.initializeApp(firebaseConfig);

export default firebase;

// Initialize Firebase
export const database = firebase.database();
