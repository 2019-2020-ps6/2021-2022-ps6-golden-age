const { Router } = require('express')
const ThemesRouter = require('./themes')
const QuizzesRouter = require('./themes/quizzes')
const UserRouter = require('./users')
const QuizPlayedRouter = require('./quizplayed')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/themes', ThemesRouter)
router.use('/quizzes', QuizzesRouter)
router.use('/users', UserRouter)
router.use('/quizplayed', QuizPlayedRouter)

module.exports = router
