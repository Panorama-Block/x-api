import Tweet from "../model/tweet"

interface PaginationOptions {
  page: number;
  limit: number;
}

export const getTweets = async (options: PaginationOptions = { page: 1, limit: 20 }) => {
  try {
    const skip = (options.page - 1) * options.limit;

    const [tweets, total] = await Promise.all([
      Tweet.find()
        .sort({ created_at_datetime: -1 })
        .skip(skip)
        .limit(options.limit),
      Tweet.countDocuments()
    ]);

    return {
      tweets,
      pagination: {
        total,
        page: options.page,
        limit: options.limit,
        totalPages: Math.ceil(total / options.limit)
      }
    };
  }
  catch (error) {
    return false;
  }
}