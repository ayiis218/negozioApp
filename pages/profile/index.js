import React, { useState } from 'react';
import Image from 'next/image';
import Input from '../../components/atoms/InputText';
import Button from '../../components/atoms/Button';
import styles from '../../styles/profile.module.css';

import Default from '../../public/img/user.svg';

function Profile() {
   const [loading, setLoading] = useState(false);
   return (
      <div className={styles.section}>
         <div className="row">
            <div className="col-4 col-lg-4">
               <div className={styles.left}>
                  <div className="d-flex flex-column justify-content-center">
                     <div className={styles.image}>
                        <Image src={Default} alt="" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-8 col-lg-8 mb-5">
               <div className={styles.right}>
                  <div className={styles.header}>
                     <h4>My Profile</h4>
                     <h6 className="text-secondary">
                        Manage your profile Information
                     </h6>
                  </div>
                  <hr />
                  <div className="row">
                     <div className="col-7 col-lg-7">
                        <div className="d-flex ms-4 mt-4 align-items-start">
                           <form>
                              <div className="input-group mb-3">
                                 <Input
                                    label="Name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Johanes Mikael"
                                    style={{ color: 'var(--color-3)' }}
                                    // onChange={(e) => {
                                    //    setRePass(e.target.value);
                                    // }}
                                 />
                              </div>
                              <div className="input-group mb-3">
                                 <Input
                                    label="Email"
                                    type="text"
                                    className="form-control"
                                    placeholder="johanes@gmail.com"
                                    style={{ color: 'var(--color-3)' }}
                                    // onChange={(e) => {
                                    //    setRePass(e.target.value);
                                    // }}
                                 />
                              </div>
                              <div className="input-group mb-3">
                                 <Input
                                    label="Phone"
                                    type="text"
                                    className="form-control"
                                    placeholder="08901289012"
                                    style={{ color: 'var(--color-3)' }}
                                    // onChange={(e) => {
                                    //    setRePass(e.target.value);
                                    // }}
                                 />
                              </div>
                              <div className="input-group mb-3">
                                 <label>Gender</label>
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
                                          Laki-Laki
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
                                          Perempuan
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div className="input-group mb-3">
                                 <Input
                                    label="Date"
                                    type="date"
                                    className="form-control mt-2"
                                    placeholder="phone"
                                    style={{ color: 'var(--color-3)' }}
                                    // onChange={(e) => {
                                    //    setRePass(e.target.value);
                                    // }}
                                 />
                              </div>
                              <div className="row">
                                 <div className="col d-flex justify-content-center">
                                    <Button
                                       className={`btn mt-3 ${styles.button}`}
                                       type="submit"
                                       onClick={setLoading}
                                       disabled={loading}
                                    >
                                       {loading ? 'Loading...' : 'Save'}
                                    </Button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="col-5 col-lg-5 d-flex flex-column justify-content-start align-items-center">
                        <div className={styles.img}>
                           <Image src={Default} alt="" />
                           <div className="row">
                              <div className="col d-flex justify-content-center">
                                 <Button
                                    className={`btn mt-3 ${styles.select}`}
                                    type="submit"
                                    onClick={setLoading}
                                    disabled={loading}
                                 >
                                    {loading ? 'Loading...' : 'Select Image'}
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

export default Profile;
