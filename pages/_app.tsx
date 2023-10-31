import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyles";
import theme from "@/styles/Theme";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import "@/styles/fonts.css";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "@/styles/ChakraUi/chakraTheme";
import SidebarWithHeader from "@/patterns/Sidebar";

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
          <GlobalStyle />
          <SidebarWithHeader>
            <Component {...pageProps} />
          </SidebarWithHeader>
        </ThemeProvider>
      )
    ) : (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SidebarWithHeader>
          <Component {...pageProps} />
        </SidebarWithHeader>
      </ThemeProvider>
    );
  };

  return (
    mounted && (
      <GlobalContextProvider>
        <ChakraProvider>
          <ThemeWrapper />
        </ChakraProvider>
      </GlobalContextProvider>
    )
  );
};

export default App;
