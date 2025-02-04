import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import Payment from './Payment'

const PaymentWrapper = ({promise}) => {
  return (
    <div>
        <Elements stripe={promise}>
            <Payment/>
        </Elements>
    </div>
  )
}

export default PaymentWrapper