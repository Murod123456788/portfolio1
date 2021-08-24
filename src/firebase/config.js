
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDwKlZryIcNNj7_fAAEiTBzouv_fovfmTQ",
    authDomain: "sasasasasa-a5c49.firebaseapp.com",
    projectId: "sasasasasa-a5c49",
    storageBucket: "sasasasasa-a5c49.appspot.com",
    messagingSenderId: "102502582254",
    appId: "1:102502582254:web:4e4077f1cc583a509a30ff",
    measurementId: "G-8M850RBKHW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;