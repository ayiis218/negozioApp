import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <NextNProgress color="var(--secondColor)" height={5} />
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
