"use client";
import { useEffect, createContext, ReactNode } from "react";
import { init, track } from "@amplitude/analytics-browser";

export const AmplitudeContext = createContext({});

interface Props {
  children?: ReactNode;
}

const AmplitudeContextProvider = ({ children }: Props) => {
  useEffect(() => {
    init("433b0f835e7e0dcf68bdb317f1744ef", undefined, {
      defaultTracking: {
        sessions: true,
      },
    });
  }, []);

  const trackAmplitudeEvent = (
    eventName: string,
    eventProperties: { [key: string]: string },
  ) => {
    track(eventName, eventProperties);
  };

  const value = { trackAmplitudeEvent };

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export default AmplitudeContextProvider;
