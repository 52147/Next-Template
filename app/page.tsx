import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Page({ children }: any) {
  return (
    <div>
      <Navbar />
      <h1>123252345</h1>
      {children}
      <Footer />
    </div>
  );
}
