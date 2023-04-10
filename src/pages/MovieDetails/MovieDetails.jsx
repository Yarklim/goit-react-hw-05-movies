import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMoviesDetails } from 'services/moviesApi';
import noImg from '../../assets/no-image.jpg';
import {
  Container,
  BtnBack,
  LinkBtn,
  Wrapper,
  Descr,
  PosterImg,
  DescrTitle,
  Overview,
  Text,
  GenresTitle,
  AditionalWrapper,
  AditionalTitle,
  LinkWrapper,
  ActiveNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  const location = useLocation();
  const goBackBtn = location.state?.from ?? '/';
  const saveBackBtn = useRef(goBackBtn);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const result = await getMoviesDetails(movieId);
        setDetails(result.data);
      } catch (error) {
        throw new Error('Ooops... I did it again');
      }
    };
    getDetails();
  }, [movieId]);

  const getYear = new Date(details.release_date).getFullYear();

  return (
    <Container>
      <BtnBack type="button">
        <LinkBtn to={saveBackBtn.current}>Go Back</LinkBtn>
      </BtnBack>
      <Wrapper>
        <PosterImg
          src={
            details.poster_path
              ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
              : noImg
          }
          alt={details.title}
        />
        <Descr>
          <DescrTitle>{`${details.title} (${getYear})`}</DescrTitle>
          <p>User score: {(details.vote_average * 10).toFixed(0)}%</p>
          <Overview>Overview</Overview>
          <Text>{details.overview}</Text>
          <GenresTitle>Genres</GenresTitle>
          <Text>{details.genres?.map(el => el.name).join(' ')}</Text>

          <AditionalWrapper>
            <AditionalTitle>Additional information</AditionalTitle>
            <LinkWrapper>
              <ActiveNavLink to={`/movies/${movieId}/cast`} state={goBackBtn}>
                Cast
              </ActiveNavLink>
              <ActiveNavLink
                to={`/movies/${movieId}/reviews`}
                state={goBackBtn}
              >
                Reviews
              </ActiveNavLink>
            </LinkWrapper>
          </AditionalWrapper>
        </Descr>
      </Wrapper>

      <Outlet />
    </Container>
  );
};

export default MovieDetails;
