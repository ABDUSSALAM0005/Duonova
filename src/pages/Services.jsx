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
    description: `At Duonova, our talented frontend team brings over 2 years of hands-on experience in crafting beautiful, responsive websites.Whether it's HTML, CSS, JavaScript, Tailwind, or Bootstrap, we build sleek interfaces that work smoothly on any device. We dont just code we create digital experiences that leave a mark.`,
    href:""
  },
  {
    num: '02',
    title: `Social Marketing`,
    description: `Trying to boost your visibility online? Let Duonova handle it! Our certified experts specialize in SEO, targeted ad campaigns, and strategic content, helping you grow your presence across platforms like Instagram, TikTok, X (Twitter), LinkedIn, and more. With over 3 years of success stories, we turn followers into fans and clicks into clients.`,
    href:""
  },
  {
    num: '03',
    title: 'Graphics Design',
    description: `Need eye-catching visuals that speak for your brand? Duonova’s creative design team delivers it all logos, flyers, banners, magazine covers, YouTube thumbnails, channel art, and more. With sharp skills in Photoshop, Illustrator, and other industry tools, our work turns ideas into vibrant visuals that captivate.`,
    href:""
  },
  {
    num: '04',
    title: 'Content Creation',
    description: `From YouTube videos and ad reels to voiceovers and presentation scripts, Duonova helps you bring your vision to life. Whether you're promoting a product, growing your brand, or simply telling your story, our team offers high-quality video production, scripting, and editing to make your content stand out.`,
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
      // initial={{opacity:0}}
      // animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease: "easeIn"},
      //   }}
      className='grid grid-cols-1 xl:grid-cols-2 gap-[60px]'
      >
     {services.map(( service, index ) => {
      return (
     <div key={index} className='group' data-aos="zoom-in-up">
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