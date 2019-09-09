import React from "react";

import menuImage1 from "../../../images/menuImage1.jpg";
import menuImage2 from "../../../images/menuImage2.jpg";
import menuImage3 from "../../../images/menuImage3.jpg";
import menuImage4 from "../../../images/menuImage4.jpg";
import menuImage5 from "../../../images/menuImage5.jpg";
import menuImage6 from "../../../images/menuImage6.jpg";
import menuImage7 from "../../../images/menuImage7.jpg";
import menuImage8 from "../../../images/menuImage8.jpg";
import menuImage9 from "../../../images/menuImage9.jpg";
import menuImage10 from "../../../images/menuImage10.jpeg";

import {
  SliderImage,
  SliderImageWrapper,
  CarouselWrapper,
  LeftArrow,
  RightArrow,
  ImageWrapper,
  ArrowContainer,
  MealDescription
} from "./styled";

const images = [
  menuImage1,
  menuImage2,
  menuImage3,
  menuImage4,
  menuImage5,
  menuImage6,
  menuImage7,
  menuImage8,
  menuImage9,
  menuImage10
];

export const Slider = ({ carouselIndex }) => {
  const [ activeIndex, setActiveIndex ] = React.useState(carouselIndex);

  return (
    <CarouselWrapper>
      {images.map((img, i) => (
        <SliderImageWrapper isActive={i === activeIndex} key={i}>
          {activeIndex > 0 && 
            <ArrowContainer onClick={() => setActiveIndex(prev => prev - 1)}>
              <LeftArrow />
            </ArrowContainer>
          }
          <ImageWrapper>
            <SliderImage src={img} alt={`sliderImage${i}`} />
            <MealDescription>
              Описание блюда
            </MealDescription>
          </ImageWrapper>
          {activeIndex !== images.length - 1 && 
            <ArrowContainer onClick={() => setActiveIndex(prev => prev + 1)}>
              <RightArrow />
            </ArrowContainer>
          }
        </SliderImageWrapper>
      ))}
    </CarouselWrapper>
  );
};
