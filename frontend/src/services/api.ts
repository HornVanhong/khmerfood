import { ApiResponse } from '@/types/api';

const isServer = typeof window === 'undefined';
const API_BASE_URL = isServer
  ? (process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1')
  : (process.env.NEXT_PUBLIC_API_URL || '/api/v1');

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      next: { revalidate: 60 },
    });

    const json = await res.json();
    return json;
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error);
    return {
      success: false,
      data: null as unknown as T,
      error: {
        code: 'NETWORK_ERROR',
        message: error instanceof Error ? error.message : 'Network request failed',
      },
    };
  }
}
