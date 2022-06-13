import { useParams } from 'react-router-dom';
import cardData from '../../data';
import Header from '../Header/Header';
import './summary.css';

function Summary() {
  const { productId } = useParams();
  console.log(productId);
  const product = cardData.find((cardData) => cardData.id === productId);
  console.log(product);
  const { productImage, name, descrption, price } = product;
  return (
    <>
      <Header />
      <section className='summary-section'>
        <div className='summary-image-div'>
          <img src={productImage} alt={name} className='summary-image' />
        </div>
        <div className='summary-right-content-div'>
          <h5 className='summary-h5'>{name}</h5>
          <p className='summary-p1'>{descrption}</p>
          <hr className='summary-hr' />
          <p className='summary-p2'>{price}</p>
          <div className='summary-btn'>
            <button type='submit' className='summary-btn-1'>
              Add to Cart
            </button>
            <button type='submit' className='summary-btn-2'>
              Wishlist
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Summary;
