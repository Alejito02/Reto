import { Router } from "express";
import {getFacturas, getFactura, postFacturas} from '../controllers/Facturas.js';


const router = Router();

router.post("/" ,postFacturas);

router.get("/Facturas" ,getFacturas);

router.get("/Facturas/:id", getFactura);

export default router