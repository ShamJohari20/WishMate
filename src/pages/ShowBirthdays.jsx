import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import style from '../css/ShowBirthdays.module.css'

function ShowBirthdays() {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userUID = user.uid;
        const birthdayCollectionRef = collection(db, 'users', userUID, 'birthdays');

        try {
          const snapshot = await getDocs(birthdayCollectionRef);
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          setWishes(data);
        } catch (error) {
          console.error('Error fetching birthdays:', error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("User not logged in");
        setWishes([]);
        setLoading(false);
      }
    });

    return () => unsubscribe(); // cleanup
  }, []);

  if (loading) return <p>Loading birthdays...</p>;

  return (
    <>
      <div className={style.main}>



          <div className={style.child1}>
            <h2>Saved Birthdays 🎉</h2>
          </div>

          {/* <div className={style.child2}> */}
            {wishes.length === 0 ? (
              <h1>No birthdays found.</h1>
            ) : (
              <div className={style.child3}>
                
                  {wishes.map((wish) => (
                    <div className={style.wish} key={wish.id}>
                      <p>{wish.name}</p> 
                      <p>{wish.birthdate} </p>
                      <p>{wish.email} </p>
                      <p>{wish.whatsappno} </p>
                      <p>From: {wish.from}</p>
                    </div>
                  ))}
                
              </div>
            )}
          {/* </div> */}


      </div>
    </>
  );
}

export default ShowBirthdays;
