import { Router } from 'express';
import { buscar } from '../controller/funciones.controller.js';

const router = Router();

router.get("/", buscar);
export default router;