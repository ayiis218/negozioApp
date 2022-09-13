import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import style from './style/atom.module.css';

function Rating(props) {
   const { rating, total, line } = props;
   return (
      <div className={style.rating}>
         <div className="d-flex align-items-center">
            <BsFillStarFill color="#FFBA49" />
            <span className="text-secondary">{rating}</span>
         </div>
         {line ? <hr className={style.line} /> : null}
         <span className="text-secondary">{total}</span>
      </div>
   );
}

export default Rating;
