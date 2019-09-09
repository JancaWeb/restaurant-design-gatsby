import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderWrapper = styled.div`
  background-color: #000;
  color: #d4d2cf;
  font-family: 'Open Sans Condensed';
  padding: 1rem;
  @media(min-width: 640px) {
    padding: 2rem;
  }
`;

export const HeaderItem = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  display: none;
  @media(min-width: 640px) {
    display: inline-block;
    font-size: 1.5rem;
    color: ${props => props.isActive ? '#fff' : 'inherit'};
    padding-bottom: 0.5rem;
    border-bottom: 3px solid ${props => props.isActive ? '#fff' : '#d4d2cf'};
    text-decoration: none;
    margin: 0 2rem;
    letter-spacing: 0.1em;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;

export const MobileHeaderItem = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 1rem;
  margin: -1rem 0;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  &:hover {
    color: #fff;
  }
`;

export const DropdownMobileWrapper = styled.div`
  display: block;
  @media(min-width: 640px) {
    display: none;
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleWrapperText = styled.p`
  font-size: 1.5rem;
`;

export const NavIcon = styled.div`
  margin: 1em;
  width: 30px;

  &:after, &:before, div {
    background-color: #fff;
    border-radius: 3px;
    content: '';
    display: block;
    height: 3px;
    margin: 4px 0;
  }
`;