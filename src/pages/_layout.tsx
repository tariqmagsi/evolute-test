import React, { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';

/** 
 * Layout Component
 *
 * A reusable layout component that wraps the entire application's content with common components.
 *
 * @param {PropsWithChildren} props - The component props, including the children elements.
 * @returns {JSX.Element} - The JSX element representing the layout of the application.
 */
const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <NavBar />
    <main>
      <ToastContainer position='bottom-left'/>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </>
)

export default Layout;
