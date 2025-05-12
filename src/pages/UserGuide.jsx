import React from 'react';
import styles from '../css/UserGuide.module.css';

function UserGuide() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}> How to Set Add a Birthday in WishMate</h1>

                    <p className={styles.description}>
                        To make sure birthday wishes are sent on the correct date and to the right person, please carefully follow the instructions below.
                    </p>

                    <h2 className={styles.subTitle}>Field by Field Guidance</h2>
                    <ul className={styles.list}>
                        <li><strong>Name:</strong> Enter the full name of your special person  (e.g. <em>Virat Kohli</em>).</li>

                        <li>
                            <strong>Birthdate:</strong>
                            Select the person’s <strong>actual birthdate including correct year</strong> (not the current year).
                            <ul className={styles.subList}>
                                <li>Correct: <code>2001-08-27</code></li>
                                <li>Incorrect: <code>2025-08-27</code></li>
                            </ul>
                            <p>This helps WishMate remember their real age and schedule wishes accurately.</p>
                        </li>

                        <li><strong>Email:</strong> Provide a valid email (e.g. <em>virat.kohli@gmail.com</em>).</li>
                        <li><strong>WhatsApp No:</strong> Include country code (e.g. <em>+919876543210</em>).</li>
                        <li><strong>From:</strong> Enter your name or nickname (e.g. <em>Anushka</em>).</li>
                    </ul>

                    <h2 className={styles.subTitle}>Best Practices</h2>
                    <ul className={styles.list}>
                        <li>Always use the correct <strong>birth year</strong>.</li>
                        <li>Verify email and phone before submitting.</li>
                        <li>Fill in all fields to ensure the wish is delivered.</li>
                    </ul>

                    <h2 className={styles.subTitle}>Example Entry</h2>
                    <div className={styles.exampleBox}>
                        <p><strong>Name:</strong> Virat Kohli</p>
                        <p><strong>Birthdate:</strong> 2001-08-27 </p>
                        <p><strong>Email:</strong> virat.kohli@gmail.com</p>
                        <p><strong>WhatsApp No:</strong> +919812345678</p>
                        <p><strong>From:</strong> Anushka</p>
                    </div>
                    <br />
                    <div className={styles.noticeBox}>
                        <p><strong>Free Version Notice:</strong> In the free version of WishMate, birthday wishes will only be sent via <strong>Email between 12:00 AM to 1:00 AM</strong>. WhatsApp and SMS support is coming soon in the premium version.</p>
                    </div>

                    <p className={styles.footer}>🎉 Once everything is filled correctly, click <strong>Set 💌</strong> WishMate will take care of the rest!</p>
                </div>
            </div>
        </>
    );
}

export default UserGuide;
