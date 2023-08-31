import { useState, useEffect } from "react";

interface TflResponse<TResult> {
  result?: TResult;
  error?: any;
}

export const useTfl = <TResult>(
  path: string
): TflResponse<TResult> => {
  const [result, setResult] = useState<TResult>();
  const [error, setError] = useState<any>();

  useEffect(
    () => {
      fetch(`https://api.tfl.gov.uk/StopPoint/${path}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return response.json();
        })
        .then(result => setResult(result as TResult))
        .catch(setError);
    },
    [path]
  );

  return {
    result: result,
    error: error,
  };
}
