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

// export const getServerSideProps = wrapper.getServerSideProps(
//     ({store, req, res, ...etc}) => {
//         console.log('2. Page.getServerSideProps uses the store to dispatch things');
//         store.dispatch({type: 'TICK', payload: 'was set in other page'});
//     }
// );
