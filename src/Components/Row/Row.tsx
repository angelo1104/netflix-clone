import React, { useEffect, useState } from "react";
import styles from "./Row.module.scss";
import tmdbInstance from "../../axios/tmdbApi";
import YouTube from "react-youtube";
import { API_KEY } from "../../tmdb";

interface Props {
  title: string;
  movieUrl: string;
  largeImage?: boolean | null | undefined;
}

function Row({ title, movieUrl, largeImage }: Props): JSX.Element {
  const [movies, setMovies] = useState<Array<any>>([]);
  const [trailerUrl, setTrailerUrl] = useState<string>("");
  const [selectedMovieId, setSelectedMovieId] = useState<string>("");

  const baseUrl: string = "https://image.tmdb.org/t/p/original";

  const fetchUrl = async (url: string) => {
    try {
      const { data } = await tmdbInstance.get(url);
      return data.results;
    } catch (e) {
      return e;
    }
  };

  const getTrailer = async (movieId: string) => {
    try {
      const result = tmdbInstance.get(
        `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
      );
      console.log("res", result);
    } catch (e) {}
  };

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  useEffect(() => {
    fetchUrl(movieUrl)
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieUrl]);

  const onClick = async (movie: any) => {
    try {
      if (trailerUrl && selectedMovieId === movie.id) {
        setTrailerUrl("");
      } else {
        const url = await getTrailer(movie.id || "");
      }

      setSelectedMovieId(movie?.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.row}>
      <h2 className={styles.row_title}>{title}</h2>

      <div className={styles.row_posters}>
        {movies.map((movie, index) =>
          !largeImage ? (
            <img
              src={`${baseUrl}${
                largeImage ? movie?.poster_path : movie?.backdrop_path
              }`}
              key={index}
              alt={"movie image"}
              className={styles.row_poster}
              onClick={(event) => onClick(movie)}
            />
          ) : (
            <img
              src={`${baseUrl}${movie?.poster_path}`}
              alt="movie image"
              key={index}
              className={styles.row_poster_large}
              onClick={(event) => onClick(movie)}
            />
          )
        )}

        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={{
              height: "390",
              width: "100%",
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Row;
