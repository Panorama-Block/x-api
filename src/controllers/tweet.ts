import { RequestHandler } from "express"
import * as tweetService from '../services/tweet'

export const getAllTweets: RequestHandler = async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;

  const result = await tweetService.getTweets({ page, limit });

  if (result) {
    res.status(200).json(result);
  }
  else {
    res.status(500).json({
      error: 'An error occurred in the request'
    });
  }
}