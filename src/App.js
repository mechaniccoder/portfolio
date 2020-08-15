import React, {useRef, useState} from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Else from "./components/Else";

const AppWrapper = styled.div`
  position: relative;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

function App() {
  const app = useRef(null);
  const [offset, setOffset] = useState({});

  return (
    <AppWrapper className="App" ref={app}>
      <Nav />
      <Main app={app} offset={offset} />
      <About offset={offset} setOffset={setOffset} />
      <Project />
      <Else />
    </AppWrapper>
  );
}

export default App;
