// src/components/ClientLayout.js
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GAListener from '@/components/GAListener';
import SkipToContent from '@/components/SkipToContent';

const ClientLayout = ({ children }) => {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main
        id="main-content"
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          margin: '0 20px',
        }}
      >
        {children}
      </main>
      <Footer />
      <GAListener />
    </>
  );
};

export default ClientLayout;
