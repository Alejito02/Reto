import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import Facturas from './routes/Usuarios.js'
import ProductosyServicios from './routes/ProductosyServicios.js';
import usuarios from './routes/Usuarios.js'

const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/api/Facturas", Facturas)
app.use("/api/ProductosyServicios", ProductosyServicios)
app.use("/api/usuarios", usuarios)

dotenv.config()

mongoose.connect(process.env.CNX_MONGO)
.then(() => console.log("Conectado a la base de datos"))
.catch((error) => console.log(error))
 
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))