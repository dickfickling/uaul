"use client";
import { useEffect, createContext, ReactNode } from "react";
import { init, track } from "@amplitude/analytics-browser";

export const AmplitudeContext = createContext<{ track: typeof track }>({
  track: () => {
    // eslint-disable-next-line no-console
    console.error("AmplitudeContextProvider not yet initialized");
    return { promise: Promise.resolve({} as any) };
  },
});

interface Props {
  children?: ReactNode;
}

const AmplitudeContextProvider = ({ children }: Props) => {
  useEffect(() => {
    init("433b0f835e7e0dcf68bdb317f1744ef", undefined, {
      defaultTracking: {
        attribution: true,
        sessions: true,
      },
    });
  }, []);

  const value = { track };

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export default AmplitudeContextProvider;
