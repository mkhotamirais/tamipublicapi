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

export const CountryList = [
  { symbol: "ae", country: "United Arab Emirates" },
  { symbol: "ar", country: "Argentina" },
  { symbol: "at", country: "Austria" },
  { symbol: "au", country: "Australia" },
  { symbol: "be", country: "Belgium" },
  { symbol: "bg", country: "Bulgaria" },
  { symbol: "br", country: "Brazil" },
  { symbol: "ca", country: "Canada" },
  { symbol: "ch", country: "Switzerland" },
  { symbol: "cn", country: "China" },
  { symbol: "co", country: "Colombia" },
  { symbol: "cu", country: "Cuba" },
  { symbol: "cz", country: "Czech Republic" },
  { symbol: "de", country: "Germany" },
  { symbol: "eg", country: "Egypt" },
  { symbol: "fr", country: "France" },
  { symbol: "gb", country: "United Kingdom" },
  { symbol: "gr", country: "Greece" },
  { symbol: "hk", country: "Hong Kong" },
  { symbol: "hu", country: "Hungary" },
  { symbol: "id", country: "Indonesia" },
  { symbol: "ie", country: "Ireland" },
  { symbol: "il", country: "Israel" },
  { symbol: "in", country: "India" },
  { symbol: "it", country: "Italy" },
  { symbol: "jp", country: "Japan" },
  { symbol: "kr", country: "South Korea" },
  { symbol: "lt", country: "Lithuania" },
  { symbol: "lv", country: "Latvia" },
  { symbol: "ma", country: "Morocco" },
  { symbol: "mx", country: "Mexico" },
  { symbol: "my", country: "Malaysia" },
  { symbol: "ng", country: "Nigeria" },
  { symbol: "nl", country: "Netherlands" },
  { symbol: "no", country: "Norway" },
  { symbol: "nz", country: "New Zealand" },
  { symbol: "ph", country: "Philippines" },
  { symbol: "pl", country: "Poland" },
  { symbol: "pt", country: "Portugal" },
  { symbol: "ro", country: "Romania" },
  { symbol: "rs", country: "Serbia" },
  { symbol: "ru", country: "Russia" },
  { symbol: "sa", country: "Saudi Arabia" },
  { symbol: "se", country: "Sweden" },
  { symbol: "sg", country: "Singapore" },
  { symbol: "si", country: "Slovenia" },
  { symbol: "sk", country: "Slovakia" },
  { symbol: "th", country: "Thailand" },
  { symbol: "tr", country: "Turkey" },
  { symbol: "tw", country: "Taiwan" },
  { symbol: "ua", country: "Ukraine" },
  { symbol: "us", country: "United States" },
  { symbol: "ve", country: "Venezuela" },
  { symbol: "za", country: "South Africa" },
];

// export interface NewsQuery {
//   top: string;
//   queryObj: {
//     q?: string; // q is optional
//   };
// }
