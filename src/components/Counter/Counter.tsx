import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  }

  return <button onClick={onClick}>Current count: {count}</button>
}
