const express = require("express");
const {getFacturas, getFactura, postFacturas} = require("../controllers/Facturas.js");

const helperFacturas = require("../helpers/Facturas.js");

const router = express.Router();

router.post("/", [
   
] , postFacturas);

router.get("/Facturas",[
   
], getFacturas);

router.get("/Facturas/:id",[
    
    
], getFactura);

module.exports=router