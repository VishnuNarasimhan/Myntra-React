import { v4 as uuidv4 } from 'uuid';

import sliderImage1 from './utils/img1.jpg';
import sliderImage2 from './utils/img2.jpg';
import sliderImage3 from './utils/img3.jpg';
import sliderImage4 from './utils/img4.jpg';
import sliderImage5 from './utils/img5.jpg';
import sliderImage6 from './utils/img6.jpg';

import cardImage1 from './utils/Jeans.jpg';
import cardImage2 from './utils/Watches.jpg';
import cardImage3 from './utils/Shoes.jpg';
import cardImage4 from './utils/Skincare.jpg';
import cardImage5 from './utils/Fragrances.jpg';
import cardImage6 from './utils/Flipflops.jpg';

import productImage1 from './utils/TrackPant.jpg';
import productImage2 from './utils/Noise-Watch.jpg';
import productImage3 from './utils/LouisPhilippe.jpg';
import productImage4 from './utils/Minimalist.jpg';
import productImage5 from './utils/Nautica.jpg';
import productImage6 from './utils/Crocs.jpg';

const data = [
  {
    id: uuidv4(),
    name: 'HRX Track Pant',
    sliderImage: sliderImage1,
    cardImage: cardImage1,
    productImage: productImage1,
    descrption: 'Men Black Solid Slim-Fit Track Pants',
    price: 'Rs 879',
  },
  {
    id: uuidv4(),
    name: 'Noise Watch',
    sliderImage: sliderImage2,
    cardImage: cardImage2,
    productImage: productImage2,
    descrption: 'Noise ColorFit Qube Oxy Smartwatch - Black',
    price: 'Rs 2999',
  },
  {
    id: uuidv4(),
    name: 'Louis Philippe',
    sliderImage: sliderImage3,
    cardImage: cardImage3,
    productImage: productImage3,
    descrption: 'Men Tan Brown Solid Synthetic Leather Formal Loafers',
    price: 'Rs 1234',
  },
  {
    id: uuidv4(),
    name: 'Minimalist',
    sliderImage: sliderImage4,
    cardImage: cardImage4,
    productImage: productImage4,
    descrption: 'Vitamin C 10% Face Serum for Glowing Skin 30 ml',
    price: 'Rs 579',
  },
  {
    id: uuidv4(),
    name: 'Nautica',
    sliderImage: sliderImage5,
    cardImage: cardImage5,
    productImage: productImage5,
    descrption: 'Men Voyage Eau De Toilette 100 ml',
    price: 'Rs 1279',
  },
  {
    id: uuidv4(),
    name: 'Crocs',
    sliderImage: sliderImage6,
    cardImage: cardImage6,
    productImage: productImage6,
    descrption: 'Unisex Navy Blue Solid Bayaband Clogs',
    price: 'Rs 3999',
  },
];

export default data;
