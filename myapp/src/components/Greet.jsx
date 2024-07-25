import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Greet = () => {
    var [greet, changegreet] = useState()

    const reactgreet = () => {
        changegreet("React")

    }

    const angulargreet = () => {
        changegreet("Angular")
    }

    const viewgreet = () => {
        changegreet("View")
    }

    // useEffect (() => { },[])syntax of use effect
    useEffect(() => { 
        reactgreet()

    }, [])




  return (
      <div>
          <Typography variant='h6'>Welcome to {greet}</Typography>
          <Button variant="contained" color='primary' onClick={reactgreet}>React</Button>&nbsp;&nbsp;
          <Button variant="contained" color='warning' onClick={angulargreet}>Angular</Button>&nbsp;&nbsp;
          <Button variant="contained" color='success' onClick={viewgreet}>View</Button>

    </div>
  )
}

export default Greet