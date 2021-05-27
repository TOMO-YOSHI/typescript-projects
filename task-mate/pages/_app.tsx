import { AppProps } from 'next/dist/next-server/lib/router/router'
import { useApollo } from '../lib/client';
import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css'
import React from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
