import React, { useState } from 'react';
import Image from 'next/image';

import { BsFillStarFill } from 'react-icons/bs';

import picture from '../../public/img/photo.svg';
import picture2 from '../../public/img/photo2.svg';
import picture3 from '../../public/img/photo3.svg';
import picture4 from '../../public/img/photo4.svg';
import picture5 from '../../public/img/photo5.svg';
import picture6 from '../../public/img/photo.svg';

import Counter from '../../components/atoms/match';
import Rating from '../../components/atoms/rating';

import style from '../../styles/detail.module.css';
import { useRouter } from 'next/router';

function Detail() {
   const router = useRouter();
   const [photo, setPhoto] = useState(picture);
   return (
      <div className={style.section}>
         <div className={style.content}>
            <div className="row">
               <div className="col-4 col-lg-4">
                  <Image
                     src={photo}
                     alt=""
                     width={400}
                     height={400}
                     className={style.images}
                  />
                  <div className={style.list}>
                     <Image
                        src={picture}
                        alt=""
                        width={70}
                        height={70}
                        className={style.images}
                        onClick={() => setPhoto(picture)}
                     />
                     <Image
                        src={picture2}
                        alt=""
                        width={70}
                        height={70}
                        className={style.images}
                        onClick={() => setPhoto(picture2)}
                     />
                     <Image
                        src={picture3}
                        alt=""
                        width={70}
                        height={70}
                        className={style.images}
                        onClick={() => setPhoto(picture3)}
                     />
                     <Image
                        src={picture4}
                        alt=""
                        width={70}
                        height={70}
                        className={style.images}
                        onClick={() => setPhoto(picture4)}
                     />
                     <Image
                        src={picture5}
                        alt=""
                        width={70}
                        height={70}
                        className={style.images}
                        onClick={() => setPhoto(picture5)}
                     />
                  </div>
               </div>

               <div className="col-8">
                  <div className={style.title}>
                     <h3 className="mb-0">Baju muslim pira</h3>
                     <span className={`text-secondary ${style.store}`}>
                        Zalora cloth
                     </span>
                  </div>

                  <div className={style.rating}>
                     {[...new Array(5)].map(() => (
                        <>
                           <BsFillStarFill color="#FFBA49" />
                        </>
                     ))}{' '}
                     <p className={`mb-0 mt-0 ms-1 text-secondary`}>(10)</p>
                  </div>

                  <div className={`mb-5 ${style.price}`}>
                     <span className={`text-secondary`}>Price</span>
                     <h3>$ 20.0</h3>
                  </div>

                  {/* <div className={style.color}>
                     <h6>Color</h6>
                     <Color />
                  </div> */}

                  <div className={`mt-5 ${style.match}`}>
                     <div>
                        <h6>Size</h6>
                        <Counter min={28} max={35} />
                     </div>
                     <div className="ms-5">
                        <h6>Jumlah</h6>
                        <Counter min={1} max={25} />
                     </div>
                  </div>

                  <div className={style.btn}>
                     <div className="row">
                        <div className="col-6">
                           <div className="row">
                              <div className="col-6">
                                 <button
                                    type="button"
                                    className="btn w-100 border rounded text-gray"
                                 >
                                    Chat
                                 </button>
                              </div>
                              <div className="col-6">
                                 <button
                                    type="button"
                                    className="btn w-100 border rounded text-gray"
                                 >
                                    Add bag
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div className="col-6">
                           <button
                              type="button"
                              className="btn w-100 border rounded text-gray"
                           >
                              Buy now
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={style.info}>
               <h3 className={style.title}>Informasi Produk</h3>

               <div className={style.detail}>
                  <h5 className={style.title}>Condition</h5>
                  <h6 className="text-secondary">New</h6>
               </div>
               <div className={style.detail}>
                  <h5 className={style.title}>Description</h5>
                  <p className="text-secondary">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     <br />
                     <br />
                     Donec non magna rutrum, pellentesque augue eu, sagittis
                     velit. Phasellus quis laoreet dolor. Fusce nec pharetra
                     quam. Interdum et malesuada fames ac ante ipsum primis in
                     faucibus. Praesent sed enim vel turpis blandit imperdiet ac
                     ac felis. Etiam tincidunt tristique placerat. Pellentesque
                     a consequat mauris, vel suscipit ipsum. Donec ac mauris
                     vitae diam commodo vehicula. Donec quam elit, sollicitudin
                     eu nisl at, ornare suscipit magna.
                     <br />
                     <br />
                     Donec non magna rutrum, pellentesque augue eu, sagittis
                     velit. Phasellus quis laoreet dolor. Fusce nec pharetra
                     quam. Interdum et malesuada fames ac ante ipsum primis in
                     faucibus. Praesent sed enim vel turpis blandit imperdiet ac
                     ac felis. In ultricies rutrum tempus. Mauris vel molestie
                     orci.
                  </p>
               </div>
            </div>
            <div className={style.star}>
               <h3 className="mb-2">Product Review</h3>
               <div className="d-flex">
                  <div className={style.ratingProduct}>
                     <div className={style.productRating}>
                        <span className={style.mainRating}>5.0</span>
                        <span className={style.allRating}>/10</span>
                     </div>
                     <div className="d-flex justify-content-evenly">
                        {[...new Array(5)].map(() => (
                           <>
                              <BsFillStarFill size={20} color="#FFBA49" />
                           </>
                        ))}
                     </div>
                  </div>

                  <div className="ms-5">
                     <Rating rating={5} total={4} line={true} />
                     <Rating rating={4} total={0} line={false} />
                     <Rating rating={3} total={0} line={false} />
                     <Rating rating={2} total={0} line={false} />
                     <Rating rating={1} total={0} line={false} />
                  </div>
               </div>
            </div>
         </div>

         <hr className="m-5" />

         <div className={style.product}>
            <h3>You can also like this</h3>
            <p className="text-secondary">You’ve never seen it before!</p>
            <div className={style.item}>
               {[...new Array(15)].map(() => (
                  <>
                     <div
                        className={style.card}
                        onClick={() => router.push('/detail')}
                     >
                        <Image
                           src={picture6}
                           alt="cardImage"
                           width={100}
                           height={100}
                        />
                        <div className={style.desc}>
                           <h6>Men&apos;s formal suit - Black & White</h6>
                           <span>$ 40.0</span>
                           <p className="text-secondary">Zalora Cloth</p>
                           <div className={style.rating}>
                              {[...new Array(5)].map(() => (
                                 <>
                                    <BsFillStarFill color="#FFBA49" />
                                 </>
                              ))}{' '}
                              <p className="mb-0 mt-0 ms-1 text-secondary">
                                 (10)
                              </p>
                           </div>
                        </div>
                     </div>
                  </>
               ))}
            </div>
         </div>
      </div>
   );
}

Detail.layouts = 'MainLayout';

export default Detail;
