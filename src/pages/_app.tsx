import React from "react";
import "../../styles/globals.scss";
import { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import Head from "next/head";
import AuthProvider from "../Components/AuthProvider/AuthProvider";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
