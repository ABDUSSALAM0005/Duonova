import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function CountUpWrapper({ end, duration = 5, delay = 2, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('🟢 CountUpWrapper mounted for end=', end);
  }, []);

  if (!mounted) return null;

  return (
    <CountUp end={end} duration={duration} delay={delay}>
      {children}
    </CountUp>
  );
}

