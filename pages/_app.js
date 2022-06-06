import 'tailwindcss/tailwind.css';
import React from "react";
import App from "next/app";
import {Provider} from "react-redux";
import {store, persistor} from "../redux/store";
import {PersistGate} from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import '../styles/globals.scss'
import '../styles/sidebar.scss'

const queryClient = new QueryClient()

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
    )
  }
}
