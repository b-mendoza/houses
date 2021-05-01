import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

// import Head from "next/head";
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "src/apollo";
// import { AuthProvider } from "src/auth/useAuth";

import 'styles/index.css';

function __App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default __App;
