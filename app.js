const express = require("express") ;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const Facturas= require ("./routes/Facturas");
const ProductosyServicios= require ("./routes/ProductosyServicios.js");
const Usuarios =require ("./routes/Usuarios.js"); 


const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/api/Facturas", Facturas)
app.use("/api/ProductosyServicios", ProductosyServicios)
app.use("/api/Usuarios", Usuarios)

dotenv.config()

mongoose.connect(process.env.CNX_MONGO)
.then(() => console.log("Conectado a la base de datos"))
.catch((error) => console.log(error))
 
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))