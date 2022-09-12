import React from 'react';
import MainLayouts from '../components/molecules/Navbar';

export default function SecondLayouts({ children }) {
   return (
      <>
         <MainLayouts />
         <main>{children}</main>
      </>
   );
}
