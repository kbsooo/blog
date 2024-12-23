import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() { 
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.line}></div>
          <nav className={styles.nav}>
            <Link href="/">home/</Link>
            <Link href="/about">about/</Link>
            <Link href="/posts">posts/</Link>
            <Link href="/projects">projects/</Link>
            <Link href="/contact">contact/</Link>
          </nav>
        <div className={styles.line}></div>
      </header>
    </div>
    // <header className={styles.header}>
    //   <div className={styles.line}></div>
    //     <nav className={styles.nav}>
    //       <Link href="/">home/</Link>
    //       <Link href="/about">about/</Link>
    //       <Link href="/posts">posts/</Link>
    //       <Link href="/projects">projects/</Link>
    //       <Link href="/contact">contact/</Link>
    //     </nav>
    //   <div className={styles.line}></div>
    // </header>
  )
}