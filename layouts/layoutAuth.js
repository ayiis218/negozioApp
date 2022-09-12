import React from 'react';
import LayoutAut from '../components/molecules/Navbar/auth';

export default function MainLayouts({ children }) {
   return (
      <>
         <LayoutAut />
         <main>{children}</main>
      </>
   );
}
