const { Router } = require('express');
const petsController = require('../controllers/petsController');
const { validatePetOnCreate } = require('../middlewares/validate');

const petsRouter = Router();

//  /api/pets
petsRouter
  .route('/')
  .post(validatePetOnCreate, petsController.createPet)
  .get(petsController.getPets);

petsRouter
  .route('/:id')
  .get(petsController.getPetById)
  .patch(petsController.updatePetById)
  .delete(petsController.deletePrtById);

module.exports = petsRouter;
