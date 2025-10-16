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
      <Link href="/" className={clsx(styles.icon, pathname === "/" && styles.active)}>
        <Home size={20} />
      </Link>

      <Link href="/about" className={clsx(styles.icon, pathname === "/about" && styles.active)}>
        <User size={20} />
      </Link>

      <Link href="/skill" className={clsx(styles.icon, pathname === "/skill" && styles.active)}>
        <Heart size={20} />
      </Link>

      <Link href="/projects" className={clsx(styles.icon, pathname === "/projects" && styles.active)}>
        <Book size={20} />
      </Link>
    </nav>
  );
}

 