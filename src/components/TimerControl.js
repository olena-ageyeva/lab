import React, { useState } from "react";
import Timer from "./Timer";
import TimerStyles from "./Timer.styles";

export default function TimerControl() {
  const [timers, setTimers] = useState([]);

  const addTimer = e => {
    setTimers([...timers, <Timer />]);
  };

  const removeTimer = e => {   
    setTimers([...timers.slice(0, timers.length - 1)]);
  };

  return (
    <TimerStyles>
      <button class="conttrol_button" onClick={addTimer}>
        Add Timer
      </button>
      <button class="control_button" onClick={removeTimer}>
        Remove Timer
      </button>
      <div className="control">
        <header className="control-header">{timers}</header>
      </div>
    </TimerStyles>
  );
}
