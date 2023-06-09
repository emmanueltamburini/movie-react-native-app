export const API_BASE_URL: string = 'https://api.themoviedb.org/3/movie';
export const NOW_PLAYING_PATH: string = '/now_playing';
export const POPULAR: string = '/popular';
export const TOP_RATED: string = '/top_rated';
export const UPCOMING: string = '/upcoming';
export const DETAILS: (id: number) => string = id => `/${id}`;
export const CREDITS: (id: number) => string = id => `${DETAILS(id)}/credits`;
