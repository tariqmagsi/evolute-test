import React from 'react';
import { Inter } from 'next/font/google';
import styles from './Navbar.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export interface NavBarProps {}

/**
 * Navbar Component
 *
 * This component represents the navigation bar of the application.
 *
 * @returns {JSX.Element} - The JSX element representing the Navbar.
 */
const NavBar: React.FC<NavBarProps> = () => <nav className={[styles.navbar, inter.className].join(' ')}>
  <div className={styles.logo}>
    <Link href="/">Evolute Test</Link>
  </div>
  <ul className={styles.navLinks}>
    <div className={styles.menu}>
      <li><Link href="/">Characters</Link></li>
      <li><Link href="/statistics">Statistics</Link></li>
    </div>
  </ul>
</nav>

export default NavBar;
