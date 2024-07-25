import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Blog = () => {
    var [users, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
        })

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.id}</TableCell>
                                    <TableCell>{val.title}</TableCell>
                                    
                                </TableRow>

                            )
                        })}



                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Blog