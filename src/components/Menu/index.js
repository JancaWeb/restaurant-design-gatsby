import React from "react";
import { Modal, ModalBody } from 'reactstrap';

import { MainWrapper, GrowWrapper } from "../styled";
import menuImage1 from "../../images/menuImage1.jpg";
import menuImage2 from "../../images/menuImage2.jpg";
import menuImage3 from "../../images/menuImage3.jpg";
import menuImage4 from "../../images/menuImage4.jpg";
import menuImage5 from "../../images/menuImage5.jpg";
import menuImage6 from "../../images/menuImage6.jpg";
import menuImage7 from "../../images/menuImage7.jpg";
import menuImage8 from "../../images/menuImage8.jpg";
import menuImage9 from "../../images/menuImage9.jpg";
import menuImage10 from "../../images/menuImage10.jpeg";

import {
  MenuWrapper,
  FirstRowWrapper,
  AnotherMealWrapper,
  StyledImage,
  StyledImageAnotherMeal,
  StyledImageFirstRowWrapper,
  MealName,
  OpenMealButton,
  StyledImageAnotherMealWrapper
} from "./styled";
import { Slider } from './Slider';

const firtsRowImages = [menuImage1, menuImage2, menuImage3, menuImage4];
const anotherMealImages = [menuImage5, menuImage6, menuImage7, menuImage8, menuImage9, menuImage10];

export const Menu = () => {
  const [ carouselIndex, setCarouselIndex ] = React.useState(-1);

  const handleOpenCarousel = (index) => () => setCarouselIndex(index);

  return (
    <>
      <Modal
        isOpen={carouselIndex >= 0}
        toggle={handleOpenCarousel(-1)}
        size="lg"
        centered={true}
      >
        <ModalBody>
          <Slider carouselIndex={carouselIndex} />
        </ModalBody>
      </Modal>
      <MainWrapper>
        <MenuWrapper>
          <FirstRowWrapper>
            {firtsRowImages.map((image, i) => (
              <StyledImageFirstRowWrapper key={i}>
                <GrowWrapper>
                  <StyledImage src={image} alt={`firstRowImage${i}`}/>
                </GrowWrapper>
                <MealName>
                  Описание
                </MealName>
                <OpenMealButton onClick={handleOpenCarousel(i)}>
                  Смотреть
                </OpenMealButton>
              </StyledImageFirstRowWrapper>
            ))}
          </FirstRowWrapper>
          <AnotherMealWrapper>
            {anotherMealImages.map((image, i) => (
              <StyledImageAnotherMealWrapper key={i}>
                <GrowWrapper>
                  <StyledImageAnotherMeal src={image} alt={`anotherMealImage${i}`} />
                </GrowWrapper>
                <MealName>
                  Описание
                </MealName>
                <OpenMealButton onClick={handleOpenCarousel((i + firtsRowImages.length))}>
                  Смотреть
                </OpenMealButton>
              </StyledImageAnotherMealWrapper>
            ))}
          </AnotherMealWrapper>
        </MenuWrapper>
      </MainWrapper>
    </>
  )
};
