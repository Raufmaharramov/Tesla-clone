import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <HideMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </HideMenu>
        <a onClick={() => setBurgerStatus(true)} href="#">
          Menu
        </a>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              {" "}
              <a key={index} href="#">
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between; // adds space between items
  padding: 0 20px;
  top: 0; //will stick it to the top
  left: 0; //will stick it to the left
  right: 0; //will stick it to the left so it will be streched from left and right
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a:hover {
    background-color: #5c7b85;
    border-radius: 12px;
    box-shadow: 0 0 0px 4px #5c7b85;
  }
  a {
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// this menu will disapear
const HideMenu = styled.div`
  display: flex;
  align-items: center;
  a:hover {
    background-color: #5c7b85;
    border-radius: 12px;
    box-shadow: 0 0 0px 4px #5c7b85;
  }
  a {
    font-weight: 400;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 14px;
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a:hover {
    background-color: #5c7b85;
    border-radius: 12px;
    box-shadow: 0 0 0px 4px #5c7b85;
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 13px;
    padding: 0 15px;
  }
`;

const BurgerNav = styled.div`
  position: fixed; // because its always on the top but where >>>
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start; // this makes burger menu items to start from the left side
  // translateX checks if state is false shows nothing otherwise shows burgermenu
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;

    a {
      font-weight: 400;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  // these lines will place close(X) button to the right end of burgernav
  display: flex;
  justify-content: flex-end;
`;
