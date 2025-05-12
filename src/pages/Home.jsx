import React from 'react'
import style from '../css/Home.module.css'
import Login from './Login'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()
    const goToLogin = ()=>{

        navigate("/Login")

    }
    return (
        <>
            <div className={style.main}>
                <div className={style.parent}>

                    <img className={style.logo} src="/logo2.png" width={150}/>
                    <div className={style.child2}>
                        <h2>Welcome to Wishmate💌</h2>
                        <p>Celebrate Every Birthday Automatically🎂</p>
                        <button onClick={goToLogin} className={style.srtbtn}>Start</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home