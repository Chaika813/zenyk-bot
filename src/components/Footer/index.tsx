import { FC } from "react";
import PartnerPartizany from "./../../svg/media-partners-partizany-icon.svg";
import PartnerSprotyv from "./../../svg/media-partners-sprotyv-icon.svg";

import "./styles.css";
import ButtonYellowPrimary from "../../common/ButtonYellowPrimary";

const Footer: FC = (props) => {
  const handleOpenPartizanyPartners = () => {
    window.open("http://mediapartisans.com.ua", "_blank");
  };

  const handleOpenSprotyvPartners = () => {
    window.open("https://mediasprotyv.team/", "_blank");
  };

  return (
    <div className="root-footer-page">
      <div className={"start-button-wrapper"}>
        <ButtonYellowPrimary>Почати</ButtonYellowPrimary>
      </div>

      <h2 className="text-center">Наші партнери:</h2>
      <div className="partners-wrapper text-center">
        <img
          src={PartnerPartizany}
          alt="media-partners-partizany"
          className="media-partners"
          onClick={handleOpenPartizanyPartners}
        />
        <img
          src={PartnerSprotyv}
          alt="media-partners-sprotyv"
          className="media-partners"
          onClick={handleOpenSprotyvPartners}
        />
        <img
          src={PartnerPartizany}
          alt="media-partners-partizany"
          className="media-partners"
          onClick={handleOpenPartizanyPartners}
        />
      </div>
    </div>
  );
};

export default Footer;
