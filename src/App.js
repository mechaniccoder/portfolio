import React, {useRef, useState} from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Else from "./components/Else";

const AppWrapper = styled.div`
  position: relative;
  overflow: auto;
  scroll-behavior: smooth;
`;

function App() {
  const app = useRef(null);
  const [offset, setOffset] = useState({});

  return (
    <AppWrapper className="App" ref={app}>
      <Nav offset={offset} />
      <Project />
      <Main app={app} offset={offset} />
      <About offset={offset} setOffset={setOffset} />
      <Else />
    </AppWrapper>
  );
}

export default App;
