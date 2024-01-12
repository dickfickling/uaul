import { UpgradeData } from "./united";

export default function Results({ data }: { data: UpgradeData }) {
  return (
    <div>
      <h1 className="text-lg">United Airlines Upgrade List</h1>
      {data && (
        <div className="mt-16 grid gap-20 sm:grid-cols-2 sm:gap-8">
          <div>
            <h2 className="text-4xl">Polaris</h2>
            <div className="mt-4 space-y-1 *:text-sm">
              <div>{data.checkInSummaries[0].capacity} total seats</div>
              <div>{data.pbts[0].booked} booked</div>
              <div>{data.checkInSummaries[0].total} checked in</div>
            </div>
            <div className="mt-16 grid gap-4 rounded-md border border-white/20 pt-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-center text-lg">Cleared</h3>
                {data.front.cleared.map((passenger, i) => {
                  return (
                    <div className="rounded-sm p-4 even:bg-black/50" key={i}>
                      <p>
                        {passenger.passengerName}
                        <span className="ml-2">{passenger.seatNumber}</span>
                      </p>
                    </div>
                  );
                })}
                {data.front.cleared.length === 0 && (
                  <div className="p-4 italic opacity-80">(empty)</div>
                )}
              </div>
              <div>
                <h3 className="mb-4 text-center text-lg">Standby</h3>
                {data.front.standby.map((passenger, i) => {
                  return (
                    <div className="rounded-sm p-4 odd:bg-black/50" key={i}>
                      <p>
                        {passenger.passengerName}
                        {passenger.isCheckedIn && (
                          <span className="pl-2" title="Checked in">
                            ✓
                          </span>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl">Premium Plus</h2>
            <div className="mt-4 space-y-1 *:text-sm">
              <div>{data.checkInSummaries[1].capacity} total seats</div>
              <div>{data.pbts[1].booked} booked</div>
              <div>{data.checkInSummaries[1].total} checked in</div>
            </div>
            <div className="mt-16 grid gap-4 rounded-md border border-white/20 pt-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-center text-lg">Cleared</h3>
                {data.middle.cleared.map((passenger, i) => {
                  return (
                    <div className="rounded-sm p-4 even:bg-black/50" key={i}>
                      <p>
                        {passenger.passengerName}
                        <span className="ml-2">{passenger.seatNumber}</span>
                      </p>
                    </div>
                  );
                })}
                {data.middle.cleared.length === 0 && (
                  <div className="p-4 italic opacity-80">(empty)</div>
                )}
              </div>
              <div>
                <h3 className="mb-4 text-center text-lg">Standby</h3>
                {data.middle.standby.map((passenger, i) => {
                  return (
                    <div className="rounded-sm p-4 odd:bg-black/50" key={i}>
                      <p>
                        {passenger.passengerName}
                        {passenger.isCheckedIn && (
                          <span className="pl-2" title="Checked in">
                            ✓
                          </span>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/*
const dummyData = {
  segment: {
    airlineCode: "UA",
    flightNumber: 188,
    codeShareFlightNumber: 0,
    flightDate: "20240111",
    departureAirportCode: "EWR",
    departureAirportName: "NEWARK, NJ, USA (EWR)",
    arrivalAirportCode: "JNB",
    arrivalAirportName: "JOHANNESBURG, , ZAF (JNB)",
    scheduledDepartureTime: "20240111 09:30 PM",
    scheduledArrivalTime: "20240112 06:45 PM",
    ship: "N13954",
    equipmentCode: "",
    equipmentDescription: "789",
    equipmentDescriptionLong: "Boeing 787-9",
    departed: false,
  },
  pbts: [
    {
      cabin: "Front",
      capacity: 48,
      authorized: 48,
      booked: 48,
      held: 0,
      reserved: 0,
      revenueStandby: 0,
      waitList: 0,
      jump: 0,
      group: 0,
      ps: 1,
      sa: 0,
    },
    {
      cabin: "Middle",
      capacity: 21,
      authorized: 21,
      booked: 21,
      held: 0,
      reserved: 0,
      revenueStandby: 0,
      waitList: 0,
      jump: 0,
      group: 0,
      ps: 0,
      sa: 0,
    },
    {
      cabin: "Rear",
      capacity: 188,
      authorized: 188,
      booked: 174,
      held: 0,
      reserved: 0,
      revenueStandby: 0,
      waitList: 0,
      jump: 0,
      group: 0,
      ps: 0,
      sa: 4,
    },
  ],
  checkInSummaries: [
    {
      cabin: "Front",
      capacity: 48,
      through: 0,
      localNonEtktBoarding: 0,
      localEtktBoarding: 0,
      connectingNonEtkt: 0,
      connectingEtkt: 0,
      standbyNonEtktWithSeats: 0,
      standbyEtktWithSeats: 0,
      total: 48,
      etktPassengersCheckedIn: 48,
      heldAsaAciSeats: 0,
      revStandbyCheckedInWithoutSeats: 0,
      nonRevStandbyCheckedInWithoutSeats: 0,
      children: 0,
      infants: 0,
      bags: 0,
    },
    {
      cabin: "Middle",
      capacity: 21,
      through: 0,
      localNonEtktBoarding: 0,
      localEtktBoarding: 0,
      connectingNonEtkt: 0,
      connectingEtkt: 0,
      standbyNonEtktWithSeats: 0,
      standbyEtktWithSeats: 0,
      total: 21,
      etktPassengersCheckedIn: 21,
      heldAsaAciSeats: 0,
      revStandbyCheckedInWithoutSeats: 0,
      nonRevStandbyCheckedInWithoutSeats: 0,
      children: 0,
      infants: 0,
      bags: 0,
    },
    {
      cabin: "Rear",
      capacity: 188,
      through: 0,
      localNonEtktBoarding: 0,
      localEtktBoarding: 0,
      connectingNonEtkt: 0,
      connectingEtkt: 0,
      standbyNonEtktWithSeats: 0,
      standbyEtktWithSeats: 0,
      total: 171,
      etktPassengersCheckedIn: 171,
      heldAsaAciSeats: 0,
      revStandbyCheckedInWithoutSeats: 0,
      nonRevStandbyCheckedInWithoutSeats: 0,
      children: 0,
      infants: 0,
      bags: 0,
    },
  ],
  numberOfCabins: 3,
  front: {
    cleared: [
      {
        standbyCabin: "",
        currentCabin: "Front",
        bookedCabin: "Front",
        checkinId: 377,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "V",
        lastName: "SIT",
        passengerName: "V/SIT",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "12L",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "2024-01-12T01:00:21.974Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-11T21:00:00Z",
      },
    ],
    standby: [
      {
        standbyCabin: "Front",
        currentCabin: "Middle",
        bookedCabin: "Middle",
        checkinId: 215,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "E",
        lastName: "GAS",
        passengerName: "E/GAS",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "20D",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "PZ",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "0001-01-01T00:00:00",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2023-02-08T21:00:00Z",
      },
      {
        standbyCabin: "Front",
        currentCabin: "Middle",
        bookedCabin: "Middle",
        checkinId: 116,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "L",
        lastName: "ART",
        passengerName: "L/ART",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "22A",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "PZ",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "0001-01-01T00:00:00",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2023-02-08T21:00:00Z",
      },
      {
        standbyCabin: "Front",
        currentCabin: "Middle",
        bookedCabin: "Middle",
        checkinId: 117,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "V",
        lastName: "ART",
        passengerName: "V/ART",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "22C",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "PZ",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "0001-01-01T00:00:00",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2023-02-08T21:00:00Z",
      },
      {
        standbyCabin: "Front",
        currentCabin: "Middle",
        bookedCabin: "Middle",
        checkinId: 156,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "U",
        lastName: "SIT",
        passengerName: "U/SIT",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "21J",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "PZ",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "0001-01-01T00:00:00",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2023-02-08T21:00:00Z",
      },
      {
        standbyCabin: "Front",
        currentCabin: "Rear",
        bookedCabin: "Front",
        checkinId: 376,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "R",
        lastName: "LLO",
        passengerName: "R/LLO",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "33C",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "J",
        upgradeType: "",
        clearanceType: "Standby",
        cabinClearanceTime: "0001-01-01T00:00:00",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-10T21:00:00Z",
      },
    ],
  },
  middle: {
    cleared: [
      {
        standbyCabin: "",
        currentCabin: "Middle",
        bookedCabin: "Rear",
        checkinId: 371,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "W",
        lastName: "VOT",
        passengerName: "W/VOT",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "20F",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "2024-01-11T11:32:56.107Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-11T21:00:00Z",
      },
      {
        standbyCabin: "",
        currentCabin: "Middle",
        bookedCabin: "Middle",
        checkinId: 379,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "K",
        lastName: "OYL",
        passengerName: "K/OYL",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "21D",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "2024-01-12T01:00:21.975Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-11T21:00:00Z",
      },
      {
        standbyCabin: "",
        currentCabin: "Middle",
        bookedCabin: "Middle",
        checkinId: 378,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "D",
        lastName: "ENG",
        passengerName: "D/ENG",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "21F",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "2024-01-12T01:00:21.979Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-11T21:00:00Z",
      },
      {
        standbyCabin: "",
        currentCabin: "Middle",
        bookedCabin: "Middle",
        checkinId: 380,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "K",
        lastName: "GIL",
        passengerName: "K/GIL",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "20E",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "2024-01-12T01:00:22.019Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-11T21:00:00Z",
      },
      {
        standbyCabin: "",
        currentCabin: "Middle",
        bookedCabin: "Middle",
        checkinId: 381,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "R",
        lastName: "DAS",
        passengerName: "R/DAS",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "22E",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "",
        upgradeType: "",
        clearanceType: "Upgrade",
        cabinClearanceTime: "2024-01-12T01:00:22.036Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-11T21:00:00Z",
      },
    ],
    standby: [
      {
        standbyCabin: "Middle",
        currentCabin: "Rear",
        bookedCabin: "Front",
        checkinId: 376,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "R",
        lastName: "LLO",
        passengerName: "R/LLO",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "33C",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "O",
        upgradeType: "",
        clearanceType: "Standby",
        cabinClearanceTime: "0001-01-01T00:00:00",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-10T21:00:00Z",
      },
    ],
  },
  rear: {
    cleared: [
      {
        standbyCabin: "Front",
        currentCabin: "Rear",
        bookedCabin: "Front",
        checkinId: 376,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "R",
        lastName: "LLO",
        passengerName: "R/LLO",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "33C",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "J",
        upgradeType: "",
        clearanceType: "Standby",
        cabinClearanceTime: "0001-01-01T00:00:00",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-10T21:00:00Z",
      },
      {
        standbyCabin: "Rear",
        currentCabin: "Rear",
        bookedCabin: "Rear",
        checkinId: 282,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "C",
        lastName: "RHO",
        passengerName: "C/RHO",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "33A",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "Y",
        upgradeType: "",
        clearanceType: "Standby",
        cabinClearanceTime: "2024-01-12T01:22:43.751Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-10T21:00:00Z",
      },
      {
        standbyCabin: "Rear",
        currentCabin: "Rear",
        bookedCabin: "Rear",
        checkinId: 364,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "T",
        lastName: "LEE",
        passengerName: "T/LEE",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "52L",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "Y",
        upgradeType: "",
        clearanceType: "Standby",
        cabinClearanceTime: "2024-01-12T01:37:28.691Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-10T21:00:00Z",
      },
      {
        standbyCabin: "Rear",
        currentCabin: "Rear",
        bookedCabin: "Rear",
        checkinId: 363,
        isCheckedIn: true,
        classOfService: "",
        originalClassOfService: "",
        origin: "EWR",
        destination: "JNB",
        firstName: "T",
        lastName: "GRE",
        passengerName: "T/GRE",
        numberInParties: 1,
        premierLevel: "",
        evaluatedRank: "",
        seatNumber: "53D",
        skipped: false,
        skippedReason: "None",
        upgradeClassOfService: "Y",
        upgradeType: "",
        clearanceType: "Standby",
        cabinClearanceTime: "2024-01-12T01:38:32.348Z",
        canBeClearedIntoCabin: true,
        canBeClearedIntoCabinStartingAt: "2024-01-10T21:00:00Z",
      },
    ],
    standby: [],
  },
  executionTimeInMilliseconds: 119,
};

*/
