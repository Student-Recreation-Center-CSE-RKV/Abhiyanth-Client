import { Button } from '@mui/material'
import React from 'react'

export default function Payment() {
  return (
    <div style={{paddingTop:"90px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button  sx={{fontSize:"40px", backgroundColor:"red"}}>
            Pay
        </Button>
    </div>
  )
}
