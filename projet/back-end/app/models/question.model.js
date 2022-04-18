const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  id: Joi.number(),
  label: Joi.string().required(),
  answers: Joi.array(),
  number: Joi.number(),
  img: Joi.string(),
  id: Joi.number(),
})
