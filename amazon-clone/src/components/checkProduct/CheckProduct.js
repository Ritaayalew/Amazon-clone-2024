import React from 'react'
import './checkproduct.css';
import { useStateValue } from '../stateProvider/StateProvider';

const CheckProduct = ({id,title,image,price,rating,hideButton}) => {
    const [{basket},dispatch]= useStateValue();

    const remove_from_basket=() =>{
        dispatch(
            {
                type:"REMOVE_FROM_BASKET",
                id:id
            }
        );
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' alt='product' src={image} />
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                    .fill()
                    .map((_,i) => ( 
                        <p>🌟</p>
                    ))
                }
            </div>
            {!hideButton && (
                    <button onClick={remove_from_basket}>Remove from Basket</button>
                )}
            
        </div>
    </div>
  )
}

export default CheckProduct