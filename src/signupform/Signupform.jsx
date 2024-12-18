import React from 'react'

const Signupform = () => {
  return (
    <div>
      <h2>Registration Form</h2>
    <form action="/submit" method="POST">

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>

    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>

        
        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" required/>

        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

