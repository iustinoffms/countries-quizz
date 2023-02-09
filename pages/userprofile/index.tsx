import Head from "next/head";
import type { NextPage } from "next";
import { Profile } from "modules/profile";

const UserProfile: NextPage = () => {
  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <Profile />
    </>
  );
};

export default UserProfile;
