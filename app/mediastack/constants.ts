export const url = "https://api.mediastack.com/v1/news";
export const apiKey = process.env.MEDIASTACK_API_KEY;

export type NewsType = {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
};
