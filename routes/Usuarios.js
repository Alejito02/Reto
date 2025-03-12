import { Router } from "express";
import {getUsuarios ,postUsuarios, getUsuario, putUsuarios} from '../controllers/Usuarios.js'


const router =Router();

router.post("/", [

] , postUsuarios);




router.get("/users", getUsuarios)

router.get("/Usuarios/:id",[
   
], getUsuario);

router.put("/Usuarios/:id",[
   
], putUsuarios);


export default router