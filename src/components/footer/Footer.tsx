import React from 'react';
import { Inter } from 'next/font/google';
import styles from './Footer.module.css';

const inter = Inter({ subsets: ['latin'] })

export interface FooterProps {}

/**
 * Footer Component
 *
 * This component represents the footer of the application.
 *
 * @returns {JSX.Element} - The JSX element representing the Footer.
 */
const Footer: React.FC<FooterProps> = () => <div className={[styles.footer, inter.className].join(' ')}>
    <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Evolute Test. All rights reserved.</p>
    </div>
</div>


export default Footer;
