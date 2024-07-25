import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var [names, setnames] = useState(
        [
            { "sname": "Krishna", "age": 22 },
            { "sname": "Devika", "age": 25 },
            { "sname": "Aadi Kesav", "age": 20 },
            { "sname": "Devanandan", "age": 15 }
        ]
    )
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {names.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.sname}</TableCell>
                                  <TableCell>{val.age}</TableCell>
                              </TableRow>
                              
                          )
                      })}
                      
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Mapping