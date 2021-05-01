import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import { AppProps } from 'next/app';

// import Head from "next/head";
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "src/apollo";
// import { AuthProvider } from "src/auth/useAuth";

function __App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default __App;
