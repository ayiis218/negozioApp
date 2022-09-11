import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/atoms/Button';
import styles from '../../styles/checkout.module.css';

import Default from '../../public/img/bag.png';

function CheckOut() {
   const [loading, setLoading] = useState(false);
   return (
      <div className={styles.section}>
         <div className="row ">
            <div className="col-12 col-lg-12 mt-2 d-flex flex-column align-items-center">
               <div className={styles.content}>
                  <div className={styles.header}>
                     <h4>Checkout</h4>
                     <h6 className="text-secondary">Shipping Adress</h6>
                  </div>
                  <div className="row">
                     <div className="col-12 col-lg-7">
                        <div className={styles.list}>
                           <div className={styles.left}>
                              <div className="row m-0">
                                 <div className="col-12 col-lg-12 d-flex justify-content-start">
                                    <h6>Andreas Jane</h6>
                                 </div>
                                 <div className="col-12 col-lg-12">
                                    <label className="mt-2">
                                       Perumahan Sapphire Mediterania, Wiradadi,
                                       Kec. Sokaraja, Kabupaten Banyumas, Jawa
                                       Tengah, 53181 [Tokopedia Note: blok c 16]
                                       Sokaraja, Kab. Banyumas, 53181
                                    </label>
                                 </div>
                                 <div className="col-12 col-lg-12 d-flex justify-content-start">
                                    <Button
                                       className={`btn mt-3 mb-3 ${styles.select}`}
                                       type="submit"
                                       onClick={setLoading}
                                       disabled={loading}
                                    >
                                       {loading
                                          ? 'Loading...'
                                          : 'Choose another address'}
                                    </Button>
                                 </div>
                              </div>
                           </div>
                           <div className={styles.bag}>
                              <div className="row m-0">
                                 <div className="col-8 col-lg-8 d-flex justify-content-start align-content-middle">
                                    <div className={styles.image}>
                                       <Image
                                          src={Default}
                                          alt=""
                                          height={60}
                                          width={60}
                                       />
                                    </div>

                                    <h6 className="mt-3 ms-2">
                                       Men&apos;s formal suit - Black Zalora
                                       Cloth
                                    </h6>
                                    {/* <label className="mt-4">Zalora Cloth</label> */}
                                 </div>
                                 <div className="col-4 col-lg-4 d-flex justify-content-end">
                                    <h6 className="me-2 mt-4">$ 2,00</h6>
                                 </div>
                              </div>
                           </div>
                           <div className={styles.bag}>
                              <div className="row m-0">
                                 <div className="col-7 col-lg-7 d-flex justify-content-start align-content-middle">
                                    <div className={styles.image}>
                                       <Image
                                          src={Default}
                                          alt=""
                                          height={60}
                                          width={60}
                                       />
                                    </div>

                                    <h6 className="mt-3 ms-2">
                                       Men&apos;s formal suit - Black Zalora
                                       Cloth
                                    </h6>
                                    {/* <label className="mt-4">Zalora Cloth</label> */}
                                 </div>
                                 <div className="col-5 col-lg-5 d-flex justify-content-end">
                                    <h6 className="me-2 mt-4">$ 20,0</h6>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-lg-5 d-flex flex-column justify-content-start align-items-center">
                        <div className={styles.right}>
                           <div className="row">
                              <div className="col-12 col-lg-12">
                                 <h6>Shopping summary</h6>
                              </div>
                           </div>
                           <div className="row mt-3">
                              <div className="col-6 col-lg-6">
                                 <label>Order</label>
                              </div>
                              <div className="col-6 col-lg-6 d-flex justify-content-end">
                                 <h6 className="me-3">$ 40,0</h6>
                              </div>
                              <div className="col-6 col-lg-6">
                                 <label>Delivery</label>
                              </div>
                              <div className="col-6 col-lg-6 d-flex justify-content-end">
                                 <h6 className="me-3">$ 5,0</h6>
                              </div>
                           </div>
                           <hr />
                           <div className="row">
                              <div className="col-6 col-lg-6">
                                 <h6>Shopping summary</h6>
                              </div>
                              <div className="col-6 col-lg-6 d-flex justify-content-end">
                                 <h6 className="me-3">$ 45,0</h6>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col d-flex justify-content-center">
                                 <Button
                                    className={`btn mt-3 mb-3 ${styles.select}`}
                                    type="submit"
                                    onClick={setLoading}
                                    disabled={loading}
                                 >
                                    {loading ? 'Loading...' : 'Buy'}
                                 </Button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

// FormChat.layout = 'mainLayout';

export default CheckOut;