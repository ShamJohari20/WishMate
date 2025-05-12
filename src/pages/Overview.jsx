import React from 'react';
import { Link } from 'react-router-dom';
import style from '../css/Overview.module.css';
import AddBirthday from '../pages/AddBirthday'
import ShowBirthdays from '../pages/ShowBirthdays'

function Overview() {
  return (
    <div>
      <header className={style.header}>

        <div className={style.logo}>
          <img src="/logo2.png" alt="WishMate Logo" className={style.logoImage} />
        </div>

        <div className={style.projectName}>
          <h1>Wish Mate</h1>
        </div>

        <div className={style.headerLinks}>
          <Link to="/AddBirthday" className={style.headerLink}>Add </Link>
          <Link to="/ShowBirthdays" className={style.headerLink}>View </Link>
        </div>
      </header>

      {/* Main Content Section */}
      <div className={style.container}>
        <div className={style.main}>
          <p className={style.p}>
            💌 Thoughtful Wishes, Delivered Effortlessly <br />
            Add birthdays. We’ll handle the rest.
            Surprise your friends and family with perfectly timed messages every single year.
          </p>

          <div className={style.buttons}>
            <Link to="/AddBirthday">
              <button className={style.btn}>Add Birthday 💌</button>
            </Link>
            <Link to="/ShowBirthdays">
              <button className={style.btn}>View Birthdays 🎈</button>
            </Link>
          </div>

          <div className={style.quote}>
            <p>🎁 Don’t Just Remember Make It Memorable
              Schedule once, celebrate forever. 💖</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
