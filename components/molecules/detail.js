import React from 'react';

import { FiChevronDown } from 'react-icons/fi';

import style from '../style/navbar.module.css';

function Navbar() {
   return (
      <div
         className="modal fade"
         id="exampleModal"
         tabIndex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
      >
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <button
                     type="button"
                     className={style.btnModalClose}
                     data-bs-dismiss="modal"
                     aria-label="Close"
                  />
                  <h5 className="modal-title" id="exampleModalLabel">
                     Filter
                  </h5>
               </div>
               <form>
                  <div className="modal-body">
                     <h6>Colors</h6>
                     <div
                        className={`d-flex flex-wrap ${style.checkContainer} mt-4`}
                     >
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="red"
                              autoComplete="off"
                           />
                           <label
                              className="btn-color btn-color-primary"
                              htmlFor="red"
                              style={{ backgroundColor: '#020202' }}
                           />
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="red"
                              autoComplete="off"
                           />
                           <label
                              className="btn-color"
                              htmlFor="red"
                              style={{
                                 backgroundColor: '#FFFFFF',
                                 boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                              }}
                           />
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="red"
                              autoComplete="off"
                           />
                           <label
                              className="btn-color"
                              htmlFor="red"
                              style={{ backgroundColor: '#B82222' }}
                           />
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="red"
                              autoComplete="off"
                           />
                           <label
                              className="btn-color"
                              htmlFor="red"
                              style={{ backgroundColor: '#BEA9A9' }}
                           />
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="red"
                              autoComplete="off"
                           />
                           <label
                              className="btn-color"
                              htmlFor="red"
                              style={{ backgroundColor: '#E2BB8D' }}
                           />
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="red"
                              autoComplete="off"
                           />
                           <label
                              className="btn-color"
                              htmlFor="red"
                              style={{ backgroundColor: '#151867' }}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="modal-body">
                     <h6>Sizes</h6>
                     <div
                        className={`d-flex flex-wrap ${style.checkContainer} mt-4`}
                     >
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="xs"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="xs"
                           >
                              XS
                           </label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="s"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="s"
                           >
                              S
                           </label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="m"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="m"
                           >
                              M
                           </label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="l"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="l"
                           >
                              L
                           </label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="xl"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="xl"
                           >
                              XL
                           </label>
                        </div>
                     </div>
                  </div>
                  <div className="modal-body">
                     <h6>Category</h6>
                     <div
                        className={`d-flex flex-wrap ${style.checkContainer} mt-4`}
                     >
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="all"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="all"
                           >
                              ALL
                           </label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="women"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="women"
                           >
                              Women
                           </label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="men"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="men"
                           >
                              Men
                           </label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="boys"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="boys"
                           >
                              Boys
                           </label>
                        </div>
                        <div>
                           <input
                              type="checkbox"
                              className="btn-check"
                              id="girls"
                              autoComplete="off"
                           />
                           <label
                              className="btn btn-outline-primary"
                              htmlFor="girls"
                           >
                              Girls
                           </label>
                        </div>
                     </div>
                  </div>
                  <div className="modal-body">
                     <div
                        className="row"
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                     >
                        <div className="col-10">
                           <h6>Brand</h6>
                           <p>adidas Originals, Jack & Jones, s.Oliver</p>
                        </div>
                        <div className="col-2 d-flex align-items-center">
                           <FiChevronDown size={25} />
                        </div>
                     </div>
                     <div className="collapse" id="collapseExample">
                        <div className="">
                           <div className="row">
                              <div className="col-4">
                                 <div className="form-check">
                                    <input
                                       className="form-check-input"
                                       type="checkbox"
                                       value=""
                                       id="flexCheckDefault"
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="flexCheckDefault"
                                    >
                                       Adidas Originals
                                    </label>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="form-check">
                                    <input
                                       className="form-check-input"
                                       type="checkbox"
                                       value=""
                                       id="flexCheckDefault"
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="flexCheckDefault"
                                    >
                                       Jack & Jones
                                    </label>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="form-check">
                                    <input
                                       className="form-check-input"
                                       type="checkbox"
                                       value=""
                                       id="flexCheckDefault"
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="flexCheckDefault"
                                    >
                                       s.Oliver
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
               <div className="modal-footer">
                  <button
                     type="button"
                     className="btn btn-outline-primary btn-modal"
                     data-bs-dismiss="modal"
                  >
                     Close
                  </button>
                  <button type="button" className="btn btn-primary btn-modal">
                     Save changes
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
