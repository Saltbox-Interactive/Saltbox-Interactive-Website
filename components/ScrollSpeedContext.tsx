"use client";

import { createContext, useContext } from "react";
import Lenis from "lenis";

interface ScrollSpeedContextType {
  lenis: Lenis | null;
  setScrollSpeed: (duration: number, smooth?: boolean) => void;
}

export const ScrollSpeedContext = createContext<ScrollSpeedContextType>({
  lenis: null,
  setScrollSpeed: () => {},
});

export const useScrollSpeedContext = () => useContext(ScrollSpeedContext);
