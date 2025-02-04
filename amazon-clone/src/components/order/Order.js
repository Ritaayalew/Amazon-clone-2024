import React from 'react'
// import moment from 'moment';
import './order.css';
import { format } from 'date-fns'; // Import date-fns for date formatting
// import { Link } from 'react-router-dom';
import CheckProduct from '../checkProduct/CheckProduct';
import { NumericFormat } from 'react-number-format';


function Order({ order }) {
  const formattedDate = format(new Date(order.data.created * 1000), "MMMM do yyyy, h:mma");

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__date">{formattedDate}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      <div className='products'>
        {order.data.basket?.map(item => (
            <CheckProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
            />
        ))}
      </div>
      <NumericFormat
        renderText={(value) => (
        <h3 className="order__total" >Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
    />
      {/* <Link to="/checkout">
        <button className="order__checkoutButton">Go to Checkout</button>
      </Link> */}
    </div>
  );
}

export default Order;
