
import { useEffect, useState } from "react";

const Timers = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((previous) => previous + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">
        useEffect Timer
      </h1>

      <h2 className="text-3xl font-semibold text-blue-600">
        Seconds: {seconds}
      </h2>
    </div>
  );
};

export default Timers;
