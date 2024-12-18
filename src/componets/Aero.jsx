import React from 'react'

function Aero() {
  const fetchdata =()=>{
    fetch("https://fakestoreapi.com/products").then((responce))
  }
  return (
    <div>
      
    </div>
  )
}

export default Aero

const fetchdata =()=>{
  fetch("https://fakestoreapi.com/products").then((responce)=>responce.json()).then((result)=>console.log(result)).catch((error)=>console.log(error))

}
fetchdata();