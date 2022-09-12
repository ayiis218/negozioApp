import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

import Logo from '../../../public/icons/logo.png';
import style from '../style/navbar.module.css';

function Navbar() {
   const router = useRouter();
   return (
      <div className={`navbar bg-white ${style.section}`}>
         <div className="container">
            <div className="d-flex align-items-start">
               <Image src={Logo} alt="logo" onClick={() => router.push('/')} />
            </div>
            <div className={style.container}>
               <div className={style.search}>
                  <input type="text" placeholder="Search" />
                  <BsSearch color="var(--color-3)" />
               </div>
            </div>
            <div className={style.auth}>
               <FiShoppingCart
                  size={20}
                  color="#8E8E93"
                  onClick={() => router.push('/bag')}
               />
               <div className={style.btn}>
                  <button
                     onClick={() => router.push('/auth/login')}
                     className="btn w-100 bg-primary text-white"
                  >
                     Login
                  </button>
                  <button
                     onClick={() => router.push('/auth/login')}
                     className="btn w-100 border rounded text-gray"
                  >
                     Register
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
