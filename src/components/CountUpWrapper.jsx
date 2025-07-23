import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function CountUpWrapper({ end, duration = 5, delay = 3, className }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CountUp
      end={end}
      duration={duration}
      delay={delay}
      enableScrollSpy={true}
      scrollSpyOnce={true}
      scrollSpyDelay={200}
    >
      {({ countUpRef }) => (
        <span ref={countUpRef} className={className} />
      )}
    </CountUp>
  );
}
