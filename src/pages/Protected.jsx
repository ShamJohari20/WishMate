import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import style from '../css/Protected.module.css'

function Protected({ Component }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const checkUser = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
            }
            else {
                navigate("/login")
            }
            setLoading(false)
        })
        return () => checkUser()
    }, [navigate])

    if (loading) {
        return (
            <div className={style.loadingContainer}>
                <div className={style.spinner}></div>
                <p className={style.loadingText}>Loading birthdays...</p>
            </div>
        );
    }


    return loggedIn ? <Component /> : null;
}

export default Protected