import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyles";
import theme from "@/styles/Theme";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import "@/styles/fonts.css";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
import { ChakraProvider } from "@chakra-ui/react";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeWrapper = () => {
    return Component.getLayout ? (
      Component.getLayout(
        <ThemeProvider theme={theme}>
          <ChakraProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ChakraProvider>
        </ThemeProvider>
      )
    ) : (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  };

  return (
    mounted && (
      <GlobalContextProvider>
        <ThemeWrapper />
      </GlobalContextProvider>
    )
  );
};

export default App;
