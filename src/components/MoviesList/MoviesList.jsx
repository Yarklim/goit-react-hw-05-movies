import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  List,
  CardItem,
  ImgWrapper,
  CardImg,
  CardTitle,
} from './MoviesList.styled';
import noImg from '../../assets/no-image.jpg';

export const MoviesList = ({ data, pathTo, location }) => {
  return (
    <Container>
      <List>
        {data.map(({ title, id, poster_path }) => {
          return (
            <CardItem key={id}>
              <NavLink to={`${pathTo}${id}`} state={{ from: location }}>
                <ImgWrapper>
                  <CardImg
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : noImg
                    }
                    alt={title}
                    width={298}
                    height={447}
                  />
                </ImgWrapper>
                <CardTitle>{title}</CardTitle>
              </NavLink>
            </CardItem>
          );
        })}
      </List>
    </Container>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathTo: PropTypes.string.isRequired,
  location: PropTypes.object,
};
