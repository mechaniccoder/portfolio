import React, {useState} from "react";
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
  &.home {
    .nav__navigators li:first-child {
      color: #e31b6d;
    }
    .nav__navigators li:first-child::before {
      background: #e31b6d;
      width: 43px;
    }
  }
  &.about {
    .nav__navigators li:nth-child(2) {
      color: #e31b6d;
    }
    .nav__navigators li:nth-child(2)::before {
      background: #e31b6d;
      width: 43px;
    }
  }
  &.project {
    .nav__navigators li:nth-child(3) {
      color: #e31b6d;
    }
    .nav__navigators li:nth-child(3)::before {
      background: #e31b6d;
      width: 43px;
    }
  }

  .nav__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
  }
  .nav__navigators {
    cursor: default;
    li {
      position: relative;
      margin-right: 25px;
      font-size: 1.15rem;
      font-weight: 600;
      transition: 0.3s;
      &:hover {
        color: #e31b6d;
      }
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        width: 0px;
        height: 2px;
        background: #fff;
        transform: translateX(-50%);
        transition: 0.3s;
      }
    }
  }
  .nav__links {
    position: relative;
    li {
      padding: 0 30px;
      text-align: right;
      font-size: 1.3rem;
      &#velog {
        padding-right: 0;
      }
    }
    .links__popUp {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: calc(100% + 15px);
      width: 100%;
      padding: 10px 0;
      border-radius: 8px;
      background: #e31b6d;
    }
  }
`;

function Nav({offset}) {
  const {main, about, project} = offset;
  const [currentScroll, setCurrentScroll] = useState("home");
  const [iconContent, setIconContent] = useState("");

  document.addEventListener("scroll", () => {
    if (window.scrollY < about - 100) {
      setCurrentScroll("home");
    } else if (
      about - 100 <= window.scrollY &&
      window.scrollY <= project - 200
    ) {
      setCurrentScroll("about");
    } else {
      setCurrentScroll("project");
    }
  });

  const handleOnClick = (e) => {
    const menuName = e.target.dataset.menu;

    switch (menuName) {
      case "home":
        window.scrollTo({top: main});
        break;
      case "about":
        window.scrollTo({top: about});
        break;
      case "project":
        window.scrollTo({top: project});
        break;
      default:
        break;
    }
  };

  const handleMouseOver = (e) => {
    const iconName = e.target.dataset.icon;

    switch (iconName) {
      case "email":
        setIconContent("yuseunghwan94@gmail.com");
        break;
      case "phone":
        setIconContent("010-4118-9826");
        break;
      case "github":
        setIconContent("github.com/mechaniccoder");
        break;
      case "velog":
        setIconContent("velog.io/@y1andyu");
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = () => {
    setIconContent("");
  };

  return (
    <NavWrapper
      className={`
      nav 
      ${currentScroll === "home" && "home"} 
      ${currentScroll === "about" && "about"} 
      ${currentScroll === "project" && "project"}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav__container container">
        <ul className="nav__navigators">
          <li data-menu="home" onClick={handleOnClick}>
            HOME
          </li>
          <li data-menu="about" onClick={handleOnClick}>
            ABOUT
          </li>
          <li data-menu="project" onClick={handleOnClick}>
            PROJECT
          </li>
          {/* <li data-menu="else" onClick={handleOnClick}>
          WHAT ELSE?
        </li> */}
        </ul>
        <ul className="nav__links">
          <li
            data-icon="email"
            onMouseOver={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <li
            data-icon="phone"
            onMouseOver={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={faMobileAlt} />
          </li>
          <li
            data-icon="github"
            onMouseOver={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
          >
            <i className="fab fa-github"></i>
          </li>
          <li
            id="velog"
            data-icon="velog"
            onMouseOver={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
          >
            <i className="fab fa-vimeo-v"></i>
          </li>
          {iconContent && (
            <div className="links__popUp" onMouseLeave={handleMouseLeave}>
              {iconContent}
            </div>
          )}
        </ul>
      </div>
    </NavWrapper>
  );
}

export default Nav;
