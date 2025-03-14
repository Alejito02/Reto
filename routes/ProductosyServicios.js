import { Router } from "express";
import { postProductosyServicios, getProductosyServicios, } from '../controllers/ProductosyServicios.js'


const router = Router();

router.post("/", postProductosyServicios);
router.post("/items", postProductosyServicios);
router.get("/", getProductosyServicios);

export default router