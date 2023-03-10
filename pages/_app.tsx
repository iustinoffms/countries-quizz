import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { store } from "../app/store";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
