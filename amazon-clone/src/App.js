import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';

function App() {
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
