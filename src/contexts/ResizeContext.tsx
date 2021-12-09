import { createContext, Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

type ResizeContextType = {
  leftPanelWidth: number,
  setLeftPanelWidth: Dispatch<SetStateAction<number>>
  rightPanelWidth: number,
  handleMouseMove: (data: any) => void,
  handleMouseDown: (data: any) => void,
  handleMouseUp: (data: any) => void,
  setClientWidth: Dispatch<SetStateAction<number>>,
}

export const ResizeContext = createContext({ } as ResizeContextType);

export const ResizeProvider = ({ children }) => {
  const minLeftPanelWidth = 250;
  const maxLeftPanelWidth = 1000;

  const maxRightPanelWidth = 1284;

  const [clientWidth, setClientWidth] = useState(maxRightPanelWidth + maxLeftPanelWidth);

  const [leftPanelWidth, setLeftPanelWidth] = useState(250);
  const [rightPanelWidth, setRightPanelWidth] = useState(maxRightPanelWidth + 205);

  const handleMouseDown = e => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseMove = useCallback(e => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if (newWidth > minLeftPanelWidth && newWidth < maxLeftPanelWidth) {
      const clientWidth = document.documentElement.clientWidth;
      setClientWidth(document.documentElement.clientWidth);
      setRightPanelWidth(clientWidth - newWidth)
      setLeftPanelWidth(newWidth);
    }
  }, []);

  return (
    <ResizeContext.Provider
      value={{
        leftPanelWidth,
        setLeftPanelWidth,
        rightPanelWidth,
        handleMouseMove,
        handleMouseDown,
        handleMouseUp,
        setClientWidth
      }}
    >
      {children}
    </ResizeContext.Provider>
  )
}