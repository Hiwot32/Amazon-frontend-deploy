import React from 'react'
import {MoonLoader} from 'react-spinners'

function Loader() {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'80px'

    }}>
      <MoonLoader color="#7e7474"/>
    </div>
  )
}

export default Loader
