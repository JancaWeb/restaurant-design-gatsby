import React from "react";
import Dropdown from "reactstrap/lib/Dropdown";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownToggle from "reactstrap/lib/DropdownToggle";

import {
  MobileHeaderItem,
  DropdownMobileWrapper,
  ToggleWrapper,
  ToggleWrapperText,
  NavIcon
} from "./styled";

const mobileHeaderData = [
  {
    link: "/",
    text: "Главная"
  },
  {
    link: "/menu",
    text: "Меню"
  },
  {
    link: "/main-chef",
    text: "Шеф-повар"
  },
  {
    link: "/contacts",
    text: "Контактная информация"
  }
];

export const HeaderMobile = () => {
  const [dropdownData, setDropdownData] = React.useState({
    isDropdownOpen: false,
    activeItem: "Главная"
  });

  const handleChangeDropdown = activeItem => () =>
    setDropdownData(prev => ({
      isDropdownOpen: !prev.isDropdownOpen,
      activeItem
    }));

  return (
    <DropdownMobileWrapper>
      <Dropdown
        isOpen={dropdownData.isDropdownOpen}
        toggle={handleChangeDropdown}
        active={true}
        size="lg"
      >
        <DropdownToggle color="primary" tag="span">
          <ToggleWrapper onClick={handleChangeDropdown(dropdownData.activeItem)}>
            <ToggleWrapperText>{dropdownData.activeItem}</ToggleWrapperText>
            <NavIcon>
              <div />
            </NavIcon>
          </ToggleWrapper>
        </DropdownToggle>
        <DropdownMenu>
          {mobileHeaderData.map(
            (item, i) =>
              item.text !== dropdownData.activeItem && (
                <MobileHeaderItem
                  key={i}
                  to={item.link}
                  onClick={handleChangeDropdown(item.text)}
                >
                  {item.text}
                </MobileHeaderItem>
              )
          )}
        </DropdownMenu>
      </Dropdown>
    </DropdownMobileWrapper>
  );
};
