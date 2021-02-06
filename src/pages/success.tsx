import React from "react";
import { database } from "../firebase/firebase";

function SuccessPage() {
  return <div></div>;
}

export default SuccessPage;

export const getServerSideProps: any = async ({ query }) => {
  const { success, plan, uid } = query;

  if (success === "true" || success === true) {
    //she is a good one
    try {
      await database.collection("users").doc(uid).update({
        status: plan,
      });

      return {
        redirect: {
          permanent: true,
          destination: "/profile",
        },
        props: {},
      };
    } catch (e) {
      console.log(e);
      return {
        redirect: {
          permanent: true,
          destination: "/profile",
        },
        props: {},
      };
    }
  } else {
    return {
      redirect: {
        permanent: true,
        destination: "/profile",
      },
      props: {},
    };
  }
};
