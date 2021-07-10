import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIe0WAUCLGoUgaqNtKmpFTK00ooCHTMRk",
    authDomain: "restaurants-9f3db.firebaseapp.com",
    projectId: "restaurants-9f3db",
    storageBucket: "restaurants-9f3db.appspot.com",
    messagingSenderId: "29348388846",
    appId: "1:29348388846:web:2753365f26414e925b38ff"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);
