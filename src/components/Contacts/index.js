import React from 'react';

import { Input, Button } from 'reactstrap';

import { 
  ContactsTitle, 
  ContactsTitleWrapper, 
  MainWrapper,
  ContactsFormWrapper,
  AddressDescription,
  InputWrapper,
  StyledInput
} from './styled';

export const Contacts = () => (
  <MainWrapper>
    <ContactsTitleWrapper>
      <ContactsTitle>
        Контактная
      </ContactsTitle>
      <ContactsTitle>
        информация 
      </ContactsTitle>
    </ContactsTitleWrapper>
    <ContactsFormWrapper>
      <InputWrapper>
        <StyledInput type="text" placeholder="Ваше Имя"/>
        <StyledInput type="text" placeholder="Ваш Емайл"/>
        <Input type="textarea" rows={5} placeholder="Собшение"/>
        <Button color="primary">Отослать</Button>
      </InputWrapper>
      <div>
        <AddressDescription>Кухня</AddressDescription>
        <AddressDescription>Россия</AddressDescription>
        <AddressDescription>15035, у л. Балчуг, 7</AddressDescription>
        <AddressDescription>Тел.: +7(495) 000 00 00</AddressDescription>
        <AddressDescription>info@mysite.com</AddressDescription>
      </div>
    </ContactsFormWrapper>
  </MainWrapper> 
);