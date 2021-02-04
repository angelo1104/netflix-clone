import React, { useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import tmdbInstance from "../../axios/tmdbApi";
import requests from "../../tmdb";

function Banner(): JSX.Element {
  const [movie, setMovie] = useState<any>({});
  const baseUrl: string = "https://image.tmdb.org/t/p/original";

  const fetchUrl = async (url: string) => {
    try {
      const { data }: Array<any> = await tmdbInstance.get(url);
      return data.results;
    } catch (e) {
      return e;
    }
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    fetchUrl(requests.fetchNetflixOriginals)
      .then((movie) => {
        const index: number = getRandomInt(0, 19);
        setMovie(movie[index]);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const truncateString = (string: string, maxLength: number = 50): string => {
    if (!string) return "";
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  return (
    <header
      className={styles.banner}
      style={{
        background: `url(${baseUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className={styles.banner_content}>
        <h1 className={styles.banner_title}>
          {movie?.title ||
            movie?.name ||
            movie?.originalName ||
            movie?.originalTitle}
        </h1>

        <p className={styles.banner_desc}>
          {truncateString(movie?.overview, 150)}
        </p>

        <div className={styles.banner_buttons}>
          <button className={styles.banner_button}>Play</button>
          <button className={styles.banner_button}>My List</button>
        </div>
      </div>

      <div className={styles.banner_gradient}></div>

      <div className={styles.footer_gradient}></div>
    </header>
  );
}

export default Banner;
