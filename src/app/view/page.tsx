/* eslint-disable no-console */
import { Metadata } from "next";
import Results from "../results";
import { serializeError } from "serialize-error";
import ErrorWrapper from "./ErrorWrapper";
const TOKEN_URL = "https://www.united.com/api/token/refresh";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

async function fetchUpgradeList({
  flightNumber,
  date,
  airportCode,
}: {
  flightNumber: string;
  date: string;
  airportCode: string;
}) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      authority: "www.united.com",
      "accept-language": "en-US",
      Referer: `https://www.united.com/en/us/flightstatus/details/${flightNumber}/${date}/${airportCode}/LAX/UA`,
    },
  };

  const tokenResponse = await fetch(TOKEN_URL, options);
  console.log("Fetched something...");
  let tokenJson: any;
  try {
    tokenJson = await tokenResponse.json();
  } catch (err) {
    console.error("Error fetching token", serializeError(err));
    console.error("Error2 fetching token", err);
    const text = await tokenResponse.text();
    console.error("Error3 fetching token", text);
    throw err;
  }
  const hash = tokenJson.data.token.hash;
  console.log("Fetched token...", hash);

  const url = `https://www.united.com/api/flight/upgradeListExtended?flightNumber=${flightNumber}&flightDate=${date}&fromAirportCode=${airportCode}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "x-authorization-api": `bearer ${hash}`,
    },
  });
  try {
    const data = await response.json();
    console.log("Fetched data...", url, JSON.stringify(data, null, 2));
    return data;
  } catch (err) {
    console.error("Error fetching data", serializeError(err));
    console.error("Error2 fetching data", err);
    const text = await response.text();
    console.error("Error3 fetching data", text);
    throw err;
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}): Promise<Metadata> {
  const flightNumber = searchParams["flightNumber"];
  const date = searchParams["date"];
  const airportCode = searchParams["airportCode"];
  return {
    title: `Flight ${flightNumber} on ${date} from ${airportCode}`,
  };
}

export default async function View({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const flightNumber = searchParams["flightNumber"];
  const date = searchParams["date"];
  const airportCode = searchParams["airportCode"];

  try {
    const data = await fetchUpgradeList({ flightNumber, date, airportCode });
    if (data.errors) {
      return (
        <main>
          <ErrorWrapper
            error={data.errors}
            flightNumber={flightNumber}
            date={date}
            airportCode={airportCode}
          />
        </main>
      );
    }
    return (
      <main>
        <Results data={data} />
      </main>
    );
  } catch (err) {
    return (
      <main>
        <ErrorWrapper
          error={serializeError(err)}
          flightNumber={flightNumber}
          date={date}
          airportCode={airportCode}
        />
      </main>
    );
  }
}
