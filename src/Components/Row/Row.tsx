import React, { useEffect, useState } from "react";
import styles from "./Row.module.scss";
import tmdbInstance from "../../axios/tmdbApi";

function Row({ title, movieUrl, largeImage }): JSX.Element {
  const [movies, setMovies] = useState([]);
  const baseUrl: string = "https://image.tmdb.org/t/p/original";

  const fetchUrl = async (url: string) => {
    try {
      const { data }: Array<any> = await tmdbInstance.get(url);
      return data.results;
    } catch (e) {
      return e;
    }
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

  return (
    <div className={styles.row}>
      <h2 className={styles.row_title}>{title}</h2>

      <div className={styles.row_posters}>
        {movies.map((movie, index) =>
          !largeImage ? (
            <img
              src={`${baseUrl}${
                largeImage ? movie.poster_path : movie.backdrop_path
              }`}
              key={index}
              alt={"movie image"}
              className={styles.row_poster}
            />
          ) : (
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt="movie image"
              key={index}
              className={styles.row_poster_large}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Row;
