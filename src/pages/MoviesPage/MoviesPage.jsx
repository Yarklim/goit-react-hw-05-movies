import { getMoviesQuery } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { NotFound } from 'components/NotFound/NotFound';
import { Container } from '../HomePage/HomePage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movies');

  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      if (!query) return;

      try {
        const result = await getMoviesQuery(query);
        setMovies(result.data.results);
      } catch (error) {
        throw new Error('Ooops... I did it again');
      }
    };
    getMovies();
  }, [query]);
	
  return (
    <Container>
      <Searchbar setSearch={setSearchParams} />
      {movies.length > 0 && (
        <MoviesList data={movies} pathTo="" location={location} />
      )}
      {query && movies.length === 0 && <NotFound />}
    </Container>
  );
};

export default MoviesPage;
