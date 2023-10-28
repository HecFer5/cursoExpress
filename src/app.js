import express from "express";
import rutaEmpleados from './routes/empleados.routes.js'
import rutaIndex from './routes/index.routes.js'


const app = express();

app.use(express.json())

app.use(rutaIndex)
app.use(rutaEmpleados)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'ruta no encontrada'
     } )
})

export default app