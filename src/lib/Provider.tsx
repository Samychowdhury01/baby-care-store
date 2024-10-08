"use client";

import { persistor, store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProviders } from "./AuthProviders";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <Toaster position="bottom-center" />
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProviders>
           {children}
          </AuthProviders>
        </PersistGate>
      </ReduxProvider>
    </NextUIProvider>
  );
};

export default Provider;
