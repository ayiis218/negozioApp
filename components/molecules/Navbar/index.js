import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { BsSearch, BsFunnel } from 'react-icons/bs';
import { FiShoppingCart, FiBell, FiMail, FiUser } from 'react-icons/fi';

import Logo from '../../../public/icons/logo.png';
import style from '../style/navbar.module.css';

function Navbar() {
   const router = useRouter();
   return (
      <div className={`navbar bg-white ${style.section}`}>
         <div className={style.left}>
            <div className="d-flex align-items-start ms-4">
               <Image
                  src={Logo}
                  alt="logo"
                  onClick={() => router.push('/home')}
               />
            </div>
         </div>
         <div className={style.container}>
            <div className={style.search}>
               <input type="text" placeholder="Search" />
               <BsSearch color="var(--color-3)" />
            </div>

            <button
               className={style.filter}
               data-bs-toggle="modal"
               data-bs-target="#exampleModal"
            >
               <BsFunnel color="#8E8E93" />
            </button>
         </div>
         <div className={style.icon}>
            <FiShoppingCart
               size={20}
               color="#8E8E93"
               onClick={() => router.push('/bag')}
            />
            <FiBell
               size={20}
               color="#8E8E93"
               onClick={() => router.push('/notification')}
            />
            <FiMail
               size={20}
               color="#8E8E93"
               onClick={() => router.push('/chat')}
            />
            <FiUser
               size={20}
               color="#8E8E93"
               onClick={() => router.push('/profile')}
            />
         </div>
      </div>
   );
}

export default Navbar;
