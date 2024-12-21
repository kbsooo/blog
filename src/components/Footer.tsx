import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() { 
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <p className={styles.p}>© 2024 KBSOO</p>
      <p className={styles.p}>follow me on <Link href="https://github.com/kbsooo">github</Link></p>
    </footer>
  )
}