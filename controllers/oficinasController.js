const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
exports.listarOficinas = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM oficinas');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar oficinas:', err);
        res.status(500).json({ erro: 'Erro interno no servidor' });
    }
};