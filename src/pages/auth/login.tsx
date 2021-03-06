import React from "react";
import Login from "../../Components/Login/Login";
import { wrapper } from "../../redux/store";
import nookies from "nookies";
import admin from "firebase-admin";
import account from "../../firebase-account.json";

function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default Login;

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
