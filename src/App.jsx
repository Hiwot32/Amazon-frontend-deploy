import React, { useEffect } from 'react'
import Routings from './components/Routings/Routings.jsx'
import { Types } from './utilities/actionTypes.js'
import { auth } from './utilities/firebase.js'
import { DataContext } from './components/DataProvider/DataProvider.jsx'
import { useContext } from 'react'


function App() {

  const [{user}, dispatch]=useContext(DataContext);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        console.log(authUser)
        dispatch({
          type:Types.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:Types.SET_USER,
          user:null,
        })
      }
    })
  },[])

  return (
    <>
      <Routings />
      
    </>
  )
}

export default App
