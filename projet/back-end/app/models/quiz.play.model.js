const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('QuizPlayed', {
  id: Joi.number().required,
  playerName: Joi.string().required(),
  themeId: Joi.number().required(),
  quizId: Joi.number().required(),
  score: Joi.number().required(),
})
