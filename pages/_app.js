import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import Layout from 'components/Layout';
import withApolloClient from 'config/with-apollo-client';

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
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
