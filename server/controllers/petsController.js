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
  const { query } = req;
  console.log('query', query);

  const where = {};

  if (query.petType) {
    where.petTypeId = query.petType;
  }

  try {
    const foundPets = await Pet.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where,
    });
    if (!foundPets) {
      res.status(404).send('Pets not found');
    }
    res.status(200).send({ data: foundPets });
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
