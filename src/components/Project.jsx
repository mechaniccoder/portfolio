import React, {useState} from "react";
import styled from "styled-components";
import Modal from "./lib/Modal";

const projectsList = [
  {
    id: 1,
    name: "프로젝트 이름",
    description: "프로젝트 설명입니다.",
    techs: ["javascript", "node.js"],
    img:
      "https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/330j/image/fqlpwRlRhW2x_4e_SX6M7dm2P4Y.png",
  },
  {
    id: 1,
    name: "프로젝트 이름",
    description: "프로젝트 설명입니다.",
    techs: ["javascript", "node.js"],
    img:
      "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 1,
    name: "프로젝트 이름",
    description: "프로젝트 설명입니다.",
    techs: ["javascript", "node.js"],
    img:
      "https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/330j/image/fqlpwRlRhW2x_4e_SX6M7dm2P4Y.png",
  },
  {
    id: 1,
    name: "프로젝트 이름",
    description: "프로젝트 설명입니다.",
    techs: ["javascript", "node.js"],
    img:
      "https://t4.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/330j/image/fqlpwRlRhW2x_4e_SX6M7dm2P4Y.png",
  },
];

const ProjectWrapper = styled.section`
  padding: 60px;
  background: #1b242f;
  h1 {
    position: relative;
    margin: 15px 0 30px;
    text-align: center;
    font-size: 3rem;
    color: #fff;
    &::before {
      content: "";
      width: 200px;
      height: 5px;
      background: #fff;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  .project__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .project__gridWrapper {
    width: 800px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    > .project__gridItem {
      position: relative;
      width: 390px;
      height: 300px;
      overflow: hidden;

      &:hover {
        .gridItem__img {
          opacity: 0;
        }
        .gridItem__text {
          top: 30px;
          opacity: 1;
        }
        .gridItem__btn {
          bottom: 30px;
          opacity: 1;
        }
      }
      .gridItem__img {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        transition: opacity 0.3s;
      }
      .gridItem__text {
        position: absolute;
        top: -100px;
        left: 50%;
        text-align: center;
        transform: translateX(-50%);
        transition: all 0.3s;
        h3 {
          font-size: 1.5rem;
          color: #fff;
        }
        span {
          font-size: 1.2rem;
          color: #e31b6d;
        }
      }
      .gridItem__btn {
        position: absolute;
        bottom: -100px;
        left: 50%;
        padding: 3px 10px;
        transform: translateX(-50%);
        transition: all 0.3s;
        background: #1b242f;
        border: 2px solid #fff;
        color: #fff;
        outline: none;
        font-size: 1.2rem;
        &:hover {
          background: #e31b6d;
          border: 2px solid #e31b6d;
          color: #fff;
        }
      }
    }
  }
`;

function Project() {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    setShowModal(true);
  };

  return (
    <ProjectWrapper className="project">
      <h1>PROJECT</h1>
      <div className="project__container container">
        <div className="project__gridWrapper">
          {projectsList.map((project) => (
            <>
              <div className="project__gridItem">
                <div
                  className="gridItem__img"
                  style={{
                    backgroundImage: `url(${project.img})`,
                  }}
                ></div>
                <div className="gridItem__text">
                  <h3>{project.name}</h3>
                  <span>{project.description}</span>
                </div>
                <button className="gridItem__btn" onClick={handleOnClick}>
                  View
                </button>
              </div>
              {showModal && (
                <Modal project={project} setShowModal={setShowModal} />
              )}
            </>
          ))}
        </div>
      </div>
    </ProjectWrapper>
  );
}

export default Project;
