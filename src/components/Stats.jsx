import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { num: 2, text: "Years of experience" },
  { num: 15, text: "Projects completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 500, text: "Code commits" },
];

const Stats = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="mx-auto">
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 max-w-[80vw] mx-auto lg:grid-cols-4 xl:max-w-none">
          {stats.map((stat, index) => (
            <div key={index} className="flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                )}
              </CountUp>
              <p
                className={`${stat.text.length > 10
                  ? "max-w-[100px]"
                  : "max-w-[150px]"
                  } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="flex gap-4 items-center justify-center xl:justify-start"
    >
      {inView && (
        <CountUp
          end={stat.num}
          duration={3}
          className="text-4xl xl:text-6xl font-extrabold"
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
      )}
      <p
        className={`${
          stat.text.length > 10 ? "max-w-[100px]" : "max-w-[150px]"
        } leading-snug text-white/80`}
      >
        {stat.text}
      </p>
    </div>
  );
};

export default Stats;
