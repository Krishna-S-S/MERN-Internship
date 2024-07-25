import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setfname] = useState()
    var [val,setval] = useState()

    const handleinput = (e) => {
            setfname(e.target.value)
            console.log(fname)
    }
    
    const handlechange = () => {
        setval(fname)
    }
    
  return (
      <div>
          <Typography variant='h6'>Welcome {val}</Typography>
          <TextField variant="outlined" onChange={handleinput} /><br /><br />
          <Button variant="contained" onClick={handlechange}>Change</Button>
          
          
    </div>
  )
}

export default StateBasics