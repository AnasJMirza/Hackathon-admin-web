import React from 'react';
import './Login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../config/firebase';

const Login = () => {

    let email = ""
    let password = ""

    const emailGetter = (e)=>{
        email = e.target.value
    }

    const passwordGetter = (e)=>{
        password = e.target.value
    }

    const isLogin = (email, password)=> {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user credential", user);
            alert("User Login", user)
            console.log(email, password);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error", errorMessage)
            console.log(email, password);
        });
    }

    return (
        <div className='login-body'>
            <form action='#'>
                <input type="email" placeholder='Email' onChange={(e)=>emailGetter(e)}/>
                <input type="password" placeholder='Password' onChange={(e)=>passwordGetter(e)}/>
                <button onClick={()=>isLogin(email, password)}>Login</button>
            </form>
        </div>
    );
};

export default Login;