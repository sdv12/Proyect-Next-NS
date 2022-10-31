import { Button } from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"


const Welcome = () => {
  const [data, setData] = useState({})
  
  const lookData = async () => {
    const prueba = await axios.get("https://catfact.ninja/facts")
    setData(prueba)
  }
  
  console.log(data)
  useEffect(() => {
    lookData()
  }, [])

  
  return (
      <Button variant="outlined"> Tocame
      </Button>
  )
}

export default Welcome