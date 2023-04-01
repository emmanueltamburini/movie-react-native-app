import {useEffect, useState, useRef} from 'react';
import movieDB from '../api/movieDB';
import {DETAILS, CREDITS} from '../constant/path';
import {MovieDetailsInterface} from '../interfaces/movieDetailsInterface';
import {MovieCredits, Cast} from '../interfaces/movieCreditsInterface';

interface MovieDefaultState {
  movieDetails?: MovieDetailsInterface;
  cast: Cast[];
}

interface Props {
  movieID: number;
}

export const useMoviesDetails = ({movieID}: Props) => {
  const id = useRef(movieID);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [movieDetailsState, setMovieDetailsState] = useState<MovieDefaultState>(
    {cast: [], movieDetails: undefined},
  );

  const getMovieDetails = async (): Promise<void> => {
    const movieDetailsPromise = await movieDB.get<MovieDetailsInterface>(
      DETAILS(id.current),
    );

    const movieCreditsPromise = await movieDB.get<MovieCredits>(
      CREDITS(id.current),
    );

    const response = await Promise.all([
      movieDetailsPromise,
      movieCreditsPromise,
    ]);

    setMovieDetailsState({
      movieDetails: response[0].data,
      cast: response[1].data.cast,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...movieDetailsState, isLoading};
};
