import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {NOW_PLAYING_PATH, POPULAR, TOP_RATED, UPCOMING} from '../constant/path';
import {MovieDBResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async (): Promise<void> => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>(NOW_PLAYING_PATH);
    const popularPromise = movieDB.get<MovieDBResponse>(POPULAR);
    const topRatedPromise = movieDB.get<MovieDBResponse>(TOP_RATED);
    const upcomingPromise = movieDB.get<MovieDBResponse>(UPCOMING);

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {...moviesState, isLoading};
};
