import { FC } from "react";
import QRCode from "./../../svg/QR-code.svg";
import FlagBullet from "./../../svg/list-icon.svg";
import "./styles.css";
import Props from "./Props";
import ButtonYellowPrimary from "../../common/ButtonYellowPrimary";

const SecondPage: FC<Props> = (props) => {
  const { secondPageRef } = props;

  const outTasks: string[] = [
    "сіяти зерно сумніву у зомбованих пропагандою росіян",
    "робити інформаційні викиди навантажувати бюрократичну систему рф",
    "створювати емоційну напругу у росіян",
    "провокувати росіян робити корисні для України дії",
  ];

  return (
    <div ref={secondPageRef}>
      <div className={"root-second-page"}>
        <div className={"main-goals-containers z-index-30"}>
          <h2>Наша ціль: </h2>
          <p>
            перемога Україні над росією у війні. Через інформаційний вплив
            змінити думку росіян щодо війни.
          </p>
        </div>
        <div className={"main-goals-containers z-index-20"}>
          <h2>Ми прагнемо: </h2>
          <p>
            долучити якомога більше українців, які б витрачали 10 хв на день на
            інформаційну війну
          </p>
        </div>
        <div className={"main-goals-containers z-index-10"}>
          <h2 className="mb-4">наші завдання:</h2>
          <div className={"unordered-tasks-list"}>
            {outTasks.map((task) => (
              <div className={"task-list-item"}>
                <img
                  src={FlagBullet}
                  className={"flag-bullet"}
                  alt={"flag-bullet-list"}
                />
                <p>{task}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={"qr-button-wrapper"}>
        <div className="click-button-wrapper">
          <ButtonYellowPrimary>НАТИСКАЙ</ButtonYellowPrimary>
        </div>
        <p className="scan-QR-code-label">Або скануй QR код:</p>
        <div className={"qr-code-container"}>
          <div className="qr-code-wrapper">
            <img src={QRCode} alt="scan-qr-code" />
          </div>
        </div>
      </div>

      <h2 className={"watch-video-label"}>Подивись відео: як це працює</h2>

      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/gCs9FjKADgo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      </div>
      <div className={"try-button-wrapper"}>
        <ButtonYellowPrimary>СПРОБУВАТИ</ButtonYellowPrimary>
      </div>
    </div>
  );
};

export default SecondPage;
