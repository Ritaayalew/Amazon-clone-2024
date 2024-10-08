import React from 'react'
import './product.css';

const Product = ({title,price,rating,img}) => {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating)
                    .fill()
                    .map(()=>(
                        <i class="fas fa-star"></i>
                    )
                    )}
                
            </div>
        </div>
        <div>
            <img
            src={img}
            />
            <button>Add to Basket</button>
        </div>
    </div>
  ) 
}

export default Product;