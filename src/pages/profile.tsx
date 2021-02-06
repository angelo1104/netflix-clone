import React from "react";
import { wrapper } from "../redux/store";
import nookies from "nookies";
import admin from "firebase-admin";
import account from "../firebase-account.json";
import Profile from "../Components/Profile/Profile";
import Footer from "../Components/Footer/Footer";

function ProfilePage() {
  return (
    <div>
      <Profile />
      <Footer />
    </div>
  );
}

export default ProfilePage;

// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     const cookie: any = nookies.get(context);
//     const { store, req, res, ...etc } = context;
//     const firebaseAdmin: any = admin.initializeApp({
//       credential: admin.credential.cert(account),
//     });
//
//     const { firebase }: object = cookie;
//
//     try {
//       const user = await firebaseAdmin.auth().verifyIdToken(firebase);
//
//       if (user) {
//         //she is signed in and hot
//         return {
//           props: {},
//         };
//       } else {
//         //she is not signed in but really hot
//         return {
//           redirect: {
//             permanent: false,
//             destination: "/auth/login",
//           },
//           props: {},
//         };
//       }
//     } catch (e) {
//       return {
//         redirect: {
//           permanent: false,
//           destination: "/auth/login",
//         },
//         props: {},
//       };
//     }
//   }
// );
