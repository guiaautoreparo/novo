const express = require('express');
const router = express.Router();
const controller = require('../controllers/oficinasController');
router.get('/', controller.listarOficinas);
module.exports = router;