import React from 'react'
import Hanon from './hanon'


function Contact() {
    const person = {
        name:"ahad",
        age:70,
        Image:"./image/dom.png",}
  return (
    <div>
      <Hanon name={person}/>
    </div> )
}

export default Contact
