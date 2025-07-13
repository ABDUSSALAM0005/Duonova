import React from "react";
import CountUp, { useCountUp } from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of expereince",
  },
  {
    num: 15,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className=" mx-auto">
       <div className="grid grid-cols-2 gap-y-6 gap-x-4 max-w-[80vw] mx-auto lg:grid-cols-4 xl:max-w-none">
          {stats.map((stat, index) => {

            {/*Decimals*/}
            //   const isFloat = !Number.isInteger(stat.num);
            //   const decimalPlaces = isFloat ? stat.num.toString().split(".")[1]?.length || 1 : 0;
            return (
       
                <CountUp end={stat.num} duration={5} delay={2}>
                  {({ countUpRef }) => (
                    <div 
                    key={index}
                    className="flex gap-4 items-center justify-center  xl:justify-start">
                      <span
                        ref={countUpRef}
                        className="text-4xl xl:text-6xl font-extrabold"
                      />
                    <p
                      className={`${stat.text.length > 10  ? "max-w-[100px]" : "max-w-[150px]"} leading-snug   text-white/80`}>
                        {stat.text}
                    </p>
                    </div>
                  )}
                </CountUp>

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
