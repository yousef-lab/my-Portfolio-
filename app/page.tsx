import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/1-navbar/navbar";
import { Section, Github } from "lucide-react";
import clsx from "clsx";
import About from "./components/2-about/page";

export default function Home() {
  return (
    <section className={styles.hero}>
      <Navbar />

      <div className={styles.content}>
        <h1 className={styles.title}>Web Developer & Designer</h1>

        <p className={styles.subtitle}>
          متخصص في تطوير تطبيقات ومواقع الويب الحديثة باستخدام أحدث التقنيات
        </p>

        <div className={styles.icons}>
          <a
            href="https://github.com/yousef-lab"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
          >
            <Github size={24}/>
          </a>
        </div>

        <div className={styles.buttons}>
          <a
            href="./components/4-projects/"
            className={clsx(styles.btn, styles.btnHoverOnly)}
          >
            عرض المشاريع
          </a>

          <a
            href="./components/5-contact"
            className={clsx(styles.btn, styles.btnHoverOnly)}
          >
            تواصل معي
          </a>
        </div>
      </div>



    </section>
  );
}
