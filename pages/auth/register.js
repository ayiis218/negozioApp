/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Input from '../../components/atoms/InputText';
import Button from '../../components/atoms/Button';
import logo from '../../public/icons/logo.png';

import style from '../../styles/register.module.css';

const FormRegister = () => {
   const [loading, setLoading] = useState();
   const [formShow, setFormShow] = useState(1);

   useEffect(() => {
      setCurrentShow();
   }, []);

   const setCurrentShow = (index) => {
      setFormShow(index);
   };

   return (
      <div className={style.section}>
         <div className="container">
            <div className="row">
               <div className="col-md-2 col-lg-12 d-flex justify-content-center">
                  <div className={style.right}>
                     <Image src={logo} alt="" width={150} height={60} />
                     <h6 className="mt-3 mb-5">
                        Please sign up with your account
                     </h6>

                     {formShow === 0 ? (
                        <>
                           <div className="row mt-5 mb-3">
                              <div className="col-6 col-lg-6 d-flex justify-content-end">
                                 <button
                                    onClick={() => setCurrentShow(0)}
                                    className="btn w-100 bg-primary text-white"
                                 >
                                    Customer
                                 </button>
                              </div>
                              <div className="col-6 col-lg-6 d-flex justify-content-start">
                                 <button
                                    onClick={() => setCurrentShow(1)}
                                    className="btn w-100 rounded text-gray"
                                 >
                                    Seller
                                 </button>
                              </div>
                           </div>
                           <form>
                              <div className="input-group mb-3">
                                 <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                 >
                                    <Input
                                       type="text"
                                       className="form-control"
                                       placeholder="Name"
                                       style={{ color: 'var(--color-3)' }}
                                       // onChange={(e) => {
                                       //    setName(e.target.value);
                                       // }}
                                    />
                                 </span>
                              </div>
                              <div className="input-group mb-3">
                                 <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                 >
                                    <Input
                                       type="text"
                                       className="form-control"
                                       placeholder="Email"
                                       style={{ color: 'var(--color-3)' }}
                                       // onChange={(e) => {
                                       //    setEmail(e.target.value);
                                       // }}
                                    />
                                 </span>
                              </div>
                              <div className="input-group mb-3">
                                 <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                 >
                                    <Input
                                       type="password"
                                       className="form-control"
                                       placeholder="Password"
                                       style={{ color: 'var(--color-3)' }}
                                       // onChange={(e) => {
                                       //    setRePass(e.target.value);
                                       // }}
                                    />
                                 </span>
                              </div>
                              <div className="row">
                                 <div className="col d-flex justify-content-center">
                                    <Button
                                       className={`btn w-100 mt-3 ${style.button}`}
                                       type="submit"
                                       disabled={loading}
                                    >
                                       {loading ? 'Loading...' : 'CREATE'}
                                    </Button>
                                 </div>
                              </div>
                           </form>
                        </>
                     ) : (
                        <>
                           <div className="row mt-3 mb-3">
                              <div className="col-6 col-lg-6 d-flex justify-content-end">
                                 <button
                                    onClick={() => setCurrentShow(0)}
                                    className="btn w-100 rounded text-gray"
                                 >
                                    Customer
                                 </button>
                              </div>
                              <div className="col-6 col-lg-6 d-flex justify-content-start">
                                 <button
                                    onClick={() => setCurrentShow(1)}
                                    className="btn w-100 bg-primary text-white"
                                 >
                                    Seller
                                 </button>
                              </div>
                           </div>
                           <form>
                              <div className="input-group mb-3">
                                 <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                 >
                                    <Input
                                       type="text"
                                       className="form-control"
                                       placeholder="Name"
                                       style={{ color: 'var(--color-3)' }}
                                       // onChange={(e) => {
                                       //    setName(e.target.value);
                                       // }}
                                    />
                                 </span>
                              </div>
                              <div className="input-group mb-3">
                                 <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                 >
                                    <Input
                                       type="text"
                                       className="form-control"
                                       placeholder="E-Mail"
                                       style={{ color: 'var(--color-3)' }}
                                       // onChange={(e) => {
                                       //    setEmail(e.target.value);
                                       // }}
                                    />
                                 </span>
                              </div>
                              <div className="input-group mb-3">
                                 <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                 >
                                    <Input
                                       type="text"
                                       className="form-control"
                                       placeholder="Phone Number"
                                       style={{ color: 'var(--color-3)' }}
                                       // onChange={(e) => {
                                       //    setPhone(e.target.value);
                                       // }}
                                    />
                                 </span>
                              </div>
                              <div className="input-group mb-3">
                                 <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                 >
                                    <Input
                                       type="password"
                                       className="form-control"
                                       placeholder="Store name"
                                       style={{ color: 'var(--color-3)' }}
                                       // onChange={(e) => {
                                       //    setPassword(e.target.value);
                                       // }}
                                    />
                                 </span>
                              </div>
                              <div className="input-group mb-3">
                                 <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                 >
                                    <Input
                                       type="password"
                                       className="form-control"
                                       placeholder="New Password"
                                       style={{ color: 'var(--color-3)' }}
                                       // onChange={(e) => {
                                       //    setRePass(e.target.value);
                                       // }}
                                    />
                                 </span>
                              </div>

                              <div className="row">
                                 <div className="col d-flex justify-content-center">
                                    <Button
                                       className={`btn w-100 mt-3 ${style.button}`}
                                       type="submit"
                                       disabled={loading}
                                    >
                                       {loading ? 'Loading...' : 'CREATE'}
                                    </Button>
                                 </div>
                              </div>
                           </form>
                        </>
                     )}

                     <div className="w-100 d-flex flex-column">
                        <div className="w-100 d-flex justify-content-center align-items-center">
                           <div className={style.option}>
                              Already have a account?
                              <Link href="/auth/login">Log in</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FormRegister;
