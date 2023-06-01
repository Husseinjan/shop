import React, { useState } from "react";

function Tumbler() {
  const [isOn, setIsOn] = useState(false);
  const [language, setLanguage] = useState("english");

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const switchText = language === "english" ? ["Off", "On"] : ["Выкл", "Вкл"];

  return (
    <div>
      <p>{switchText[0]}</p>
      <div onClick={toggleSwitch}>
        <div
          style={{
            width: "40px",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: isOn ? "#4BD763" : "#D3D3D3",
            display: "flex",
            alignItems: "center",
            justifyContent: isOn ? "flex-end" : "flex-start",
            padding: "5px",
            cursor: "pointer"
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.4)",
              transform: isOn ? "translateX(20px)" : "translateX(0)"
            }}
          />
        </div>
      </div>
      <p>{switchText[1]}</p>
    </div>
  );
}
export default Tumbler;
