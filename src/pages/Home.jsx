import {useEffect} from "react";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/ui/Socials";
import Photo from "../assets/Photo";
import Stats from "../components/Stats";
import Services from "./Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "./Resume";



const Home = () => {

     useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, [] );

  return (

    <section className="h-full">
      <div  className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-18">
          {/*text*/}

          <div data-aos="fade-up" className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">— Creative Tech Studio</span>
            <h1 className="h1 mb-">
            welcome to <br /> <span className="text-accent">Duonova</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              we excel at crafting digital experiences and prefecient in grahics design,content writing and more.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download our CV</span>
                <FiDownload className="text-xl"/>
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
      </div>
      <div className="pt-28" data-aos="zoom-in-up">
        <h1 className="h1 text-center text-accent hidden xl:block">Our Services</h1>
      <Services />  
      </div>
      <div className="pt-30 xl:pt-0" data-aos="zoom-in-up">
        <h1 className="h1 text-center text-accent hidden xl:block">Resume</h1>
      <Resume />
      </div>
    </section>

    // </motion.div>
  );
};

export default Home;
