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

  width: 100%;
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
  background-size: 400% 0.3em;
  background-position: 0 20%;
  animation: ${Gradient} 7s ease infinite;

  font-family: "Prata", serif;
  font-weight: normal;

  color: white;
`;

function App() {
  return (
    <Container>
      <Lightsaber baseColor="#ff0000" width={100} height={100} />
      <h1>
        <Underline>Underline Generator</Underline>
      </h1>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
