import {
    getDataPacientes,
    getPacientePorId,
    insertDataPacientes,
} from "../service/server/pacientes.service.js";


export async function getPacientes(req, res) {
    
    try {
        const pacientes = await getDataPacientes(req); 
        res.status(200).json(pacientes)
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
}

export async function getPacientePorIdController(req, res) {
    const id = Number(req.params.id);
    if (!Number.isSafeInteger(id) || id < 1) {
        return res.status(400).json({ error: 'El id debe ser un entero positivo' });
    }

    try {
        const paciente = await getPacientePorId(id);
        if (!paciente) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }
        return res.status(200).json(paciente);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

export async function postPaciente (req, res) {
    try {
        const nuevoPaciente = await insertDataPacientes(req.body);
        res.status(201).json(nuevoPaciente)
    }
    catch (err) {
        const numeroHttp = err.status || err.statusCode || (err.response && err.response.status) || 500;
        res.status(numeroHttp).json({error: err.message})
    }

}
