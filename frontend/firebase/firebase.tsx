import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyDu6KoqIpJDSrFM_V70srV209h_wqBJlKE",
  authDomain: "fofocando-7e973.firebaseapp.com",
  projectId: "fofocando-7e973",
  storageBucket: "fofocando-7e973.appspot.com",
  messagingSenderId: "494457284807",
  appId: "1:494457284807:web:7a075f10d3592c9dad36e2",
  measurementId: "G-T3P0KXVP7G"
};

// Verifica se o Firebase já foi inicializado
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
