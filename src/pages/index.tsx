import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { State, wrapper } from "../redux/store";
import { useEffect } from "react";
import { actions } from "../redux/actions";
import { AnyAction } from "redux";
import Row from "../Components/Row/Row";
import requests from "../tmdb";

function Home({ mutter }) {
  const state = useSelector<State, State>((state) => state);
  const dispatch: any = useDispatch();

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  useEffect(() => {
    dispatch(actions.updateTick("helly"));
  }, []);

  return (
    <div className={"app"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row
          title={"Trending"}
          movieUrl={requests.fetchTrending}
          largeImage={true}
        />
        <Row
          title={"NETFLIX ORIGINALS"}
          movieUrl={requests.fetchNetflixOriginals}
        />
        <Row title={"Top Rated"} movieUrl={requests.fetchTopRated} />
        <Row title={"Action Movies"} movieUrl={requests.fetchActionMovies} />
        <Row title={"Comedy Movies"} movieUrl={requests.fetchComedyMovies} />
        <Row title={"Horror Movies"} movieUrl={requests.fetchHorrorMovies} />
        <Row title={"Romance"} movieUrl={requests.fetchRomanceMovies} />
        <Row title={"Documentaries"} movieUrl={requests.fetchDocumentaries} />
      </main>
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
