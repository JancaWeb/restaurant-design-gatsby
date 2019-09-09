import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding: 1rem;
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  @media(min-width: 640px) {
    font-size: 1.5rem;
  }
`;