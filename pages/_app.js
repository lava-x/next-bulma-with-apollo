import App, { Container } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import Layout from 'components/Layout';
import withApolloClient from 'config/with-apollo-client';
import 'styles/styles.scss';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps(props) {
    const { Component, ctx, apolloClient } = props;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps, apolloClient };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <Head>
          <title>Lava X | NextJS with Bulma Starter</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withRouter(withApolloClient(MyApp));
