import { useEffect } from "react";
import styles from "../Toast/Notification.module.css";

function Notification({ message, setMessage }) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, setMessage]);

  if (!message) return null;

  return (
    <div className={styles.toast}>
      <span className={styles.icon}>✓</span>

      <span className={styles.message}>{message}</span>

      <button className={styles.close} onClick={() => setMessage("")}>
        ×
      </button>
    </div>
  );
}

export default Notification;
