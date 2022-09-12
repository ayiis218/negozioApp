import React, { useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/layoutMain';
import LayoutAut from '../layouts/layoutAuth';
import '../styles/globals.css';

const layouts = {
   MainLayout: MainLayout,
   LayoutAut: LayoutAut,
};

function NoLayout({ children }) {
   return <>{children}</>;
}

function MyApp({ Component, pageProps }) {
   const { pathname } = useRouter();
   const Layouts = layouts[Component.layouts] || NoLayout;

   useEffect(() => {
      window.scroll(0, 0);
   }, [pathname]);
   return (
      <>
         <Layouts>
            <NextNProgress color="var(--secondColor)" height={5} />
            <Component {...pageProps} />
         </Layouts>
      </>
   );
}

export default MyApp;
