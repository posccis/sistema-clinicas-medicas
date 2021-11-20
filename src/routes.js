const router = require('express').Router();

const medicoController = require('./controllers/medicoController');

router.post('/cadastro', medicoController.cadastro);
router.get('/listMedicos', medicoController.list);

module.exports = router;