import React from "react";
import { useTfl } from "../tfl/useTfl";

interface StopListProps {
  latitude: number;
  longitude: number;
}

interface StopPoint {
  naptanId: string;
  commonName: string;
  distance?: number;
}

interface StopPointsResponse {
  stopPoints: StopPoint[];
}

export const StopList: React.FC<StopListProps> = ({ latitude, longitude }) => {
  const { result: stops, error } = useTfl<StopPointsResponse>(`?lat=${latitude}&lon=${longitude}&stopTypes=NaptanPublicBusCoachTram&radius=500`);

  if (error !== undefined) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  if (stops === undefined) {
    return <p>Loading stops...</p>
  }

  return <ul>
    {stops.stopPoints.map(stop => <li key={stop.naptanId}>{stop.naptanId}: {stop.commonName}</li>)}
  </ul>
}
