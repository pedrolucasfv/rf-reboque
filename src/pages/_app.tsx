import GlobalStyles from "@/styles/global";
import theme from "../styles/theme";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>RF Reboque - Apiacá/ES</title>
        <meta name="theme-color" content="#BC1821" />
        <meta name="google-site-verification" content="8Dpgeq41frarS-Qq2SEDGAWUQmwhgYDQabCZijLhXog" />
        <link rel="shortcut icon" href="/img/logo.jpg" />
        <meta
          name="description"
          content="RF reboque é uma empresa que transporta veículos para um destino escolhido."
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
