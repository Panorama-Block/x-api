import { Router } from 'express'
import * as tweetController from '../controllers/tweet'

export const mainRouter = Router()

mainRouter.get('/tweets/', tweetController.getAllTweets)