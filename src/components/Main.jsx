import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const MainWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #1b242f;
  overflow: hidden;
  span {
    position: absolute;
    border-radius: 100%;
    animation: bubble 5s linear infinite;
  }

  @keyframes bubble {
    0% {
      transform: scale(0) translateY(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: scale(1) translateY(-400%) rotate(360deg);
    }
  }
  .main__introduce {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 2rem;
      color: #ffffff;
      strong {
        color: #e31b6d;
      }
    }
    button {
      margin-top: 15px;
      padding: 10px 20px;
      border: 2px solid #ffffff;
      outline: none;
      background: transparent;
      font-size: 1.3rem;
      font-weight: 400;
      color: #fff;
      transition: 0.3s;
    }
    button:hover {
      border: 2px solid #e31b6d;
      background: #e31b6d;
    }
    button:hover .arrow {
      transform: rotate(90deg);
    }
  }
  .arrow {
    margin-left: 10px;
    transition: all 0.3s;
  }
`;

function Main({app, offset}) {
  const main = useRef(null);
  const button = useRef(null);
  // const button = createRef();

  const createSquare = () => {
    const square = document.createElement("span");

    let size = Math.random() * 30;
    const colors = ["#2196f3", "#e91e63", "#ffeb3b", "#74ff1d"];

    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";
    square.style.top = Math.random() * window.innerHeight + "px";
    square.style.left = Math.random() * window.innerWidth + "px";

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    main.current.appendChild(square);
    setTimeout(() => {
      square.remove();
    }, 5000);

    square.addEventListener("mouseover", () => {
      square.remove();
    });
    return () => {
      square.removeEventListener("mouseover");
    };
  };

  useEffect(() => {
    setInterval(createSquare, 150);
    button.current.addEventListener("click", () => {
      app.current.scrollTop = offset.about;
    });
  }, [app, offset]);

  return (
    <MainWrapper className="main" ref={main}>
      <div className="main__introduce">
        <p>
          안녕하세요, 저는 <strong>유승환</strong>입니다.
        </p>
        <p>저는 풀스택을 지향하는 프론트엔드 개발자입니다.</p>
        <button ref={button}>
          나에 대해 알아보기
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </button>
      </div>
    </MainWrapper>
  );
}

export default Main;
