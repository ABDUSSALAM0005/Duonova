import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const CountUpWrapper = ({ end, duration = 5, delay = 2, className = "", ...props }) => {
  const [mounted, setMounted] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <CountUp end={end} duration={duration} delay={delay} ref={countUpRef} {...props}>
      {({ countUpRef }) => (
        <span ref={countUpRef} className={className}></span>
      )}
    </CountUp>
  ) : null;
};

export default CountUpWrapper;
