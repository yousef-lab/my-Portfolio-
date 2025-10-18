"use client";
import { Home, User, Heart, Book, Archive } from "lucide-react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link
        href="/"
        className={clsx(styles.icon, pathname === "/" && styles.active)}
      >
        <Home size={20} />
      </Link>

      <Link
        href="/components/2-about"
        className={clsx(styles.icon, pathname === "/components/2-about" && styles.active)}
      >
        <User size={20} />
      </Link>

      <Link
        href="/components/3-skill"
        className={clsx(styles.icon, pathname === "/components/3-skill" && styles.active)}
      >
        <Heart size={20} />
      </Link>

      <Link
        href="/components/4-projects"
        className={clsx(styles.icon, pathname === "/components/4-projects" && styles.active)}
      >
        <Book size={20} />
      </Link>

      <Link
        href="/components/5-contact"
        className={clsx(styles.icon, pathname === "/components/5-contact" && styles.active)}
      >
        <Archive size={20} />
      </Link>
    </nav>
  );
}


 