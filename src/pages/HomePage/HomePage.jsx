import { getTrending } from 'services/moviesApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const result = await getTrending();
      setMovies(result.data.results);
    };
    getMovies();
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <MoviesList data={movies} pathTo="movies/" location={location} />
    </Container>
  );
};

export default HomePage;
