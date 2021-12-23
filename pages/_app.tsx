import { AppProps } from 'next/app';
import UserContextComp from '../firebase/useUser';
import AppWrapper from '../global-components/AppWrapper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextComp>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </UserContextComp>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
