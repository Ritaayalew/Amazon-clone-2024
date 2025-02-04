import React from 'react';
import './subtotal.css';
import { NumericFormat } from 'react-number-format';
import { useStateValue } from '../stateProvider/StateProvider';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const [{basket},dispatch]=useStateValue();
    const getBasketTotal=(basket)=>
        basket?.reduce((amount,item) => item.price + amount, 0);
    const navigate=useNavigate();
    


  return (
    <div className='subtotal'>
        <NumericFormat
            renderText={(value) => (
            <div>
                <p>
                    Subtotal({basket.length} items): <strong>{value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type='checkbox'/>This order contains a gift
                </small>
            </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button onClick={(e)=>navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
