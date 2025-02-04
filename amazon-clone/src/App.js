import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useStateValue } from './components/stateProvider/StateProvider';
import { useEffect } from 'react';
import { auth } from './components/login/firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentWrapper from './components/payment/PaymentWrapper';
import Orders from './components/orders/Orders';

const promise=loadStripe(
  'pk_test_51QnamsJuNjojY7aUpl3G7VhGzF8Mf7GM6uYUGVlZqTt7dE6q5XL38eYJ87M6Ppf4LmuXk48JNxhxE2UtWUhEfWQI00PAozmjlE'
);

function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }
      else{
        dispatch({
          type: 'SET_USER',
          user:null,
        })
      }
    })
  },[]);


  return (
    <Router>
      <Header/>
      <Routes>

          <Route path='/checkout' element={<Checkout/>}/>

          <Route path='/orders' element={<Orders/>}/>

          <Route path='/payment' element={<PaymentWrapper promise={promise}/>}/>
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/'  element={<Home/>}/>
       

      </Routes>
    </Router>
  );
}

export default App;
