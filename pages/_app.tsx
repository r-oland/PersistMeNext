import { AppProps } from "next/app";
import UserContextComp from "../firebase/useUser";
import AppWrapper from "../global-components/AppWrapper";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextComp>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </UserContextComp>
  );
}
