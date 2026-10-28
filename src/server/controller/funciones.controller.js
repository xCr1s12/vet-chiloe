import * as funcionesService from "../service/server/funciones.service.js";

export async function buscar(req, res) {
    try {
        const texto = req.query.q ?? '';
        const pacientes = await funcionesService.buscar(texto);
        return res.status(200).json(pacientes);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}