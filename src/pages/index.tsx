import { useSelector } from "react-redux";
import { State, wrapper } from "../redux/store";
import { useEffect } from "react";
import { actions } from "../redux/actions";
import { AnyAction } from "redux";
import Top from "../Components/Top/Top";
import { NextRouter, useRouter } from "next/router";
import Footer from "../Components/Footer/Footer";

function Home() {
  const { user } = useSelector<State, State>((state) => state);

  const router: NextRouter = useRouter();

  useEffect(() => {
    if (user) router.replace("/home");
  }, [user]);

  return (
    <div className={"app"}>
      <main>
        <Top />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, req, res, ...etc }) => {
    console.log("2. Page.getServerSideProps uses the store to dispatch things");
    store.dispatch(actions.updateTick("Server pagey") as AnyAction);
    return {
      props: {
        mutter: "mutter",
      },
    };
  }
);

export default Home;
