/* eslint-disable no-console */
import Results from "../results";
const TOKEN_URL = "https://www.united.com/api/token/refresh";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default async function View({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  console.log("Starting view render...");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      authority: "www.united.com",
      "accept-language": "en-US",
    },
  };

  const tokenResponse = await fetch(TOKEN_URL, options);
  console.log("Fetched something...");
  const tokenJson = await tokenResponse.json();
  const hash = tokenJson.data.token.hash;
  console.log("Fetched token...", hash);

  const url = `https://www.united.com/api/flight/upgradeListExtended?flightNumber=${searchParams["flightNumber"]}&flightDate=${searchParams["date"]}&fromAirportCode=${searchParams["airportCode"]}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "x-authorization-api": `bearer ${hash}`,
    },
  });
  const data = await response.json();
  console.log("Fetched data...", data);

  return (
    <main className="min-h-screen p-8">
      <Results data={data} />
    </main>
  );
}
