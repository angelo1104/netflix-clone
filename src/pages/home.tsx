import { useSelector } from "react-redux";
import { State, wrapper } from "../redux/store";
import { useEffect } from "react";
import { actions } from "../redux/actions";
import { AnyAction } from "redux";
import Row from "../Components/Row/Row";
import requests from "../tmdb";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/NavBar/Navbar";
import { NextRouter, useRouter } from "next/router";
import Footer from "../Components/Footer/Footer";

function Home() {
  const { user } = useSelector<State, State>((state) => state);
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (!user) router.replace("/");
  }, [user]);

  return (
    <div className={"app"}>
      <main>
        <Navbar />

        <Banner />

        <div className={"content-netflix"}>
          <div className={"footer-gradient"}></div>
          <Row
            title={"NETFLIX ORIGINALS"}
            movieUrl={requests.fetchNetflixOriginals}
            largeImage={true}
          />
          <Row title={"Trending"} movieUrl={requests.fetchTrending} />
          <Row title={"Top Rated"} movieUrl={requests.fetchTopRated} />
          <Row title={"Action Movies"} movieUrl={requests.fetchActionMovies} />
          <Row title={"Comedy Movies"} movieUrl={requests.fetchComedyMovies} />
          <Row title={"Horror Movies"} movieUrl={requests.fetchHorrorMovies} />
          <Row title={"Romance"} movieUrl={requests.fetchRomanceMovies} />
          <Row title={"Documentaries"} movieUrl={requests.fetchDocumentaries} />
        </div>
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
