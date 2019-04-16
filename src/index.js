import React from "react";
import ReactDOM from "react-dom";
import Lightsaber from "./Lightsaber";
import styled, { keyframes } from "styled-components";
import { linearGradient } from "polished";
1;

import "./styles.css";

const Container = styled.div`
  /* padding-top: 10rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  min-height: 100vw;
  max-height: 100vw;

  background-color: #f5f5f5;
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

const Underline = styled.div`
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  ${linearGradient({
    colorStops: ["#5433FF 0%", "#20BDFF 50%", "#a5fecb 100%"],
    toDirection: "-45deg",
    fallback: "#ee7752"
  })}

  background-size: 400% 0.3em;
  /* background-position: 0 20%; */
  animation: ${Gradient} 10s ease infinite;

  color: white;
  font-family: "Prata", serif;

  line-height: 5rem;
  /* font-weight: bold;
   */
`;

const Copy = styled.sup`
  font-size: 16px;
`;

function App() {
  return (
    <Container>
      <Lightsaber
        baseColor="#20BDFF"
        // gradient={["#ee7752", "#e73c7e", "#23a6d5", "#23d5ab"]}
        width={180}
        height={180}
      />
      <h1>
        <Underline>
          &nbsp;&nbsp;Underline Generator<Copy>&nbsp;&nbsp;&copy;</Copy>
          &nbsp;&nbsp;
        </Underline>
      </h1>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
