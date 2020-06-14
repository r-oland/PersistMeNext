import App from "next/app";
import Head from "next/head";
import AppWrapper from "../global-components/AppWrapper";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppWrapper>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </AppWrapper>
    );
  }
}
