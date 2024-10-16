"use client";

import store from "@/redux/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const RootProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster position="top-left" />
      </QueryClientProvider>
    </Provider>
  );
};

export default RootProvider;
