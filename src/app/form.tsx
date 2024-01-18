"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [airportCode, setAirportCode] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    router.push(
      `/view?date=${date}&flightNumber=${flightNumber}&airportCode=${airportCode}`,
    );
  };

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleChangeFlightNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setFlightNumber(event.target.value.replace(/\D/g, ""));
  };

  const handleChangeAirportCode = (event: ChangeEvent<HTMLInputElement>) => {
    setAirportCode(event.target.value.toUpperCase());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <input
          type="date"
          value={date}
          onChange={handleChangeDate}
          placeholder="Date"
          className="mb-4 w-full rounded border border-gray-400 p-2 dark:text-gray-900"
        />
        <input
          type="text"
          value={flightNumber}
          onChange={handleChangeFlightNumber}
          placeholder="Flight Number"
          className="mb-4 rounded border border-gray-400 p-2 dark:text-gray-900"
        />
        <input
          type="text"
          value={airportCode}
          onChange={handleChangeAirportCode}
          placeholder="Departure Airport Code"
          className="mb-4 rounded border border-gray-400 p-2 dark:text-gray-900"
        />
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Submit
        </button>
      </form>
    </>
  );
}
