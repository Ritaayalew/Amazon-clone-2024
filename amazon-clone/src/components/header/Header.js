import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider/StateProvider';
import { auth } from '../login/firebase';

const Header = () => {

    const [{basket, user },dispatch]= useStateValue();

    const handleAuthentication=()=>{
        if (user){
            auth.signOut();
        }
    }


  return (
    <div className='header'>
        <Link to="/" className='header_clearlink'>
            <img
            className='header_logo'
            alt='logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
        </Link>

        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
            <SearchIcon className='header_searchIcon'/>
        </div>

        <div className='header_nav'>
            <Link to={!user && "/login"} className='header_clearlink'>
            <div onClick={handleAuthentication} className='header_option'>
                <span className='header_optionLineOne'>Hello {!user? 'Guest' : user.email}</span>
                <span className='header_optionLineTwo'>{user? 'Sign Out' : 'Sign in'}</span>
            </div>
            </Link>

            <Link to={user && "/orders"} className='header_clearlink'>
            <div  className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            </Link>

            <div  className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            <Link to="/checkout" className='header_clearlink'>
                <div  className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                </div>
            </Link>


        </div>
    </div>
  )
}

export default Header;