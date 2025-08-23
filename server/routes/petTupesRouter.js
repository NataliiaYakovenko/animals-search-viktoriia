const { Router } = require('express');
const petTypesController = require('../controllers/petTypesController');

const petTypesRouter = Router();

//   /api/petTypes
petTypesRouter.get('/', petTypesController.getPetTypes);

module.exports = petTypesRouter;
