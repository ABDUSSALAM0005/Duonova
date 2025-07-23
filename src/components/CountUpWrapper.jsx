// components/CountUpWrapper.jsx
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const CountUpWrapper = ({ end, duration = 5, delay = 2, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CountUp end={end} duration={duration} delay={delay}>
      {children}
    </CountUp>
  );
};

export default CountUpWrapper;
