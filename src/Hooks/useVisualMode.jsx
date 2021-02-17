import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const [fadeToggle, setFadeToggle] = useState(true);

  const transition = (newMode, replace = false) => {
    const modes = history;

    if (replace) {
      modes.pop();
    }

    modes.push(newMode);
    setHistory(modes);
    setMode(newMode);
    setFadeToggle(-fadeToggle);
  };

  const back = () => {
    const modes = history;
    if (history.length < 2) {
      return;
    }

    modes.pop();
    setHistory(modes);
    setMode(history[history.length -1]);
  };

  return { mode, transition, back, fadeToggle }
};

export default useVisualMode;