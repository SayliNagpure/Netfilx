import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validation'
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const [isSignIn, serIsSignIn] = useState(true)
  const [check, setCheck] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  // const auth = getAuth();

  const handleSingIn = () => {
    serIsSignIn(!isSignIn)
  }

  const checkData = () => {
    const message = checkValidation(email?.current?.value, password?.current?.value)
    setCheck(message)
    // if (message) return
    // if (!isSignIn) {
    //   createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       console.log('user', user)
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setCheck(errorMessage + " " + errorCode)
    //     });
    // } else {
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       console.log('user', user)
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setCheck(errorMessage+" "+errorCode)
    //     });

    // }

  }

  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='page' />

      </div>
      <from className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input type='text' placeholder='Full Name' className='p-4 m-4 w-full bg-gray-700' />}
        {!isSignIn && <input type='text' placeholder='Mobile Number' className='p-4 m-4 w-full bg-gray-700' />}
        <input ref={email} type='text' placeholder='Enter Email' className='p-4 m-4 w-full bg-gray-700' />
        <input ref={password} type='password' placeholder='Enter Password' className='p-4 m-4 w-full bg-gray-700' />
        <p className='m-1 p-2 text-red-500'>{check}</p>
        <button className='p-4 m-4 bg-red-700 w-full rounded-lg' onClick={checkData}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 cursor-pointer' onClick={handleSingIn}>{isSignIn ? "New to Netflix? Sign up now." : "Alredy register. Sign In Now"}</p>
      </from>
    </div>
  )
}

export default Login