import React, { useState } from 'react';
import styles from './Register.module.css';

function Register() {
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Creating account with:", { phone, username, password });
        // Logic đăng ký ở đây
    };

    return (
        <>
            <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.title}>Create Account</h2>

                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                    required
                />

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    required
                />

                <button type="submit" className={styles.button}>Continue</button>

                <p className={styles.footerText}>
                    Already have an account? <a href="/login" className={styles.link}>Sign in</a>
                </p>
            </form>
        </div>
        </>
        
    );
}

export default Register;
