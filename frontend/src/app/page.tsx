'use client';

import { useEffect, useState } from 'react';
import { fetchApi } from '../utils/api';

interface TestResponse {
  message: string;
  status: string;
}

export default function Home() {
  const [apiResponse, setApiResponse] = useState<TestResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const testApi = async () => {
      try {
        const response = await fetchApi<TestResponse>('/test/');
        setApiResponse(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    testApi();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">API Test</h1>
        {isLoading ? (
          <div className="p-4 bg-gray-100 rounded-lg">
            Loading...
          </div>
        ) : (
          <>
            {apiResponse && (
              <div className="p-4 bg-green-100 rounded-lg">
                <p>Message: {apiResponse.message}</p>
                <p>Status: {apiResponse.status}</p>
              </div>
            )}
            {error && (
              <div className="p-4 bg-red-100 rounded-lg">
                <p>Error: {error}</p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
