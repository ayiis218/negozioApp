import Image from 'next/image';
import React from 'react';

import Tshir from '../../public/img/tshir.svg';
import Shorts from '../../public/img/shorts.svg';
import Shoes from '../../public/img/shoes.svg';
import Jacket from '../../public/img/jacket.svg';
import Pants from '../../public/img/pants.png';

import style from './style/category.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Category = ({ deviceType }) => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 4,
         paritialVisibilityGutter: 50,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         paritialVisibilityGutter: 40,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 2,
         paritialVisibilityGutter: 40,
      },
   };

   const images = [Tshir, Shorts, Shoes, Jacket, Pants];

   return (
      <div className={style.category}>
         <div className="col-12 col-lg-12">
            <div className="font-sans leading-normal tracking-normal text-gray-100">
               <div className="col-3 col-lg-3">
                  <h3 className="mt-5 ms-3">Category</h3>
                  <p className="text-secondary ms-3">
                     What are you currently looking for?
                  </p>
               </div>
               <div className="col-12 col-lg-12">
                  <Carousel
                     partialVisible
                     deviceType={deviceType}
                     itemClass="image-item"
                     responsive={responsive}
                     removeArrowOnDeviceType={['tablet', 'mobile']}
                     showDots
                  >
                     {images.map((item, index) => (
                        <div key={index}>
                           <Image src={item} alt="" width={250} height={240} />
                        </div>
                     ))}
                  </Carousel>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Category;
