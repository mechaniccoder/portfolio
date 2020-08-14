import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  background: #f9f9fc;
  h1 {
    margin: 15px 0 30px;
    text-align: center;
    font-size: 4rem;
    /* color: #2196f3; */
    /* text-shadow: 15px 15px 3px rgba(0, 0, 0, 0.5); */
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
    height: 100%;
    padding: 15px;
    background: #fff;
    .about__belt {
      position: absolute;
      top: 0;
      right: 0;
      border-top: 70px solid red;
      border-right: 70px solid red;
      border-bottom: 70px solid transparent;
      border-left: 70px solid transparent;
      &.--transparent {
        border-top: 60px solid #fff;
        border-right: 60px solid #fff;
        border-bottom: 60px solid transparent;
        border-left: 60px solid transparent;
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
    width: 650px;
    height: 100%;
    .about__tech {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 160px;
      background: #fff;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 100%;
        font-size: 6rem;
        border-radius: 100%;
        &.fa-js {
        }
        &.fa-react {
          color: #63dbfb;
        }
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

function About() {
  return (
    <AboutWrapper className="about">
      <h1>ABOUT</h1>
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
            <i class="fab fa-js"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              rerum ullam harum facilis
            </p>
          </div>
          <div className="about__tech">
            <i class="fab fa-react"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              rerum ullam harum facilis
            </p>
          </div>
          <div className="about__tech">
            <i class="fab fa-github"></i>
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
