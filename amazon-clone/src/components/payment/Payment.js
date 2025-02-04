import React, { useEffect, useState } from 'react'
import './payment.css';
import { useStateValue } from '../stateProvider/StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import CheckProduct from '../checkProduct/CheckProduct';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { NumericFormat } from 'react-number-format';
import axios from '../../axios';
import { db } from '../login/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';



const Payment = () => {
    const [{basket,user},dispatch]=useStateValue();
    const navigate= useNavigate();

    const getBasketTotal=(basket)=>
        basket?.reduce((amount,item) => item.price + amount, 0);

    const stripe=useStripe();
    const elements=useElements();

    const [error, setError]=useState(null);
    const [disabled, setDisabled]=useState(true);
    const [succeeded, setSucceeded]=useState(false);
    const [processing, setProcessing]=useState('');

    const [clientSecret, setClientSecret]=useState(true);

    useEffect(() => {
        // Generate the special Stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
          const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
          setClientSecret(response.data.clientSecret);
        };
        if (basket){
            getClientSecret();
        }
        }, [basket]);
    
    console.log('THE SECRET IS == ',clientSecret);


    const handleSubmit=async (event)=>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement)
            }
          })
          .then(({ paymentIntent }) => {
                //Save the payment details to the database
                const userDocRef = doc(collection(db, 'users'), user?.uid);
                const orderDocRef = doc(collection(userDocRef, 'orders'), paymentIntent.id);

                setDoc(orderDocRef, {
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });
            
    
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                dispatch({
                type: 'EMPTY_BASKET'
                });
                navigate('/orders');
          });
        };
    



    const handleChange=(event)=>{
        setDisabled(event.empty);
        setError(event.error? event.error.message : '');
    };



  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout"><span>{basket?.length} items</span></Link>)
            </h1>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__title'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Chicago, IL</p>
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map((item)=>(
                        <CheckProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} className='CardElement'/>
                        <div className='payment__priceContainer'>
                            <NumericFormat
                                renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing? <p>processing</p> : 'Buy Now'}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
};

export default Payment