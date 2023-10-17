const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home_controller');
const EventosController = require('../controllers/eventos_controller');


router.get('/', HomeController.index);
router.get('/eventos.json', EventosController.index)
router.get('/eventos/:id.json', EventosController.get)
router.post('/eventos.json', EventosController.create)
router.put('/eventos/:id.json', EventosController.update)
router.delete('/eventos/:id.json', EventosController.delete)


module.exports = router;
