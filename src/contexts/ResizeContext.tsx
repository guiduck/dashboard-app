import { createContext, Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

type ResizeContextType = {
  leftPanelWidth: number,
  setLeftPanelWidth: Dispatch<SetStateAction<number>>
  rightPanelWidth: number,
  handleMouseMove: (data: any) => void,
  handleMouseDown: (data: any) => void,
  handleMouseUp: (data: any) => void,
}

export const ResizeContext = createContext({ } as ResizeContextType);

export const ResizeProvider = ({ children }) => {
  const minLeftPanelWidth = 250;
  const maxLeftPanelWidth = 1000;

  const maxRightPanelWidth = 1284;

  const [leftPanelWidth, setLeftPanelWidth] = useState(250);
  const [rightPanelWidth, setRightPanelWidth] = useState(maxRightPanelWidth);

  const handleMouseDown = e => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);
  };

  useEffect(() => {
    onResize();
  }, [])
  
  const onResize = () => {
    setRightPanelWidth(document.documentElement.clientWidth - leftPanelWidth - 50);
  }

  const handleMouseMove = useCallback(e => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if (newWidth > minLeftPanelWidth && newWidth < maxLeftPanelWidth) {
      setLeftPanelWidth(newWidth);
      setRightPanelWidth(document.documentElement.clientWidth - newWidth - 50)
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
      }}
    >
      {children}
    </ResizeContext.Provider>
  )
}