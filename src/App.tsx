import React, { useRef } from "react";
import logo from "./svg/zenyk-logo.svg";
import firstPageBg from "./svg/first-page-bg.svg";
import "./App.scss";
import ButtonYellowPrimary from "./common/ButtonYellowPrimary";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Footer from "./components/Footer";

function App() {
  const secondPageRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (secondPageRef.current) {
      secondPageRef.current?.scrollIntoView({ block: "nearest" });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="first-page-bg-wrapper">
          <img
            src={firstPageBg}
            className="first-page-bg img-shadow"
            alt="first-page-bg"
          />
        </div>
        <div className="title-container">
          <h1 className="zenyk-title">ЗЕNИК</h1>
          <p className="first-page-message">
            є платформа, яка дозволяє українцям інформаційно масово атакувати
            росіян
          </p>
          <div className="read-more-button-wrapper">
            <ButtonYellowPrimary onClick={executeScroll}>
              Читати більше
            </ButtonYellowPrimary>
          </div>
        </div>
        <SecondPage secondPageRef={secondPageRef} />
        <ThirdPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
