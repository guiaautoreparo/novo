require('dotenv').config();
const express = require('express');
const app = express();
const oficinasRoutes = require('./routes/oficinas');
app.use(express.json());
app.use('/oficinas', oficinasRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));