import {useEffect} from 'react'
import { BsArrowDownRight } from "react-icons/bs";
import { href, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";


const services = [
  {
    num: '01',
    title: 'Frontend Web Dev',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea iste,',
    href:""
  },
  {
    num: '02',
    title: `Social Marketing`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea iste,',
    href:""
  },
  {
    num: '03',
    title: 'Graphics Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea iste,',
    href:""
  },
  {
    num: '04',
    title: 'Content Creation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ea iste,',
    href:""
  },
]


const Services = () => {

       useEffect(() => {
      AOS.init({
        duration: 2000,
        once: false,
      });
    }, [] );

  return (               
   <section data-aos="fade-left" className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className='container mx-auto'>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease: "easeIn"},
        }}
      className='grid grid-cols-1 xl:grid-cols-2 gap-[60px]'
      >
     {services.map(( service, index ) => {
      return (
     <div key={index} className='group'>
      {/*top*/}
        <div className='w-full flex justify-between items-center'>
          <div className='text-5xl font-extrabold text-transparent text-outline  transition-all duration-500'>{service.num}</div>
          <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45' >  
          <BsArrowDownRight className='text-primary text-3xl'/>
          </Link>
        </div>
        {/*service*/}
        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
        {/*descrition*/}
        <p className='text-white/60'>{service.description}</p>
        {/*border*/}
        <div className='border-b border-white/20 w-full'></div>

    </div>
      )
     })}
      </motion.div>
    </div>
   </section>
  )
}

export default Services