import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useStateValue } from './components/stateProvider/StateProvider';
import { useEffect } from 'react';
import { auth } from './components/login/firebase';

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
          <Route path='/login' element={<Login/>}/>
          <Route path='/'  element={<Home/>}/>
       

      </Routes>
    </Router>
  );
}

export default App;
