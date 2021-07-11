import { firebaseApp } from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'

//Tener acceso a la base de datos.
const db = firebase.firestore(firebaseApp)

//Función para indicar si el usuario esta logueado
export const isUserLogged = () => {
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })
}