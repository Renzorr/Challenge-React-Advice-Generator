import pattern from "../assets/images/pattern-divider-desktop.svg";
import patternMobile from "../assets/images/pattern-divider-mobile.svg";
import dice from "../assets/images/icon-dice.svg";
import { useState } from "react";

const ADVICE_URL = "	https://api.adviceslip.com/advice";

const Advice = () => {
  const [advicetxt, setAdvicetxt] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );
  const [adviceId, setId] = useState("117");

  const randomAdvice = () => {
    fetch(ADVICE_URL)
      .then((res) => res.json())
      .then((ad) => {
        setAdvicetxt(ad.slip.advice);
        setId(ad.slip.id);
      });
  };

  return (
    <div className="advice">
      <span className="advice-number">Advice #{adviceId}</span>
      <h1 className="advice-text">"{advicetxt}"</h1>
      <img src={pattern} alt="" aria-hidden="true" className="pattern" />
      <img
        src={patternMobile}
        alt=""
        aria-hidden="true"
        className="pattern-mobile"
      />
      <button onClick={randomAdvice} className="advice-btn">
        <img src={dice} alt="change advice button" />
      </button>
    </div>
  );
};

export default Advice;
