import styled from 'styled-components';

export const Container = styled.div`
  max-width: 95%;

  margin: 0 auto;
  padding-top: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CardItem = styled.li`
  width: 298px;

  overflow: hidden;

  background: rgba(255, 255, 255, 0.78);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.57);
`;

export const ImgWrapper = styled.div`
  height: 447px;

  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 100%;

  object-fit: cover;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;

  text-align: center;

  padding: 20px;

  color: #000;
`;
