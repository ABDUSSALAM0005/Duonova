import {useEffect} from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { FiDownload, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import Socials from "../components/ui/Socials";
import Photo from "../assets/Photo";
import Stats from "../components/Stats";
import Services from "./Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "./Resume";
import Work from "./Work";
import  Contact  from "./Contact";
import { CTA } from "../components/CTA";
import { MotionConfig } from "framer-motion";



const Home = () => {

 useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, [] );

  return (

    <section className="h-full">
      <motion.div
      initial={{opacity:0}}
      animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease: "easeIn"},
        }} 
      className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-18">
          {/*text*/}

          <div data-aos="fade-right" className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">— Creative Tech Studio</span>
            <h1 className="h1 mb-">
            welcome to <br /> <span className="text-accent">Duonova </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              we're a dynamic digital agency passionate about crafting bold experiences.From stunning visuals and smart code to powerful content and marketing.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 group">
                <Link
                 to="/Resume"
                >Leran more</Link>
                {/* <FiPhone className="text-xl group"/> */}
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>

          </div>
          
          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
            
        </div>
        <Stats/>
      </motion.div>
    </section>

    // </motion.div>
  );
};

export default Home;
