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
  width: 100%;
  padding: 15px 300px;
  background: #1b242f;
  color: #fff;
  z-index: 100;
  ul {
    display: flex;
  }
  .nav__navigators {
    cursor: default;
    li {
      margin-right: 25px;
      font-size: 1.15rem;
    }
  }
  .nav__links {
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
        <li>WHAT ELSE?</li>
      </ul>
      <ul className="nav__links">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li>
          <FontAwesomeIcon icon={faMobileAlt} />
        </li>
        <li>
          <i className="fab fa-github"></i>
        </li>
        <li>
          <i className="fab fa-vimeo-v"></i>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
