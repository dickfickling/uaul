export type Cabin = "Front" | "Middle" | "Rear";

export type UpgradeData = {
  segment: any;
  pbts: Array<{
    cabin: Cabin;
    capacity: number;
    booked: number;
  }>;
  checkInSummaries: Array<{
    cabin: Cabin;
    capacity: number;
    total: number;
  }>;
  numberOfCabins: number;
  front: {
    cleared: Array<{
      isCheckedIn: boolean;
      checkinId: number;
      seatNumber: string;
      bookedCabin: Cabin;
      firstName: string;
      lastName: string;
      passengerName: string;
    }>;
    standby: Array<{
      isCheckedIn: boolean;
      checkinId: number;
      seatNumber: string;
      bookedCabin: Cabin;
      firstName: string;
      lastName: string;
      passengerName: string;
    }>;
  };
  middle: {
    cleared: Array<{
      isCheckedIn: boolean;
      checkinId: number;
      seatNumber: string;
      bookedCabin: Cabin;
      firstName: string;
      lastName: string;
      passengerName: string;
    }>;
    standby: Array<{
      isCheckedIn: boolean;
      checkinId: number;
      seatNumber: string;
      bookedCabin: Cabin;
      firstName: string;
      lastName: string;
      passengerName: string;
    }>;
  };
};
