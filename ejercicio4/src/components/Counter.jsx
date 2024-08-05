import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrese = () => {
    setCount(count + 100);
  };
  const handleDecrese = () => {
    setCount(count - 100);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrese}>+ 100</button>
      <button onClick={handleDecrese}>- 100</button>
    </>
  );
}
