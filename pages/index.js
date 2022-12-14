import Head from 'next/head';
// import Loading from 'react-content-loader';
import Slider from '../components/molecules/slider';
import Category from '../components/molecules/category';
import Popular from '../components/molecules/popular';
import Latest from '../components/molecules/latest';
import styles from '../styles/Home.module.css';

function Home() {
   return (
      <div className={styles.section}>
         <Head>
            <title>Negozio - Landing Page</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/negozio.svg" />
         </Head>
         {/* <div className="mb-5">
            <Navbar />
         </div> */}
         <div className="mt-5 mb-5">
            <Slider />
            <Category />
         </div>
         <div className={styles.content}>
            <Latest />
         </div>
         <div className={styles.popular}>
            <Popular />
         </div>
      </div>
   );
}

Home.layouts = 'LayoutAut';

export default Home;
