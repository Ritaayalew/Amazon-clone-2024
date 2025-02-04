import React, { useState, useEffect } from 'react';
import './orders.css'
import { db } from '../login/firebase';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useStateValue } from '../stateProvider/StateProvider';
import Order from '../order/Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
      const userDocRef = doc(collection(db, 'users'), user.uid);
      const ordersCollectionRef = collection(userDocRef, 'orders');
      const q = query(ordersCollectionRef, orderBy('created', 'desc'));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })));
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    } else {
      setOrders([]);
    }


    //     db
    //     .collection('users')
    //     .doc(user?.uid)
    //     .collection('orders')
    //     .orderBy('created', 'desc')
    //     .onSnapshot(snapshot => (
    //         setOrders(snapshot.docs.map(doc => ({
    //             id: doc.id,
    //             data: doc.data()
    //         })))
    //     ))
    // } else {
    //     setOrders([])
    // }

  }, [user])


    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders