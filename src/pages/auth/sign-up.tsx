import React from "react";
import SignUp from "../../Components/SignUp/SignUp";

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
