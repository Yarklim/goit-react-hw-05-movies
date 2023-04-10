import { Container, NotFounImg } from './NotFound.styled';
import notFound from '../../assets/funny-404-page.jpg';

export const NotFound = () => {
  return (
    <Container>
      <NotFounImg src={notFound} alt='movies not found'/>
    </Container>
  );
};
