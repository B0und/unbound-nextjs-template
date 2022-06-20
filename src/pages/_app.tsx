import { ReactElement, ReactNode } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { AllProviders } from "../utils/providers";

import "../styles/globals.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const isDevEnv = process.env.NODE_ENV === "development";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AllProviders>
      {getLayout(<Component {...pageProps} />)}
      {isDevEnv && <ReactQueryDevtools initialIsOpen={false} />}
    </AllProviders>
  );
}

export default appWithTranslation(MyApp);
