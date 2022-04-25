import { FC } from "react";

import "./styles.css";
import FlagBullet from "../../svg/list-icon.svg";
import FlagSmallBullet from "../../svg/small-bullet-flag-icon.svg";

const ThirdPage: FC = (props) => {
  return (
    <div className={"root-question-page "}>
      <h2 className={"question-block-header mb-5"}>Найбільш поширені запитання:</h2>

      <div className="accordion-item mb-3">
        <h2 className="accordion-header" id="flush-headingOne">
          <div
            className="accordion-collapse-area collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <p className="question-title mb-0">
              Чому повідомлення містять граматичні помилки та нецензурну
              лексику?
            </p>
            <p className="text-end answer-label">Відповідь</p>
          </div>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className={"answer-item"}>
              <img
                src={FlagBullet}
                className={"flag-bullet"}
                alt={"flag-bullet-list"}
              />
              <p className="answer-text">
                Росіяни мають більше довіри до таких повідомлень.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item mb-3">
        <h2 className="accordion-header" id="flush-headingTwo">
          <div
            className="accordion-collapse-area collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <p className="question-title mb-0">
              Чому є повідомлення, які мають елементи висвітлення України не в
              найкращому «ракурсі»?
            </p>
            <p className="text-end answer-label">Відповідь</p>
          </div>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className={"answer-item"}>
              <img
                src={FlagBullet}
                className={"flag-bullet"}
                alt={"flag-bullet-list"}
              />
              <p className="answer-text">
                Деякі повідомлення – це інформаційні вкиди. Щоб до них виникла
                довіра у росіян, потрібно в частину повідомлення вписати знайоме
                росіянину формулювання з телебачення. При цьому, в повідомленні
                є посилання на ресурс, перейшовши на який, росіянин отримає той
                контент, який може змінити його думку, залякати його чи
                стимулювати до потрібної нам дії.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item mb-3">
        <h2 className="accordion-header" id="flush-headingThree">
          <div
            className="accordion-collapse-area collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <p className="question-title mb-0">Чи це безпечно?</p>
            <p className="text-end answer-label">Відповідь</p>
          </div>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className={"answer-item"}>
              <img
                src={FlagBullet}
                className={"flag-bullet"}
                alt={"flag-bullet-list"}
              />
              <p className="answer-text">
                Для того, щоб ви були спокійні зробіть декілька простих кроків:
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    Прибери українську символіку з фото в телеграмі
                  </p>
                </div>
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    Закрий у налаштуваннях телеграму доступ до номера свого
                    телефону
                  </p>
                </div>
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    За бажанням, отримай віртуальний номер:
                    <br />
                    Life: <a href="https://www.lifecell.ua/uk/rozvagy/second-number/?flavour=full" target="_blank">натискай</a>
                    <br />
                    Vodafon: <a href="https://www.vodafone.ua/services/esim" target="_blank">натискай</a>
                    <br />
                    Київстар: <a href="https://kyivstar.ua/uk/mm/services/voice/add_number" target="_blank">натискай</a>
                    <br /><br />
                    Проект 18+. Дітям не місце на війні!
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item mb-3">
        <h2 className="accordion-header" id="flush-headingFour">
          <div
            className="accordion-collapse-area collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            <p className="question-title mb-0">Чи може мене забанити Телеграм?</p>
            <p className="text-end answer-label">Відповідь</p>
          </div>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className={"answer-item"}>
              <img
                src={FlagBullet}
                className={"flag-bullet"}
                alt={"flag-bullet-list"}
              />
              <p className="answer-text">
                На жаль, зустрічаються такі випадки. Це трапляється тоді, коли
                велика кількість росіян поскаржиться на ваш акаунт через
                надіслані вами повідомлення. Якщо вас заблокувало, не
                переймайтесь, це тимчасово, зверніться за перевіркою та
                підтримкою до бота за <a href="https://t.me/SpamBot" target="_blank">посиланням</a>. Щоб цього не сталося,
                рекомендовано відправляти не більше 7 повідомлень на добу.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item mb-3">
        <h2 className="accordion-header" id="flush-headingFive">
          <div
            className="accordion-collapse-area collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            <p className="question-title mb-0">Що робити?</p>
            <p className="text-end answer-label">Відповідь</p>
          </div>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className={"answer-item"}>
              <p className="answer-text">
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    Бери завдання: бот видає контакт росіянина та рекомендований
                    текст
                  </p>
                </div>
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    Копіюй текст, натискай на ім’я росіянина, відправляй текст
                  </p>
                </div>
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    Якщо є реакція, дивись підказки як йому далі відповісти
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item mb-3">
        <h2 className="accordion-header" id="flush-headingSix">
          <div
            className="accordion-collapse-area collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            <p className="question-title mb-0">До чого бути готовим?</p>
            <p className="text-end answer-label">Відповідь</p>
          </div>
        </h2>
        <div
          id="flush-collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSix"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className={"answer-item"}>
              <div className="answer-text">
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    В залежності від ролі, яку тобі дасть бот, ти можеш писати як
                    від імені вигаданого росіянина так і від українця
                  </p>
                </div>
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    Відповідає
                    лише 1 з 10. Пиши якомога більшій кількості
                  </p>
                </div>
                <div className={"answer-item small-bullet-item"}>
                  <img
                    src={FlagSmallBullet}
                    className={"flag-bullet"}
                    alt={"flag-bullet-list"}
                  />
                  <p className="answer-text">
                    Наші повідомлення
                    без цензури. Росіяни краще реагують на мати ніж на смерті.
                    Проект 18+. Дітям не місце на війні!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
