import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  return (
      <div>
          <h1>Signup Page</h1><br /><br />
          <input type="text" name="" id="" placeholder='Username' /><br /><br />
          <input type="email" name="" id="" placeholder='Email' /><br /><br />
          <input type="text" name="" id="" placeholder='Age' /><br /><br />
          <input type="text" name="" id="" placeholder='Place' /><br /><br />
          <input type="text" name="" id="" placeholder='Phone no' /><br /><br />
          <Link to='/login'><Button variant="contained">Signup</Button></Link>
          
      </div>
  )
}

export default Signup