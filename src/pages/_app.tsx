import "src/styles/globals.css";

import { NhostClient, NhostNextProvider, NhostSession } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import type { AppProps } from "next/app";
import UserProvider from "src/hook/useUserContext";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

function MyApp({
  Component,
  pageProps,
}: AppProps<{ nhostSession: NhostSession }>) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </NhostApolloProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
