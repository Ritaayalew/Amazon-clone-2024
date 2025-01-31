import React, { useState } from 'react';
import './login.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import amazon_checkout from '../../images/amazon-checkout.jpeg';

const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');



    const signIn=(e)=>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully signed in
            if(userCredential){
                navigate('/');
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in:', errorCode, errorMessage);
        });
    }




    const register=(e)=>{
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successfully created new user
                if(userCredential){
                    navigate('/');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error creating user:', errorCode, errorMessage);

            });
    }


  return (
    <div className='login'>
        <Link to="/">
        <img
            className='login_logo'
            src={amazon_checkout}
            alt='amazon logo'
        />
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
                <h4>E-mail</h4>
                <input
                    type='text'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <h4>Password</h4>
                <input
                    type='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button
                    className='login_signInButton'
                    onClick={signIn}
                    type='submit'
                >Sign In
                </button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interst-Based Ads Notice.
            </p>

            <button onClick={register} className='login_registerButton'>
                Create Your Amazon Account
            </button>
        </div>
    </div>
  )
}

export default Login