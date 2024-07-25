import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h4' sx={{ flexGrow: 1}}>Myapp</Typography> &nbsp;&nbsp;&nbsp;
                  <Link to='/signup'>
                      <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>Signup</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/login'>
                      <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>Login</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/a'>
                      <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>State</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/counter'>
                      <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>Counter</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/greet'>
                      <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>Greet</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/mapping'>
                  <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>Mapping</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/api'>
                  <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>API</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/blog'>
                      <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>Blog</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/pokemon'>
                      <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>Pokemon</Button>
                  </Link>&nbsp;&nbsp;
                  
                      
                 
              </Toolbar>
          </AppBar><br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar