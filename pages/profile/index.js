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
                  <div className="d-flex flex-column justify-content-center align-items-center h-75">
                     {/* <Image src={send} alt="No Chat" /> */}
                     <h5 className="fw-bold">Belum ada chat</h5>
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
                        <div className="d-flex ms-4 align-items-start">
                           <form>
                              <div className="input-group mb-3">
                                 <Input
                                    label="Name"
                                    type="text"
                                    className="form-control"
                                    placeholder="name"
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
                                    placeholder="email"
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
                                    placeholder="phone"
                                    style={{ color: 'var(--color-3)' }}
                                    // onChange={(e) => {
                                    //    setRePass(e.target.value);
                                    // }}
                                 />
                              </div>
                              <div className="row">
                                 <div className="col-12 col-lg-12 d-flex align-items-start">
                                    <p>Gender</p>
                                 </div>
                                 <div className="col-12 col-lg-12">
                                    <div className="row">
                                       <div className="col-3 col-lg-3">
                                          <label htmlFor="inline-radio">
                                             Laki-laki
                                          </label>
                                       </div>
                                       <div className="col-9 col-lg-9 ">
                                          <div className="d-flex justify-content-start">
                                             <input
                                                // onChange={params.onChange}
                                                id="inline-radio"
                                                type="radio"
                                                value="Male"
                                                name="inline-radio-group"
                                                // defaultChecked={
                                                //    params.value === 'Male'
                                                // }
                                             />
                                          </div>
                                       </div>
                                       <div className="col-3 col-lg-3">
                                          <label htmlFor="inline-radio">
                                             perempuan
                                          </label>
                                       </div>
                                       <div className="col-9 col-lg-9 ">
                                          <div className="d-flex justify-content-start">
                                             <input
                                                // onChange={params.onChange}
                                                id="inline-radio"
                                                type="radio"
                                                value="Male"
                                                name="inline-radio-group"
                                                // defaultChecked={
                                                //    params.value === 'Male'
                                                // }
                                             />
                                          </div>
                                       </div>
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
                                       className={`btn w-50 mt-3 ${styles.button}`}
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
                        <div className="">
                           <Image src={Default} alt="" />
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
