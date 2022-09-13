import React, { useState } from 'react';

import { FiMinus, FiPlus } from 'react-icons/fi';

function Counter(props) {
   const { min, max } = props;

   const [counter, setCounter] = useState(min);
   return (
      <div className="d-flex align-items-center">
         <span>{counter}</span>
         <div
            className={`minus ${counter === min ? 'counterDisable' : null}`}
            onClick={() => {
               if (counter > min) {
                  setCounter(counter - 1);
               }
            }}
         >
            <FiMinus size={15} />
         </div>

         <div
            className={`plus ${counter === max ? 'counterDisable' : null}`}
            onClick={() => {
               if (counter >= 0 && counter < max) {
                  setCounter(counter + 1);
               }
            }}
         >
            <FiPlus size={15} />
         </div>
      </div>
   );
}

export default Counter;
