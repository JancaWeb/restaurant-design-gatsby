import React from 'react';

import chefImage from '../../images/chef.png';
import { MainWrapper } from '../styled';

import {
  HomePageMealWrapper,
  ChefImage,
  HomePageTitleItem
} from './styled';

export const HomePage = () => (
  <MainWrapper>
    <HomePageMealWrapper>
      <HomePageTitleItem>Еда</HomePageTitleItem>
      <HomePageTitleItem>Вышего</HomePageTitleItem>
      <HomePageTitleItem>Сорта</HomePageTitleItem>
    </HomePageMealWrapper>
    <ChefImage src={chefImage} alt="chefImage" />
  </MainWrapper>
)