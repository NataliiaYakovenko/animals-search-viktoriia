const PET_VALIDATION_SCHEMA = require('../schema/validate');

module.exports.validatePetOnCreate = async (req, res, next) => {
  try {
    const { body } = req;

    const validatedPet = await PET_VALIDATION_SCHEMA.validate(body);
    req.body = validatedPet;
    next()
  } catch (error) {
    next(error);
  }
};
