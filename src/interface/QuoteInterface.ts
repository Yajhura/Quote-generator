export interface ResponseQuote {
  data: QuoteInterface[];
  message: string;
  pagination: Pagination;
  statusCode: number;
  totalQuotes: number;
}

export interface Pagination {
  currentPage: number;
  nextPage: null;
  totalPages: number;
}

export interface QuoteInterface {
  __v: number;
  _id: string;
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
}
