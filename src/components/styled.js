import styled from 'styled-components';

import mainImage from '../images/mainImage.jpg';

export const MainWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${mainImage});
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GrowWrapper = styled.div`
  margin: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
`;