import { useState } from "react";
import CanvasContext from "./CanvasContext.jsx"; // must match file name exactly

const CanvasProvider = ({ children }) => {
  const [color, setColor] = useState("dark");
  const [size, setSize] = useState(`14`);

  return (
    <CanvasContext.Provider value={{ color, setColor, size, setSize }}>
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasProvider;
