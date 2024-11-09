import styles from "../login/Login.module.css"
import { useState } from "react";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    return(
        <>
             <div className={styles.loginContainer}>
            <form onSubmit={(e) => handleLoginSubmit(e, username, password, setError)} className={styles.form}>
                <h2 className={styles.title}>Login</h2>

                {error && <p className={styles.error}>{error}</p>}

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.linksContainer}>
                    <a className={styles.link}>Forgot Password</a>
                </div>
                <div className={styles.linksContainer}>
                    <div>Dont't have an account? <a href="/register" className={styles.link}>Create Account</a></div>
                </div>

                <button type="submit" className={styles.submitButton}>Login</button>
            </form>
        </div>
    
        </>
    );
}

export default Login