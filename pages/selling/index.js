import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Input from '../../components/atoms/InputText/auth';
import Button from '../../components/atoms/Button';
import styles from '../../styles/selling.module.css';
import Photo from '../../public/icons/photo.svg';
import Default from '../../public/img/user.svg';
import iconAccount from '../../public/icons/iconAccount.png';
import iconAddress from '../../public/icons/iconAddress.png';
import iconOrder from '../../public/icons/iconOrder.png';

function Profile() {
   const [loading, setLoading] = useState(false);
   return (
      <div className={styles.section}>
         <div className="row">
            <div className="col-12 col-lg-4">
               <div className={styles.left}>
                  <div className="d-flex flex-column justify-content-center">
                     <div className={`mt-5 ${styles.image}`}>
                        <Image src={Default} alt="" />
                     </div>
                  </div>
                  <div className="d-flex flex-column justify-content-start">
                     <div className={styles.image}>
                        <Image src={iconAccount} alt="akun" />
                        <span className={`ms-2 ${styles.textLink}`}>Store</span>
                     </div>

                     <div className="collapse" id="collapseStore">
                        <Link href="/profile-seller">
                           <span
                              className={`${styles.textCollapse} ${styles.textLink} `}
                           >
                              Store Profile
                           </span>
                        </Link>
                     </div>

                     <div className={styles.image}>
                        <Image src={iconAddress} alt="address" />
                        <span
                           className={`ms-2 ${styles.textLink} ${styles.actived}`}
                        >
                           Product
                        </span>
                     </div>

                     <div className="collapse" id="collapseProduct">
                        <div className="d-flex flex-column">
                           <Link
                              href="/profile-seller/my-product"
                              className="mb-3"
                           >
                              <span
                                 className={`${styles.textCollapse} ${styles.textLink}`}
                              >
                                 My product
                              </span>
                           </Link>
                           <Link href="/profile-seller/selling-product">
                              <span
                                 className={`${styles.textCollapse} ${styles.textLink} ${styles.actived}`}
                              >
                                 Selling product
                              </span>
                           </Link>
                        </div>
                     </div>

                     <div className={styles.image}>
                        <Image src={iconOrder} alt="address" />
                        <span className={`ms-2  ${styles.textLink}`}>
                           Order
                        </span>
                     </div>

                     <div className="collapse" id="collapseOrder">
                        <div className="d-flex flex-column">
                           <Link
                              href="/profile-seller/my-order"
                              className="mb-3"
                           >
                              <span
                                 className={`${styles.textCollapse} ${styles.textLink}`}
                              >
                                 My order
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-12 col-lg-8 mb-5">
               <div className={styles.right}>
                  <div className="d-flex flex-column justify-content-center">
                     <div className={styles.main}>
                        <div className={styles.header}>
                           <h4>Inventory</h4>
                        </div>
                        <hr />
                        <div className="row">
                           <div className="col-7 col-lg-7">
                              <div className="d-flex ms-4 mt-0 align-items-start">
                                 <form>
                                    <label>Name of goods</label>
                                    <div className="input-group mb-3 mt-1">
                                       <Input
                                          type="text"
                                          className="form-control"
                                          placeholder="Johanes Mikael"
                                          style={{ color: 'var(--color-3)' }}
                                          // onChange={(e) => {
                                          //    setRePass(e.target.value);
                                          // }}
                                       />
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={styles.second}>
                        <div className={styles.header}>
                           <h4>Item details</h4>
                        </div>
                        <hr />
                        <div className="row">
                           <div className="col-7 col-lg-7">
                              <div className="d-flex ms-4 mt-0 align-items-start">
                                 <form>
                                    <label>Unit Price</label>
                                    <div className="input-group mb-2 mt-1">
                                       <Input
                                          type="text"
                                          className="form-control"
                                          placeholder="Johanes Mikael"
                                          style={{ color: 'var(--color-3)' }}
                                          // onChange={(e) => {
                                          //    setRePass(e.target.value);
                                          // }}
                                       />
                                    </div>
                                    <label>Stock</label>
                                    <div className="input-group mb-2 mt-1">
                                       <Input
                                          type="text"
                                          className="form-control"
                                          placeholder="Johanes Mikael"
                                          style={{ color: 'var(--color-3)' }}
                                          // onChange={(e) => {
                                          //    setRePass(e.target.value);
                                          // }}
                                       />
                                    </div>
                                    <label>Stock</label>
                                    <div className="input-group mb-3 mt-1">
                                       <div className={styles.radio}>
                                          <div>
                                             <input
                                                type="radio"
                                                name="radio"
                                                value="laki-laki"
                                                id="radio1"
                                             />
                                             <label htmlFor="radio1">
                                                {' '}
                                                Baru
                                             </label>
                                          </div>
                                          <div>
                                             <input
                                                type="radio"
                                                name="radio"
                                                value="perempuan"
                                                id="radio2"
                                             />
                                             <label htmlFor="radio2">
                                                {' '}
                                                Bekas
                                             </label>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={styles.photo}>
                        <div className={styles.header}>
                           <h4>Photo of goods</h4>
                        </div>
                        <hr />
                        <div className={styles.grid}>
                           <div className="row">
                              <div className="col-12 col-lg-12">
                                 <div className="d-flex mt-4 align-items-start">
                                    <div className="ms-4 mt-4">
                                       <Image
                                          src={Photo}
                                          width={140}
                                          height={140}
                                          alt="gambar"
                                       />
                                    </div>

                                    <div className="ms-3 mt-5">
                                       <Image
                                          src={Photo}
                                          width={105}
                                          height={100}
                                          alt="gambar"
                                       />
                                    </div>
                                    <div className="ms-3 mt-5">
                                       <Image
                                          src={Photo}
                                          width={105}
                                          height={100}
                                          alt="gambar"
                                       />
                                    </div>
                                    <div className="ms-3 mt-5">
                                       <Image
                                          src={Photo}
                                          width={105}
                                          height={100}
                                          alt="gambar"
                                       />
                                    </div>
                                    <div className="ms-3 mt-5">
                                       <Image
                                          src={Photo}
                                          width={105}
                                          height={100}
                                          alt="gambar"
                                       />
                                    </div>
                                 </div>
                                 <hr />
                              </div>
                              <div className="col-12 col-lg-12 d-flex justify-content-center">
                                 <Button
                                    className={`btn mt-0 ${styles.select}`}
                                    type="submit"
                                    onClick={setLoading}
                                    disabled={loading}
                                 >
                                    {loading ? 'Loading...' : 'Upload'}
                                 </Button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={styles.footer}>
                        <div className={styles.header}>
                           <h4>Description</h4>
                        </div>
                        <hr />
                        <div className="row">
                           <div className="col-7 col-lg-7">
                              <div className="d-flex ms-4 mt-2 align-items-start">
                                 <div className={styles.input}>
                                    <textarea
                                       className="input text-area"
                                       rows={5}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col d-flex justify-content-end">
                           <Button
                              className={`btn ${styles.button}`}
                              type="submit"
                              onClick={setLoading}
                              disabled={loading}
                           >
                              {loading ? 'Loading...' : 'Jual'}
                           </Button>
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

export default Profile;