import React, { useState } from 'react'
import axios from 'axios'
export const UserContext = React.createContext()
export default function UserProvider(props) {
    const initState = {
        user: {},
        token: ""
    }
    const [userState, setUserState] = useState(initState)

    function signup(clients) {
        axios.post(`/auth/signup`, clients
        .then (res => {
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(preUserState => ({
                ...preUserState,
                user,
                token
            }))
        })
        .catch (err => console.log(err.response.data.errMsg))
    }

    function login(clients) {
        axios.post('/auth/login', clients)
        .then (res =>{
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(preUserState => ({
                ...preUserState,
                user,
                token
            }))
        })
        .catch (err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider value={{ ...userState, signup, login,}}>
            { props.children }
        </UserContext.Provider>
    )
}