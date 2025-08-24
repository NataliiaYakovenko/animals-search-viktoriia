const { Pet } = require('../models');

module.exports.createPet = async (req, res, next) => {
  try {
    const { body } = req;

    const createdPet = await Pet.create(body);
    if (!createdPet) {
      res.status(400).send('Something wrong');
    }
    res.status(201).send({ data: createdPet });
  } catch (error) {
    next(error);
  }
};

module.exports.getPets = async (req, res, next) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    next(error);
  }
};

module.exports.getPetById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.updatePetById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.deletePrtById = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
