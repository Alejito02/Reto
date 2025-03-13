import { Router } from "express";
import {getFacturas, postFacturas} from '../controllers/Facturas.js';


const router = Router();

router.post("/" ,postFacturas);
router.get("/" ,getFacturas);

router.post("/facturas" ,getFacturas);



export default router