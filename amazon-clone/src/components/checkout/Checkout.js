import React from 'react'
import './checkout.css';
import adImage from '../../images/amazon-ad.jpg';
import Subtotal from '../subtotal/Subtotal';
import CheckProduct from '../checkProduct/CheckProduct';
import { useStateValue } from '../stateProvider/StateProvider';

const Checkout = () => {
  const [{basket}, dispatch]= useStateValue();
  console.log(basket);

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img
            className='checkout_ad'
            src={adImage}
            alt=''
            />
            <h3>Hello,</h3>
            <h2 className='checkout_title'>Your shopping Basket</h2>

            {basket.map((item)=>(
              <CheckProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

        </div>
        <div className='checkout_right'>
            <Subtotal/>
        </div>

    </div>
  )
}

export default Checkout