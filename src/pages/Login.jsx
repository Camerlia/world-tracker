import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("name@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className={`${styles.login} text-black md:p-20 p-6` }>
      <form className={`${styles.form} md:max-w-3xl m-auto max-w-full`}>
        <div className={styles.row}>
          <label className={`text-white`} htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label className={`text-white`} htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}
