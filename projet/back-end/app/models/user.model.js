const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  id: Joi.number().required(),
  userName: Joi.string().required(),
  password: Joi.string().required(),
  pro: Joi.boolean(),
  volume: Joi.string(),
  voice: Joi.number(),
  size: Joi.number(),
})
