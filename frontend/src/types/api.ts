export interface Pagination {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface ApiError {
  code: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  pagination?: Pagination;
  error?: ApiError;
}

export type Locale = 'km' | 'en';
