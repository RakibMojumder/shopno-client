'use client'

import store from '@/redux/store';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'

const RootProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster position='top-left' />
        </Provider>
    );
};

export default RootProvider;