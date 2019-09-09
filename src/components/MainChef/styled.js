import styled from 'styled-components';

export const MainChefWrapper = styled.div`
  margin: 2rem 0;
  background-color: #f5f0ed;
  width: 80%;
`;

export const MainChefTitle = styled.h2`
  font-weight: normal;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 15px;
  padding: 1rem;
  @media(min-width: 640px) {
    font-size: 3rem;
  }
`;

export const MainChefWhiteDiv = styled.div`
  background-color: #fff;
  @media(min-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  width: 80%;
  margin: auto;
`; 

export const MainChefName = styled.h2`
  background-color: #f77839;
  font-size: 0.75rem;
  padding: 1rem;
  font-family: 'IBM Plex Serif', serif;
  @media(min-width: 640px) {
    font-size: 3rem;
    padding: 1rem 5rem;
  }
`;

export const MainChefImageWrapper = styled.div`
  margin-top: 1rem;
  @media(min-width: 640px) {
    margin-top: 0;
  }
`;

export const MainChefImage = styled.img`
  width: 100%;
`;

export const MainChefDescription = styled.div`
  width: 80%;
  font-size: 1.5rem;
  letter-spacing: 10px;
  padding: 3rem 0;
  margin: auto;
  @media(min-width: 640px) {
    border-top: 5px dashed;
    font-size: 3rem;
    letter-spacing: 15px;
    margin-top: 3rem;
  }
`;