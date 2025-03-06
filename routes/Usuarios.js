const express = require("express");
const { postUsuarios, getUsuario, putUsuarios } = require("../controllers/Usuarios.js");
const { check } = require("express-validator");
const ValidarC = require("../middlewares/ValidarC.js");
const helperUsuarios =require("../helpers/Usuarios.js") ;

const router = express.Router();

router.post("/", [

] , postUsuarios);

router.get("/Usurios/:id",[
   
], getUsuario);

router.put("/Usuarios/:id",[
   
], putUsuarios);

module.exports = router