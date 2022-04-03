const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  id: Joi.number(),
  name: Joi.string().required(),
  themeId: Joi.number().required(),
  img: Joi.string(),
  questions: Joi.array(),
})
