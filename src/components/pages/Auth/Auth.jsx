import React from 'react'
import signCss from './auth.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useContext } from 'react'
import {auth} from '../../../utilities/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from '../../DataProvider/DataProvider'
import {SyncLoader} from 'react-spinners'
import { Types } from '../../../utilities/actionTypes'
function Auth() {
  
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError]=useState()
  const [{user}, dispatch]=useContext(DataContext)
  const [loading, setLoading]=useState({
    signIn:false,
    signUp:false
  })

  const navigate=useNavigate();
  const navStateData=useLocation();
  

  const authHandler=(e)=>{
    e.preventDefault();
    console.log(e.target.name)
    if(e.target.name=="signIn"){

      setLoading({...loading, signIn:true})
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        dispatch({
          type:Types.SET_USER,
          user:userInfo.user
        })
        setLoading({...loading, signIn:false})
        navigate(navStateData?.state?.redirect || "/")
      }).catch((err)=>{
        console.log(err);
        setError(err.message)
        setLoading({...loading, signIn:false})
      })

    }else{

      setLoading({...loading, signUp:true})
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo)=>{
        dispatch({
          type:Types.SET_USER,
          user:userInfo.user
        })
        setLoading({...loading, signUp:false})
        navigate(navStateData?.state?.redirect || "/")
      }).catch((err)=>{
        console.log(err);
        setError(err.message);
        setLoading({...loading, signUp:false})
      })

    }
  }

  return (
    <div className={signCss.signPage}>
      <div className={signCss.logo}>
        <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazonLogo" />
        </Link> 
      </div>

      <div className={signCss.form}>
        <h1 className={signCss.header}>Sign In</h1>
        {
          navStateData?.state?.msg && (
            <small style={{
              padding:"100px",
              textAlign:"center",
              fontWeight:"bold",
              color:"red"
            }}>{navStateData.state.msg}</small>
            
          )
        }
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
            {
              loading.signIn?(<SyncLoader size={10}/>):("Sign in")
            }
            
            </button>
        </form>
        <p>
          By sign in you agree to the AMAZONE FAKE CLONE conditions of use & sale. Plase see our Privecy Notice, Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button 
        name="signUp"
        type="submit" 
        onClick={authHandler} 
        className={signCss.create}>
           {
              loading.signUp?(<SyncLoader size={10}/>):("Create Your Amazon Account")
            }</button>

          {error && (<small style={{color:"red", paddingTop:"20px"}}>{error}</small>)}
      </div>
    </div>
  )
}

export default Auth
