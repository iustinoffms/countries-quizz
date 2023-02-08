import Head from "next/head";
import type { NextPage } from "next";

import { Login } from "modules/auth";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Login />
    </>
  );
};

export default LoginPage;
