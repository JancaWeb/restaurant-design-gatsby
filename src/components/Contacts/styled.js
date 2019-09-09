import styled from 'styled-components';
import { Input } from 'reactstrap';

import mainImage from '../../images/mainImage.jpg';

export const ContactsTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 10px;
  color: #000;
  font-weight: bold;
  @media(min-width: 640px) {
    font-size: 3rem;
    padding: 0 5rem;
  }
`;

export const ContactsTitleWrapper = styled.div`
  padding: 1rem;
  background-color: #f5f0ed;
  width: 90%;
  opacity: 0.7;
  margin: auto;
  @media(min-width: 640px) {
    margin-left: 10%;
    width: fit-content;
  }
`;

export const MainWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${mainImage});
  padding-bottom: 1rem;
  @media(min-width: 640px) {
    padding: 2rem;
  }
`;

export const ContactsFormWrapper = styled.div`
  background-color: #d9cfce;
  width: 90%;
  margin: 2rem auto 0 auto;
  padding: 3rem 1rem;
  @media(min-width: 640px) {
    display: flex;
    justify-content: space-around;  
    width: 80%;
  }
`; 

export const AddressDescription = styled.p`
  font-size: 1rem;
  letter-spacing: 5px;
  font-weight: bold;
  margin-top: 1rem;
  @media(min-width: 640px) {
    font-size: 1.5rem;
    letter-spacing: 10px;
    margin-top: 0;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  @media(min-width: 640px) {
    width: 50%;
  }
  
  button {
    margin-top: 1rem;
    width: 5rem;
  }
`;

export const StyledInput = styled(Input)`
  width: 90%;
  margin-bottom: 1rem;
  @media(min0-width: 640px) {
    width: 70%;
  }
`;