import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/moviesApi';
import { ReviewsWrapper, ReviewsTitle, ReviewsDescr } from './Reviews.stytled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const result = await getMoviesReviews(movieId);
        setReviews(result.data.results);
      } catch (error) {
        throw new Error('Ooops... I did it again');
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ReviewsWrapper>
      {reviews.length === 0 ? (
        <h3>We don't have any reviews for this movie</h3>
      ) : (
        <ul>
          {reviews.map(el => {
            return (
              <li key={el.id}>
                <ReviewsTitle>Author: {el.author}</ReviewsTitle>
                <ReviewsDescr>{el.content}</ReviewsDescr>
              </li>
            );
          })}
        </ul>
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
