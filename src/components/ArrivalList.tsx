import React from "react";
import { useTfl } from "../tfl/useTfl";

interface ArrivalListProps {
  id: string;
}

interface Prediction {
  id: string;
  stationName: string;
  lineName: string;
  destinationName: string;
  timeToStation: number;
}

export const ArrivalList: React.FC<ArrivalListProps> = ({ id }) => {
  const { result: arrivals, error } = useTfl<Prediction[]>(`${id}/Arrivals`);

  if (error !== undefined) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  if (arrivals === undefined) {
    return <p>Loading arrival predictions...</p>
  }

  return <ul>
    {arrivals.map(prediction => <li key={prediction.id}>Bus {prediction.lineName} to {prediction.destinationName} arriving in {prediction.timeToStation} seconds</li>)}
  </ul>
}
