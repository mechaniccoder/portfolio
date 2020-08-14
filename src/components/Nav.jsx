import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobileAlt} from "@fortawesome/free-solid-svg-icons";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: calc(100% - 17px);
  padding: 15px 20px;
  color: #fff;
  z-index: 100;
  ul {
    display: flex;
  }
  ul.nav__navigators {
    li {
      margin-right: 25px;
      font-size: 1.15rem;
    }
  }
  ul.nav__links {
    li * {
      font-size: 1.3rem;
      margin-left: 30px;
    }
  }
`;

function Nav() {
  return (
    <NavWrapper className="nav">
      <ul className="nav__navigators">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECT</li>
        <li>What else?</li>
      </ul>
      <ul className="nav__links">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li>
          <FontAwesomeIcon icon={faMobileAlt} />
        </li>
        <li>
          <i class="fab fa-github"></i>
        </li>
        <li>
          <i class="fab fa-vimeo-v"></i>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
