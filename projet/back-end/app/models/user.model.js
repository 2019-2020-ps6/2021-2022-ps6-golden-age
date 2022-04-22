const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userId: Joi.number().required(),
  userName: Joi.string().required(),
  password: Joi.string().required(),

})
