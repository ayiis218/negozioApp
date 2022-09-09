import Image from 'next/image';
import React from 'react';

import Trends from '../../public/img/image.jpg';
import Edition from '../../public/img/image2.jpg';
import Casual from '../../public/img/image3.jpg';
import Rock from '../../public/img/image4.jpg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = ({ deviceType }) => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
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
   const images = [Trends, Edition, Casual, Rock];

   return (
      <div className="font-sans">
         <Carousel
            partialVisbile
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            showDots
         >
            {images.map((item, index) => (
               <div key={index} className="ms-3">
                  <Image
                     src={item}
                     alt=""
                     className="object-cover rounded-lg shadow-xl"
                     width={456}
                     height={180}
                  />
               </div>
            ))}
         </Carousel>
      </div>
   );
};

export default Slider;
