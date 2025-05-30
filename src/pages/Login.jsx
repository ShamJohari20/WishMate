import React from 'react'
import style from '../css/Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import AddBirthday from './AddBirthday';
import Overview from './Overview';


function Login() {
  // const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth();
  const navigate = useNavigate()

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('You have logged in successfully.')
        navigate('/Overview') 
        // ...
      })
      .catch((error) => {
        alert('Invalid credentials or user not registered.')
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  return (
    <>
      <div className={style.main}>
        <div className={style.parent}>

          <img className={style.logo} src="/logo2.png" width={150} />
          <div className={style.child2}>

            {/* <div className={style.form}>
              <label className={style.lbl}>Name</label>
              <input className={style.inp} type="text" />
            </div> */}

            <div className={style.form}>
              <label className={style.lbl}>Email</label>
              <input className={style.inp} type="email" placeholder='Enter Your Email'
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
              />
            </div>

            <div className={style.form}>
              <label className={style.lbl}>Password</label>
              <input className={style.inp} type="password" placeholder='Enter Your Password'
                value={password}
                onChange={(event) => { setPassword(event.target.value) }}
              />
            </div>

            <button onClick={loginUser} className={style.srtbtn}>Login</button>

            <Link to={"/Signup"} className={style.go}>New here? Sign up</Link>

          </div>

        </div>
      </div>
    </>
  )
}

export default Login