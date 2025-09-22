import Style from "./../style/Calculater.module.css";
import { useState } from "react";
const Calculater = () => {
  let cal = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const [count, setcount] = useState("");
  const ButtonClick = (ButtonClick) => {
    if (ButtonClick === "C") {
      setcount("");
    } else if (ButtonClick === "=") {
      const parseValue = eval(count);
      setcount(parseValue);
    } else {
      const newValue = count + ButtonClick;
      setcount(newValue);
    }
  };
  return (
    <div>
      <div className={Style.container}>
        <div>
          <input
            type="text"
            name="output"
            id="output"
            className={Style.input}
            value={count}
          />
        </div>
        <div className={Style.keyButtonDiv}>
          {cal.map((c) => {
            return (
              <button
                key={c}
                onClick={() => ButtonClick(c)}
                className={Style.keyButton}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Calculater;
