import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {NOW_PLAYING_PATH} from '../constant/path';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const getMovies = async (): Promise<void> => {
    const response = await movieDB.get<MovieDBNowPlaying>(NOW_PLAYING_PATH);
    setNowPlayingMovies(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {nowPlayingMovies, isLoading};
};
