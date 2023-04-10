import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  font-size: 32px;

  color: #272727;

  padding: 100px 20px 0 20px;
`;

export const BtnBack = styled.button`
  padding: 10px 30px;
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 18px;

  border-radius: 8px;
  background-color: #602d2d;
`;

export const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const PosterImg = styled.img`
  width: 298px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Descr = styled.div`
  /* width: 500px; */

  padding: 0 20px 0 20px;

  color: #fff;

  background: rgba(95, 8, 8, 0.83);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(95, 8, 8, 0.3);
`;

export const DescrTitle = styled.h2`
  font-size: 44px;

  margin-bottom: 10px;
`;

export const Overview = styled.h3`
  margin: 10px 0 10px 0;
`;

export const Text = styled.p`
  font-size: 24px;
`;

export const GenresTitle = styled.h3`
  margin: 10px 0 10px 0;
`;

export const AditionalWrapper = styled.div`
  text-align: center;
`;

export const AditionalTitle = styled.h3`
  margin: 10px 0 10px 0;

  color: #f1830c;
`;

export const LinkWrapper = styled.ul`
	display: flex;
	justify-content: center;
	gap: 60px;
`

export const ActiveNavLink = styled(NavLink)`

  color: #fff;

  &.active {
    color: #f08e0e;

    text-decoration: underline;
  }
`;
