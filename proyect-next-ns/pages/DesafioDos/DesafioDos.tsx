import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useState } from "react"

const DesafioDos = () => {
    const [granja, setGranja] = useState(['vaca', 'toro','vaca','gato','perro', 'toro', 'vaca', 'gallo', 'gallina', 'conejo','conejo', 'cerdo', 'toro', 'conejo', 'cerdo', 'vaca', 'perro', 'paloma', 'perro'])
    

    
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <Box>
          <Typography variant="h1" component="h2">
            La granja del nagu
          </Typography>
          <Typography variant="body1" component="p">
            esta compuesta por
          </Typography>

        <div style={{display:'flex', justifyContent:'center', gap:'15px', padding:'25px'}}>

          <Typography sx={{fontSize:'20px'}}>Vacas </Typography>
          <Typography sx={{fontSize:'20px'}}>Toros </Typography>
          <Typography sx={{fontSize:'20px'}}>Gatos </Typography>
          <Typography sx={{fontSize:'20px'}}>Gallos </Typography>
          <Typography sx={{fontSize:'20px'}}>Gallinas </Typography>
          <Typography sx={{fontSize:'20px'}}>Conejo </Typography>
          <Typography sx={{fontSize:'20px'}}>Cerdos </Typography>
          <Typography sx={{fontSize:'20px'}}>Perros </Typography>
          <Typography sx={{fontSize:'20px'}}>Palomas </Typography>
        </div>
        <Typography variant="body1" component="p" sx={{padding:'25px'}}>
            Quisiera saber...
          </Typography>
          <Stack direction="row" spacing={2} justifyContent='center'>
            <Button  variant="contained" size="large">Cuantos animales hay ?</Button>
            <Button variant="contained" size="large">Cuantos de cada tipo ? </Button>
            <Button variant="contained" size="large">De un animal en especifico</Button>
          </Stack>
        </Box>
      </Container>
    );
}

export default DesafioDos