import firebase from "firebase/app";
import "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiG5CVR5_j8FUNolcr-tM2-ASr8D7_Z84",
    authDomain: "netflix-clone-awesome.firebaseapp.com",
    projectId: "netflix-clone-awesome",
    storageBucket: "netflix-clone-awesome.appspot.com",
    messagingSenderId: "784731236520",
    appId: "1:784731236520:web:2ec9785f0a01a988b3fa9d",
    measurementId: "G-8ZPBYT151E"
};

const initializeFirebaseApp = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};

initializeFirebaseApp();

const auth = firebase.auth();

export { auth };