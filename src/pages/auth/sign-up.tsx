import React from "react";
import SignUp from "../../Components/SignUp/SignUp";
import { wrapper } from "../../redux/store";
import nookies from "nookies";
import admin from "firebase-admin";
import account from "../../firebase-account.json";

function SignUpPage(): JSX.Element {
  return (
    <div>
      <SignUp />
    </div>
  );
}

export default SignUpPage;

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
