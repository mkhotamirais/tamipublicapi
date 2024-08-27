export const url = "https://newsapi.org/v2";
export const apiKey = process.env.NEWS_API_KEY;

export interface NewsTypes {
  url: string;
  urlToImage: string;
  description: string;
  title: string;
  publishedAt: string;
  author: string;
  content: string;
}

// export interface NewsQuery {
//   top: string;
//   queryObj: {
//     q?: string; // q is optional
//   };
// }
