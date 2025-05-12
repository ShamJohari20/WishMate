import React, { useState } from 'react';
import style from '../css/Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './Firebase'; // Your Firestore config
import { auth } from './Firebase'; // Your Auth config
import Login from './Login';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const signupUser = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        password:password
      });

      alert("Signup successful now You Can Login!");

      navigate('/Login')

      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.parent}>
        <img className={style.logo} src="/logo2.png" width={150} alt="Logo" />

        <div className={style.child2}>
          <div className={style.form}>
            <label className={style.lbl}>Name</label>
            <input
              className={style.inp}
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className={style.form}>
            <label className={style.lbl}>Email</label>
            <input
              className={style.inp}
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className={style.form}>
            <label className={style.lbl}>Password</label>
            <input
              className={style.inp}
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button onClick={signupUser} className={style.srtbtn}>Signup</button>

          <Link to="/Login" className={style.go}>Already registered? Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
