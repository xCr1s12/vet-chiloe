import { Router } from 'express';
import {
  getPacientePorIdController,
  getPacientes,
  postPaciente,
} from '../controller/pacientes.controller.js';

const router = Router();

router.get("/:id", getPacientePorIdController);
router.get("/", getPacientes)

router.post("/", postPaciente)

export default router;