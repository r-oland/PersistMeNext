import { AppProps } from "next/app";
import Head from "next/head";
import UserContextComp from "../firebase/useUser";
import AppWrapper from "../global-components/AppWrapper";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextComp>
      <AppWrapper>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/icon/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </AppWrapper>
    </UserContextComp>
  );
}
