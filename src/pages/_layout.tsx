import React, { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/Footer/Footer';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navbar />
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
