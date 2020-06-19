import { useEffect, useState } from "react";

export const useMediaQ = (minMax, MinMaxWidth) => {
  const innerWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  if (minMax === "min") {
    return width > MinMaxWidth;
  }

  return width < MinMaxWidth;
};
