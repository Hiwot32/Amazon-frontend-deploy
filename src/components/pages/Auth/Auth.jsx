import React from 'react'
import signCss from './auth.module.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import {auth} from '../../../utilities/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from '../../DataProvider/DataProvider'

function Auth() {
  
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError]=useState()
  const [{user}, dispatch]=useContext(DataContext)
  

  const authHandler=(e)=>{
    e.preventDefault();
    console.log(e.target.name)
    if(e.target.name=="signIn"){

      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        dispatch({
          type:Types.SET_USER,
          user:userInfo.user
        })
        console.log(userInfo);
      }).catch((err)=>{
        console.log(err);
      })

    }else{
      createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        console.log(userInfo);
      }).catch((err)=>{
        console.log(err);
      })

    }
  }

  return (
    <div className={signCss.signPage}>
      <div className={signCss.logo}>
        <Link to="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazonLogo" />
        </Link> 
      </div>

      <div className={signCss.form}>
        <h1 className={signCss.header}>Sign In</h1>
        <form action="">
          <div>
            <label htmlFpr="email">Email</label> <br />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email"/> <br />

          </div>
          <div>
            <lable htmlFor="password">Password</ lable> <br />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password"/> <br />

          </div>
          
          
          <button 
          name="signIn"
          type="submit" 
          onClick={authHandler} 
          className={signCss.sign}>
            Sign in</button>
        </form>
        <p>
          By sign in you agree to the AMAZONE FAKE CLONE conditions of use & sale. Plase see our Privecy Notice, Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button 
        name="signUp"
        type="submit" 
        onClick={authHandler} 
        className={signCss.create}>
          Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Auth
