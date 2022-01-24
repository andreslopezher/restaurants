import React, { useEffect , useState } from 'react'
import { StyleSheet } from 'react-native'
import firebase from 'firebase/app'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import { getCurrentUser, isUserLogged } from '../../utils/actions'
import Loading from '../../components/Loading'

export default function Account() {
    const [login, setLogin] = useState(null)

    useEffect(() => {
        //const user = getCurrentUser()
        //user ? setLogin(true) : setLogin(false) 
        setLogin(isUserLogged())
    }, [])

    if (login == null){
        return <Loading isVisible={true} text="Cargando..."/>
    }

    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})