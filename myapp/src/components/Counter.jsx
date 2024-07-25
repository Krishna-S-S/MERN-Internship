import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {

    var [num, nextnum] = useState(0)
   
    const addfun = () => {
        nextnum(num+1)
        
    }

    const subfun = () => {
        nextnum(num-1)
    }

  return (
      <div>
          <Typography variant='h6'>Numbers {num}</Typography>
         
          <Button variant="contained" onClick={addfun}>Add</Button>&nbsp;&nbsp;
          <Button variant="contained" onClick={subfun}>Sub</Button>
    </div>
  )
}

export default Counter