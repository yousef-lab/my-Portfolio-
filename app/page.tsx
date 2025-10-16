import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <h1 className={styles.qa}>Welcome to My Portfolio</h1>
      <Navbar />
    </div>
  );
}
