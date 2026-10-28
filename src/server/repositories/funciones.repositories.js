import pool from '../lib/db.js';


export async function Buscar({text}) {
    const resultado = await pool.query(
        'Select * FROM buscar_pacientes($1)', [text] 
    ) 
    return resultado.rows;
}


