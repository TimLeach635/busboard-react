import React from "react";
import { useTfl } from "../tfl/useTfl";

export const ErrorComponent: React.FC = () => {
  const { result: stops, error } = useTfl<any>(`Error/Not/A/Path`);

  if (error !== undefined) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  if (stops === undefined) {
    return <p>Loading stops...</p>
  }

  return <p>Shouldn't display! If you can read this, it's not worked</p>
}
