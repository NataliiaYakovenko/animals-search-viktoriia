const {PetType} = require('../models');

module.exports.getPetTypes = async (req, res, next) => {
  try {
    const foundTypes = await PetType.findAll({
      row: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.status(200).send({ data: foundTypes });
  } catch (error) {
    next(error);
  }
};
