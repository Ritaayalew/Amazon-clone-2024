import React from 'react';
import './subtotal.css';
import { NumericFormat } from 'react-number-format';
import { useStateValue } from '../stateProvider/StateProvider';

const Subtotal = () => {
    const [{basket},dispatch]=useStateValue();
    const getBasketTotal=(basket)=>
        basket?.reduce((amount,item) => item.price + amount, 0);
    


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
        <button>Proceed to Checkout</button>
        {/* {basket.map((one)=> {
            return(
                <div>
                    <h1>{}</h1>
                </div>
            );
        }
        )} */}
    </div>
  );
}

export default Subtotal;
