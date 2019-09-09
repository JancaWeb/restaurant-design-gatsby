import React from "react";

import { MainWrapper } from "../styled";
import mainChefImage from "../../images/mainChef.png";

import {
  MainChefWrapper,
  MainChefTitle,
  MainChefWhiteDiv,
  MainChefName,
  MainChefImage,
  MainChefImageWrapper,
  MainChefDescription
} from "./styled";

export const MainChef = () => (
  <MainWrapper>
    <MainChefWrapper>
      <MainChefTitle>Наш Повар</MainChefTitle>
      <MainChefWhiteDiv>
        <MainChefName>Повар - Антонио Бордесс</MainChefName>
        <MainChefImageWrapper>
          <MainChefImage src={mainChefImage} alt="mainChefImage" />
        </MainChefImageWrapper>
      </MainChefWhiteDiv>
      <MainChefDescription>
        Написать о поваре и команде, о подходе к работе
      </MainChefDescription>
    </MainChefWrapper>
  </MainWrapper>
);
