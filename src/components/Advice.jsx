import pattern from "../assets/images/pattern-divider-desktop.svg";
import patternMobile from "../assets/images/pattern-divider-mobile.svg";
import dice from "../assets/images/icon-dice.svg";
import { useState } from "react";

const ADVICE_URL = "	https://api.adviceslip.com/advice";

const Advice = () => {
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState("loader");
  const [adviceContent, setAdviceContent] = useState("advice-content");
  const [adviceBtn, setAdviceBtn] = useState("advice-btn");
  const [advicetxt, setAdvicetxt] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );
  const [adviceId, setId] = useState("117");

  setTimeout(() => {
    if (loading) {
      const fetchData = async () => {
        try {
          const response = await fetch(ADVICE_URL);
          const data = await response.json();
          setAdvicetxt(data.slip.advice);
          setId(data.slip.id);
          setLoading(false);
          setAdviceBtn("advice-btn ");
          setAdviceContent("advice-content ");
          setLoader("loader");
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, 1000);

  const randomAdvice = () => {
    setLoading(true);
    setAdviceBtn("advice-btn loading");
    setAdviceContent("advice-content loading");
    setLoader("loader active");
  };

  return (
    <div className="advice">
      <span className={loader}></span>
      <h1>Advice Generator</h1>
      <div className={adviceContent}>
        <span className="advice-number">Advice #{adviceId}</span>
        <p className="advice-text">“{advicetxt}”</p>
        <img src={pattern} alt="" aria-hidden="true" className="pattern" />
        <img
          src={patternMobile}
          alt=""
          aria-hidden="true"
          className="pattern-mobile"
        />
      </div>
      <button onClick={randomAdvice} className={adviceBtn}>
        <img src={dice} alt="change advice button" />
      </button>
    </div>
  );
};

export default Advice;
