import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

type QueryProviderProps = {
  children: JSX.Element | JSX.Element[];
}

const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      { children  }
    </QueryClientProvider>
  );
};

export default QueryProvider;
