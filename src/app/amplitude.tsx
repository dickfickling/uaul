"use client";
import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

amplitude.init("433b0f835e7e0dcf68bdb317f1744ef", {
  defaultTracking: true,
});

interface AmplitudeProps {
  eventName: string;
  eventProperties: { [key: string]: string };
}

export default function Amplitude(props: AmplitudeProps) {
  useEffect(() => {
    amplitude.track(props.eventName, props.eventProperties);
  }, [props]);

  return null;
}
