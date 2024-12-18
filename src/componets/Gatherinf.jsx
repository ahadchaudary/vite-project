import React, { useState } from 'react'

const Gatherinf = () => {
  const [data , setData]=useState(30)
  const decreament = ()=>{
  if(data>0){
    setData(data-5)
    toast.success("reduction successful")
  
  }else{
    toast.error("Limit reached")
  }
}
  return (
    
    <div className='text-center'>
      <h1>{data}</h1>
      <div className="btn" onClick={()=>setData(data+1)} >Increase</div>
      <div className="btn" onClick={()=>setData(data-1)} >Decrease</div>
      <h1>I am gallery</h1>
    </div>
  )
}

export default Gatherinf

