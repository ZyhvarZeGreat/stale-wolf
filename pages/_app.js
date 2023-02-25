import '@/styles/globals.css'
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const queryClient = new  QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
  
    <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>)
}
