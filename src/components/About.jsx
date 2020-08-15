import React, {useRef, useEffect} from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  background: #f9f9fc;
  h1 {
    position: relative;
    margin: 15px 0 30px;
    text-align: center;
    font-size: 3rem;
    /* color: #2196f3; */
    /* text-shadow: 15px 15px 3px rgba(0, 0, 0, 0.5); */
    &::before {
      content: "";
      width: 200px;
      height: 5px;
      background: #000;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  .about__values {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 0 20px;
    .about__value {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 235px;
      padding: 15px;
      background: white;
      border: 1px solid #d9dfeb;
      border-radius: 0.28571429rem;
      img {
        height: 100px;
        object-fit: contain;
      }
    }
  }
  .about__container {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .about__profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 420px;
    padding: 15px;
    background: #fff;
    border: 1px solid #d9dfeb;
    border-radius: 0.28571429rem;
    .about__belt {
      position: absolute;
      top: 0px;
      right: 0px;
      border-top: 70px solid red;
      border-right: 70px solid red;
      border-bottom: 70px solid transparent;
      border-left: 70px solid transparent;
      border-top-right-radius: 0.28571429rem;
      &.--transparent {
        border-top: 60px solid #fff;
        border-right: 60px solid #fff;
        border-bottom: 60px solid transparent;
        border-left: 60px solid transparent;
        border-top-right-radius: 0.25rem;
      }
    }
    .about__profilePhoto {
      height: 140px;
      object-fit: contain;
    }
    img {
      height: 100px;
      object-fit: contain;
    }
    p {
    }
    .about__personality {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
    }
  }
  .about__teches {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 620px;
    padding: 15px;
    border: 1px solid #d9dfeb;
    border-radius: 0.28571429rem;
    background: #fff;
    .about__tech {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 160px;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 100%;
        font-size: 6rem;
        border-radius: 100%;
      }
      p {
        flex: 1;
      }
      img {
        width: 100px;
        object-fit: contain;
      }
      &:last-child {
        overflow-x: scroll;
      }
      &.--slidebar::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

function About({offset, setOffset}) {
  const about = useRef(null);

  useEffect(() => {
    setOffset({about: about.current.offsetTop});
  }, []);
  return (
    <AboutWrapper className="about" ref={about}>
      <h1>ABOUT</h1>
      <ul className="about__values container">
        <li className="about__value">
          <img src="/img/react.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            suscipit architecto reiciendis dicta! Odio, maxime?
          </p>
        </li>
        <li className="about__value">
          <img src="/img/react.png" alt="" />
          <p></p>
        </li>
        <li className="about__value">
          <img src="/img/react.png" alt="" />
          <p></p>
        </li>
        <li className="about__value">
          <img src="/img/react.png" alt="" />
          <p></p>
        </li>
      </ul>
      <div className="about__container container">
        <div className="about__profile">
          <div className="about__belt"></div>
          <div className="about__belt --transparent"></div>
          <img
            className="about__profilePhoto"
            src="/img/react.png"
            alt="profile"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae
            consectetur illum at asperiores blanditiis maxime atque reiciendis
            laudantium aliquam culpa ex, deleniti laborum vitae architecto
            perspiciatis aspernatur autem mollitia.
          </p>
          <div className="about__personality">
            <img src="/img/react.png" alt="" />
            <p>test test est</p>
          </div>
          <div className="about__personality">
            <img src="/img/react.png" alt="" />
            <p>test test est</p>
          </div>
          <div className="about__personality">
            <img src="/img/react.png" alt="" />
            <p>test test est</p>
          </div>
        </div>

        <div className="about__teches">
          <div className="about__tech">
            <i className="fab fa-js"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              rerum ullam harum facilis
            </p>
          </div>
          <div className="about__tech">
            <i className="fab fa-react"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              rerum ullam harum facilis
            </p>
          </div>
          <div className="about__tech">
            <i className="fab fa-github"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              rerum ullam harum facilis
            </p>
          </div>
          <div className="about__tech --slidebar">
            <img src="/img/react.png" alt="" />
            <img src="/img/react.png" alt="" />
            <img src="/img/react.png" alt="" />
            <img src="/img/react.png" alt="" />
            <img src="/img/react.png" alt="" />
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
