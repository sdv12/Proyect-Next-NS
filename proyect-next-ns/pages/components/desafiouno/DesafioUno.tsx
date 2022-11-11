import { Button } from '@mui/material'
import React, { useState } from 'react'


const DesafioUno = () => {
    const [text, setText] = useState('')
    const [resultadoUno, setResultadoUno] = useState('')
    const [resultadoParImpar, setResultadoParImpar] = useState('')
    const [cantidadA, setCantidadA] = useState(0)

  
    const guardarDatos = (e) => {
      e.preventDefault()
  
      if(!text.trim()) {
        setResultadoUno('No hay texto disponible')
    } else {
        setResultadoUno(text.length.toString())

        if (text.length %2 === 0) {
            setResultadoParImpar('es par')
        } else {
            setResultadoParImpar('es impar')
        }

        let numeroDeA = 0
        for (var i = 0; i < text.length; i++) {
            console.log(text[i]) 
            if ( text[i] =='a') {
                numeroDeA++
            }
        }
        setCantidadA(numeroDeA)
    }

}
      


    return (
        <>
        <h1>Formulario</h1>
            <form onSubmit={ guardarDatos } >
                <input 
                    type="text"
                    placeholder="Ingrese texto"
                    onChange={ (e) => setText(e.target.value) }
                />
                    <Button type="submit">Agregar</Button> 
                </form>
                <h3>Resultado cantidad de caracteres: {resultadoUno}</h3>
                <br></br>
                <h3>Resultado por numeros par/impar: {resultadoParImpar}</h3>
                <br></br>
                <h3>Cantidad de A: {cantidadA}</h3>
    
        </>
            
        )
}

export default DesafioUno