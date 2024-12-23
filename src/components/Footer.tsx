import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() { 
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.line}></div>
        <p className={styles.p}>© 2024 <Link href="https://github.com/kbsooo">KBSOO</Link></p>
      </footer>
    </div>
  )
}