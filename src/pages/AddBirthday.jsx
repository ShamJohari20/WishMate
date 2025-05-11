import React, { useState } from 'react';
import style from '../css/AddBirthday.module.css';
import { db } from './Firebase';
import { collection, addDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function AddBirthday() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappno, setWhatsappno] = useState('');
  const [from, setFrom] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);


  const auth = getAuth();
  const user = auth.currentUser;  // Get current logged-in user
  const userUID = user?.uid;       // Get current user's UID

  const saveBirthday = async () => {
    if (!name || !birthdate || !email || !whatsappno || !from) {
      alert("All fields are required");
      return;
    }

    if (!userUID) {
      alert("You must be logged in to save Credential");
      return;
    }

    try {
      // Save the birthday data under the current user's UID in the "birthdays" subcollection
      await addDoc(collection(db, 'users', userUID, 'birthdays'), {
        name,
        birthdate,
        email,
        whatsappno,
        from
      });
      alert("Birthday saved successfully Enjoy..!");

      // Reset form
      setName('');
      setBirthdate('');
      setEmail('');
      setWhatsappno('');
    } catch (error) {
      alert("Error saving birthday: " + error.message);
    }
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.parent}>
          <div className={style.child1}>
            <h2>Add Birthday</h2>
          </div>

          <div className={style.child2}>
            <div className={style.mainform}>
              <div className={style.form}>
                <label className={style.lbl}>Name</label>
                <input className={style.inp} type="text" placeholder="Enter the name of your special person"
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className={style.form}>
                <label className={style.lbl}>Birthdate</label>
                <input className={style.inp} type="date"
                  value={date} onChange={(e) => setBirthdate(e.target.value)} />
              </div>

              <div className={style.form}>
                <label className={style.lbl}>Email</label>
                <input className={style.inp} type="email" placeholder="Enter Email"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className={style.form}>
                <label className={style.lbl}>WhatsApp</label>
                <input className={style.inp} type="tel" placeholder="Enter WhatsApp no"
                  value={whatsappno} onChange={(e) => setWhatsappno(e.target.value)} />
              </div>

              <div className={style.form}>
                <label className={style.lbl}>From</label>
                <input className={style.inp} type="text" placeholder="Enter Your Name"
                  value={from} onChange={(e) => setFrom(e.target.value)} />
              </div>

            </div>

            <button onClick={saveBirthday} className={style.abdbtn}>Set 💌</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBirthday;
