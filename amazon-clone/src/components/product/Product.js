import React from 'react'
import './product.css';
import { useStateValue } from '../stateProvider/StateProvider';

const Product = ({id,title,price,rating,img}) => {

    const [{basket},dispatch]=useStateValue();

    const add_to_basket=() =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:img,
                price: price,
                rating: rating,
            },
       
        });
    }


  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating' >
                {Array(rating)
                    .fill()
                    .map(()=>
                        <p className='star'>🌟</p>
                    
                    )}
                
            </div>
        </div>
        <div>
            <img
            src={img}
            />
            <button onClick={add_to_basket}>Add to Basket</button>
        </div>
    </div>
  ) 
}

export default Product;