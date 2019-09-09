import React from 'react';
import { Location } from '@reach/router';

import { HeaderMobile } from './HeaderMobile';
import { 
  HeaderWrapper,
  HeaderItem
} from './styled';

export const Header = () => (
  <HeaderWrapper>
    <HeaderMobile />
    <Location>
      {({location : pathname}) => [
        <HeaderItem to="/" isActive={pathname === '/'}>Главная</HeaderItem>,
        <HeaderItem to="/menu" isActive={pathname === '/menu'}>Меню</HeaderItem>,
        <HeaderItem to="/main-chef" isActive={pathname === '/main-chef'}>Шеф-повар</HeaderItem>,
        <HeaderItem to="/contacts" isActive={pathname === '/contacts'}>Контактная информация</HeaderItem>,
      ]}
    </Location>
  </HeaderWrapper>
);
