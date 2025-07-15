"use client";

import { Button } from '../components/ui/button';
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import AOS from "aos";
import "aos/dist/aos.css";

import { 
    Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description:"(+234) 704 467 355"
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description:"duonova@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description:"kano, Nigeria"
  },

]

import { useEffect } from 'react'
import { motion } from 'framer-motion';

const Contact = () => {

   useEffect(() => {
      AOS.init({
        duration: 2000,
        once: false,
      });
    }, [] );
  return (
    <motion.section 
         // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      // }}
    className='py-4'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/*form*/}
          <div data-aos="fade-right" className='xl:w-[54%]  order-2 xl:order-none'>
            <form action="" className='flex flex-col gap-6 p-7 mb-5 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus, itaque
              </p>
              {/*input*/}
              <div className='grid grid-cols1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='firstname' />
                <Input type='lastname' placeholder='lastname' />
                <Input type='email' placeholder='Email address' />
                <Input type='phone' placeholder='Phone number' />
              </div>
              {/*select*/}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select a service</SelectLabel>
                    <SelectItem value='est'>Front end web development</SelectItem>
                    <SelectItem value='est'>Content Creation</SelectItem>
                    <SelectItem value='est'>Graphics Design</SelectItem>
                    <SelectItem value='est'>Social Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*textarea*/}
              <Textarea 
              className='h-[200px]' 
              placeholder='Type Your message here.'/>
              {/*btn*/}
              <div className='text-center md:text-start'>
              <Button size="lg" className='max-w-40'>Send Message</Button>
              </div>
            </form>
          </div>
          {/*info*/}
          <div data-aos="fade-left" className='flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return <li key={index} className='flex items-center gap-6' >
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact