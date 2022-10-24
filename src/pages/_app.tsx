import "src/styles/globals.css";

import { NhostClient, NhostNextProvider, NhostSession } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import Layout from "src/components/Layout";
import UserProvider from "src/hook/useUserContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Nhost_Session = {
  nhostSession: NhostSession;
};

type AppPropsWithLayout = AppProps<Nhost_Session> & {
  Component: NextPageWithLayout<Nhost_Session>;
};

export const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
  region: process.env.NEXT_PUBLIC_NHOST_REGION,
});
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(
      <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
        <NhostApolloProvider nhost={nhost}>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </NhostApolloProvider>
      </NhostNextProvider>
    );
  }

  // <{ nhostSession: NhostSession }>
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <UserProvider>
          <Layout />
          <Component {...pageProps} />
        </UserProvider>
      </NhostApolloProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
