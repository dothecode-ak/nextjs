import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Welcome from "../components/Welcome";
import Link from "next/link";

function App() {
  return (
    <div className={styles.container}>
      <Welcome year="2023" />
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/home">
        <a>Home</a>
      </Link>
    </div>
  );
}
export default App;
