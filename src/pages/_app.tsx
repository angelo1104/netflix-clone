import React,{FC} from "react";
import '../../styles/globals.css';
import {AppProps} from "next/app";
import {wrapper} from "../redux/store"

function MyApp({ Component, pageProps }: FC<AppProps>):JSX.Element {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
