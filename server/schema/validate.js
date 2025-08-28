const yup = require('yup');

const PET_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(32).required(),
  owner: yup.string().trim().min(2).max(64).required(),
  ownerContacts: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/, 'Number phone must be +XXX XX XXX XX XX')
    .required(),
  description: yup.string().trim().required(),
  city: yup.string().oneOf(['Kyiv', 'Dnipro', 'New York']).required(),
  lostDate: yup.date().max(new Date()).required(),
  petTypeId: yup.string().min(1).required()
});

module.exports = PET_VALIDATION_SCHEMA;
