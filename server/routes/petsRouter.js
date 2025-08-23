const { Router } = require('express');
const petsController = require('../controllers/petsController');

const petsRouter = Router();

//  /api/pets
petsRouter.route('/')
   .post(petsController.createPet)
   .get(petsController.getPets)

petsRouter.route('/:id')
   .get(petsController.getPetById)
   .patch(petsController.updatePetById)
   .delete(petsController.deletePrtById)

module.exports = petsRouter;
