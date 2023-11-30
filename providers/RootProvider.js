'use client'

import store from '@/redux/store';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const RootProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {children}
                <Toaster position='top-left' />
            </Provider>
        </QueryClientProvider>
    );
};

export default RootProvider;