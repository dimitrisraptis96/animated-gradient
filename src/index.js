import React from "react";
import ReactDOM from "react-dom";
import Lightsaber from "./Lightsaber";
import styled, { keyframes } from "styled-components";

import "./styles.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60vw;

  font-family: "Prata", serif;
`;

const Gradient = keyframes`
  0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`;
const Underline = styled.span`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 20%;
  animation: ${Gradient} 5s ease-in-out infinite;

  /* background-size: 100% 0.3em; */
  background-position: 0 80%;
  transition: background-size 0.25s ease-in-out;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Lightsaber baseColor="#ff0000" width={100} />
        <h1>
          <Underline>Underline Generator</Underline>
          <sup>&copy;</sup>
        </h1>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
