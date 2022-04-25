import { FC } from "react";
import Props from "./Props";
import "./styles.css";

const ButtonYellowPrimary: FC<Props> = (props) => {
  const { children, ...rest } = props;

  const transferToBotChannel = () => {
    window.open("https://t.me/zenyk_bot", "_blank");
  };

  return (
    <button
      type="button"
      className="btn btn-yellow"
      onClick={transferToBotChannel}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonYellowPrimary;
