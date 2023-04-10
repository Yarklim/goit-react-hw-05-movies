import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'services/moviesApi';
import noImg from '../../assets/no-image.jpg';
import {
  CastWrapper,
  List,
  CardItem,
  ImgWrapper,
  CardImg,
  CardTitle,
  CardDescr,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCastDetails = async () => {
      try {
        const result = await getMoviesCredits(movieId);
        setCast(result.data.cast);
      } catch (error) {
        throw new Error('Ooops... I did it again');
      }
    };
    getCastDetails();
  }, [movieId]);

  return (
    <CastWrapper>
      <List>
        {cast.map(el => {
          return (
            <CardItem key={el.id}>
              <ImgWrapper>
                <CardImg
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                      : noImg
                  }
                  alt={el.name}
                />
                <CardTitle>{el.name}</CardTitle>
                <CardDescr>Character: {el.character}</CardDescr>
              </ImgWrapper>
            </CardItem>
          );
        })}
      </List>
    </CastWrapper>
  );
};

export default Cast;
