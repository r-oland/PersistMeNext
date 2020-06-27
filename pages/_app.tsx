import { AppProps } from "next/app";
import { useEffect } from "react";
import UserContextComp from "../firebase/useUser";
import AppWrapper from "../global-components/AppWrapper";

export default function MyApp({ Component, pageProps }: AppProps) {
  // This hook only run once in browser after the component is rendered for the first time.
  // It has same effect as the old componentDidMount lifecycle callback.
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      window.workbox.addEventListener("waiting", (event) => {
        if (
          confirm(
            "A new version is installed, reload to use the new version immediately?"
          )
        ) {
          window.workbox.addEventListener("controlling", (event) => {
            window.location.reload();
          });
          window.workbox.messageSW({ type: "SKIP_WAITING" });
        } else {
          // User rejected, new verion will be automatically load when user open the app next time.
        }
      });
    }
  }, []);

  return (
    <UserContextComp>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </UserContextComp>
  );
}
