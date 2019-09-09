import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d4d2cf;
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
`;

export const FirstRowWrapper = styled.div`
  margin-top: 1rem;
  @media(min-width: 640px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const AnotherMealWrapper = styled.div`
  @media(min-width: 640px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  @media(min-width: 640px) {
    max-height: 12rem;
  }
  @media(min-width: 1280px) {
    height: 12rem;
  }
`;

export const StyledImageFirstRowWrapper = styled.div`
  text-align: center;
  display: block;
  @media(min-width: 640px) {
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const MealName = styled.p`
  font-size: 1.5rem;
`;

export const OpenMealButton = styled.button`
  font-size: 1rem;
  width: 50%;
  height: 1.5rem;
  margin: 0 auto;
  border: none;
  background-color: inherit;
  transition: font-size 0.3s ease-out;
  &:hover {
    border: 1px solid;
    cursor: pointer;
    font-size: 0.9rem;
    padding: -1px;
  }
`;

export const StyledImageAnotherMealWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  flex-basis: 30%;
`;

export const StyledImageAnotherMeal = styled.img`
  width: 100%;
  max-height: 15rem;
  @media(min-width: 1280px) {
    height: 15rem;
  }
`;