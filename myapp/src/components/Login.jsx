import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <Typography variant='h4'>Login Page</Typography>
          <TextField id="outlined-basic" label="Username" variant="outlined" /><br/><br/>
          <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />
          <Button variant="contained">Login</Button>

    </div>
  )
}

export default Login