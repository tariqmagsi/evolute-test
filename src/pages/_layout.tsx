import React, { PropsWithChildren } from 'react';
// import Navbar from '@/components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
// import Footer from '@/components/Footer/Footer';

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
    {/* <Navbar /> */}
    <main>
      <ToastContainer position='bottom-left'/>
      {children}
    </main>
    <footer>
      {/* <Footer /> */}
    </footer>
  </>
)

export default Layout;
