"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../components/ui/tooltip";

import { Link } from 'react-router-dom';
import thumb1 from "../assets/assets/work/thumb1.png"
import thumb2 from "../assets/assets/work/thumb2.png"
import thumb3 from "../assets/assets/work/thumb3.png"
import three from "../assets/assets/work/3d.png"
import chop from "../assets/assets/work/chopbites.png"
import WorkSliderBtns from '../components/WorkSliderBtns';
import AOS from "aos";
import "aos/dist/aos.css";
 
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit natus error minimarehenderit,",
    stack: [{name: "Html 5"}, {name: "CSS"}, {name: "javascript"}],
    image: thumb1,
    live: "",
    github:"",
  },
    {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit natus error minimarehenderit,",
    stack: [{name: "React"}, {name: "TailwindCSS"}, {name: "3Derei"}],
    image: three,
    live: "",
    github:"",
  },
    {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit natus error minimarehenderit,",
    stack: [{name: "Html 5"}, {name: "Bootstrap"}, {name: "javascript"}],
    image: chop,
    live: "",
    github:"",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index 
    const currentIndex = swiper.activeIndex;
    //update project slide based on current slide index
    setProject(projects[currentIndex]);
  }

   useEffect(() => {
      AOS.init({
        duration: 2000,
        once: false,
      });
    }, [] );

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease: "easeIn"},
        }}
      className="min-h-[100vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <h1 data-aos="zoom-in" className='h1 text-accent text-center pb-12'>Our Work</h1>
        <div className='flex flex-col xl:flex-row xl:gap-[30px] pb-5'>
          <div data-aos="fade-right" className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
            {/*outline num*/}
            <div
            className='text-8xl leading-none font-extrabold text-transparent text-outline'
            >
              {project.num}
              </div>
              {/*project category*/}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/*project description*/}
              <p className='text-white/60'>{project.description}</p>
              {/*stack*/}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/*remove the last coma*/}
                      {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              {/*border*/}
              <div className='border border-white/20'></div>
              {/*buttons*/}
              <div className='flex items-center gap-4'>
                {/*live project butoon*/}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>

                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>

                     <TooltipContent>
                      <p>Live Project</p>
                      </TooltipContent>   

                  </Tooltip>
                </TooltipProvider>
                </Link>

                            {/*github project butoon*/}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>

                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsGithub className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>

                     <TooltipContent>
                      <p>Github repository</p>
                      </TooltipContent>   

                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className='w-full xl:w-[50%]'>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}
            >
              {projects.map ((project, index) => {
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                  {/*overlay*/}
                  <div
                  className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'
                  ></div>
                  {/*image*/}
                  <div className='relative w-full h-full'>
                  <img src={project.image} className='w-full h-full object-cover ' />
                  </div>
                  </div>
                </SwiperSlide>;
              })}
              {/*slider buttons*/}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-10 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-transparent xl:bg-accent  rounded-lg hover:bg-accent text-primary text-primary text-[35px] w-[44px] h-[44px] justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work