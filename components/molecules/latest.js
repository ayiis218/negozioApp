/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { BsFillStarFill } from 'react-icons/bs';
import Default from '../../public/img/Images.svg';

import style from './style/popular.module.css';

const Latest = () => {
   const router = useRouter();
   return (
      <div className={style.section}>
         <h3>New</h3>
         <p className="text-secondary">You’ve never seen it before!</p>

         <div className={style.content}>
            {[...new Array(15)].map((index) => (
               <>
                  <div
                     key={index}
                     className={style.card}
                     onClick={() => router.push('/detail')}
                  >
                     <Image
                        src={Default}
                        alt="cardImage"
                        width={100}
                        height={100}
                     />
                     <div className={style.desc}>
                        <h6>Men's formal suit - Black & White</h6>
                        <span>$ 40.0</span>
                        <p className="text-secondary">Zalora Cloth</p>
                        <div className={style.rating}>
                           {[...new Array(5)].map(() => (
                              <>
                                 <BsFillStarFill color="#FFBA49" />
                              </>
                           ))}{' '}
                           <p className="mb-0 mt-0 ms-1 text-secondary">(10)</p>
                        </div>
                     </div>
                  </div>
               </>
            ))}
         </div>
      </div>
   );
};

export default Latest;
