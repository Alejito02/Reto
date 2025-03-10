import { Router } from "express";
import { postProductosyServicios, getProductoServicio } from '../controllers/ProductosyServicios.js'


const router = Router();

router.post("/", postProductosyServicios);

router.get("/ProductosyServicios",[
   
], getProductoServicio);

export default router