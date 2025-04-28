/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import logo from "../assets/images/logo.svg";

export default function Home() {
  return (
    <div style={appContainer}>
      <header style={appHeader}>
        <img src={logo} alt="logo" style={appLogo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={appLink}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 로고 회전 애니메이션
const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 스타일 객체들
const appContainer = {
  textAlign: "center",
};

const appHeader = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
};

const appLogo = {
  height: "40vmin",
  pointerEvents: "none",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${AppLogoSpin} infinite 20s linear`,
  },
};

const appLink = {
  color: "#61dafb",
};