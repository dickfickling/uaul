"use client";

import { ErrorObject } from "serialize-error";
import useAmplitudeContext from "../use-amplitude-context";
import { useEffect } from "react";

interface ErrorWrapperProps {
  error: ErrorObject;
  flightNumber: string;
  date: string;
  airportCode: string;
}

export default function ErrorWrapper({
  error,
  flightNumber,
  date,
  airportCode,
}: ErrorWrapperProps) {
  const { track } = useAmplitudeContext();

  useEffect(() => {
    track("Error", { error, flightNumber, date, airportCode });
  }, [error, flightNumber, date, airportCode, track]);

  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Error</h1>
      <p>There was an error fetching the upgrade list.</p>
      <div className="text-xs">{JSON.stringify(error, null, 2)}</div>
      {location.host === "uaul.fickling.us" && (
        <div className="mt-2">
          Please{" "}
          <a
            className="text-blue-800 underline"
            href={`https://uaul.d10g.co${location.pathname}${location.search}`}
          >
            click here
          </a>{" "}
          to try again.
        </div>
      )}
    </main>
  );
}
