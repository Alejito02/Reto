const express = require("express");
const { postProductosyServicios, getProductoServicio } =require("../controllers/ProductosyServicios.js") ;
const ValidarC = require("../middlewares/ValidarC.js");
const helperProductosyServicios = require("../helpers/ProductostServicios.js");

const router = express.Router();

router.post("/", [ 
  
], postProductosyServicios);

router.get("/ProductosyServicios",[
   
], getProductoServicio);

module.exports=router