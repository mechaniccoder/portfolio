import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Modal from "./lib/Modal";

const projectsList = [
  {
    id: 1,
    name: "달채비",
    description:
      "유저의 설문조사 데이터로 유저를 16개의 타입으로 분류합니다. 제품에 할당한 4가지 항목으로 타입별 가중치를 계산해서 유저에게 가장 잘 맞는 제품이 무엇인지 추천해주는 서비스 웹입니다. 풀스택 업무를 수행했으며 반응형 디자인, UI/UX 개발, Django서버 유지보수와 AWS로 배포업무까지 담당했습니다.  ",
    link: "http://dalchaebi.com",
    techs: ["JavaScript", "Python", "Django", "BootStrap4"],
    thumnail: "/img/dal/landing.png",
    imgs: [
      "/img/dal/ranking.png",
      "/img/dal/normal.png",
      "/img/dal/story.png",
      "/img/dal/detail.png",
    ],
  },
  {
    id: 2,
    name: "넷플릭스 클론",
    description:
      "무료 영화 API를 활용해서 넷플릭스 웹을 만들어봤습니다. 테마별로 컴포넌트를 분리했으며 영화 포스터를 클릭했을 때 유튜브에서 트레일러를 가져와 재생시키도록 구현했습니다.",
    techs: ["React", "Styled-Components"],
    link: "https://netflix-clone-9ba32.web.app/",
    thumnail: "/img/netflix/main.png",
    imgs: [
      "/img/netflix/main.png",
      "/img/netflix/1.png",
      "/img/netflix/2.png",
      "/img/netflix/3.png",
    ],
  },
  {
    id: 3,
    name: "블로그.",
    description:
      "클라이언트는 리액트 그리고 koa 프레임워크를 활용해 API 서버를 만들었습니다. jwt을 활용해 auth 기능, react-router-dom을 사용해 포스트 list, detail 페이지를 구현했습니다.",
    techs: ["React", "Styled-Components", "Node.js", "Koa"],
    link: "",
    thumnail: "/img/blog/main.png",
    imgs: [
      "/img/blog/main.png",
      "/img/blog/1.png",
      "/img/blog/2.png",
      "/img/blog/3.png",
    ],
  },
  {
    id: 4,
    name: "준비중입니다.",
    description: "준비중입니다.",
    techs: [""],
    link: "",
    thumnail: "",
    imgs: ["", "", "", ""],
  },
];

const ProjectWrapper = styled.section`
  padding: 60px;
  background: #1b242f;
  height: 100vh;
  h1 {
    position: relative;
    margin: 15px 0 50px;
    text-align: center;
    font-size: 3rem;
    color: #fff;
    &::before {
      content: "";
      width: 150px;
      height: 5px;
      background: #fff;
      position: absolute;
      left: 50%;
      bottom: -10px;
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
    .project__gridItem {
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
        top: -30px;
        left: 50%;
        width: 100%;
        text-align: center;
        opacity: 0;
        transform: translateX(-50%);
        transition: all 0.3s;
        h3 {
          font-size: 1.5rem;
          color: #fff;
        }
        span {
          display: block;
          color: #e31b6d;
        }
      }
      .gridItem__btn {
        position: absolute;
        bottom: -30px;
        left: 50%;
        padding: 3px 10px;
        transform: translateX(-50%);
        transition: all 0.3s;
        background: #1b242f;
        border: 2px solid #fff;
        color: #fff;
        outline: none;
        font-size: 1.2rem;
        opacity: 0;
        &:hover {
          background: #e31b6d;
          border: 2px solid #e31b6d;
          color: #fff;
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1099px) {
    height: auto;
    padding: 30px;
    h1 {
      font-size: 2.5rem;
    }
    h1::before {
      width: 100px;
    }
    .project__gridWrapper .project__gridItem {
      width: 339px;
    }
  }
  @media screen and (min-width: 360px) and (max-width: 767px) {
    height: auto;
    padding: 0;
    h1 {
      font-size: 2.5rem;
      margin: 0px 0 30px;
      padding: 30px 0 0;
    }
    h1::before {
      width: 100px;
    }
  }
`;

function Project({setOffset}) {
  const project = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [projectIndex, setProjectIndex] = useState(null);

  useEffect(() => {
    setOffset((prevOffset) => ({
      ...prevOffset,
      project: project.current.offsetTop,
    }));
  }, [setOffset]);

  const handleOnClick = (e) => {
    setShowModal(true);
    setProjectIndex(e.target.dataset.id - 1);
  };

  return (
    <ProjectWrapper className="project" ref={project}>
      <h1>PROJECT</h1>
      <div className="project__container container">
        <div className="project__gridWrapper">
          {projectsList.map((project) => (
            <div className="project__key" key={project.id}>
              <div className="project__gridItem">
                <div
                  className="gridItem__img"
                  style={{
                    backgroundImage: `url(${project.thumnail})`,
                  }}
                ></div>
                <div className="gridItem__text">
                  <h3>{project.name}</h3>
                  <span>{project.techs.join(", ")}</span>
                </div>
                <button
                  data-id={project.id}
                  className="gridItem__btn"
                  onClick={handleOnClick}
                >
                  View
                </button>
              </div>
            </div>
          ))}
          {showModal && (
            <Modal
              project={projectsList[projectIndex]}
              setShowModal={setShowModal}
            />
          )}
        </div>
      </div>
    </ProjectWrapper>
  );
}

export default Project;
