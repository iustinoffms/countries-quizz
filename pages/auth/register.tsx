import Head from "next/head";
import type { NextPage } from "next";

import { Register } from "modules/auth";

const RegisterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <Register />
    </>
  );
};

export default RegisterPage;
