/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

const InputText = forwardRef(
   (
      {
         label,
         id,
         name,
         type,
         value,
         isDisabled,
         placeholder,
         outerClassName,
         inputTextClassName,
         prepend,
         append,
         inputClassName,
         onKeyUp,
         onKeyPress,
         onChange,
         max,
         multiple,
      },
      ref
   ) => (
      <>
         <div className="row">
            <div className="col-3 col-lg-3 mt-2">
               <label>{label}</label>
            </div>
            <div className="col-9 col-lg-9">
               <div className={['input-text', outerClassName].join(' ')}>
                  <div className="input-group">
                     {prepend && (
                        <div className="input-group-prepend">
                           <span className="input-group-text">{prepend}</span>
                        </div>
                     )}
                     <input
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        disabled={isDisabled}
                        className={['form-control', inputClassName].join(' ')}
                        placeholder={placeholder}
                        onChange={onChange}
                        onKeyUp={onKeyUp}
                        onKeyPress={onKeyPress}
                        ref={ref}
                        max={max}
                        multiple={multiple}
                        required
                     />
                     {append && (
                        <div className="input-group-append">
                           <span
                              className={[
                                 'input-group-text',
                                 inputTextClassName,
                              ].join(' ')}
                           >
                              {append}
                           </span>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
);

export default InputText;

InputText.defaultProps = {
   type: 'text',
};

InputText.propTypes = {
   id: propTypes.string,
   name: propTypes.string,
   type: propTypes.string,
   value: propTypes.string,
   isDisabled: propTypes.bool,
   placeholder: propTypes.string,
   onChange: propTypes.func,
   onKeyUp: propTypes.func,
   onKeyPress: propTypes.func,
   inputClassName: propTypes.string,
};
