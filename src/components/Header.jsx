import {useEffect} from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button"
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {

  
       useEffect(() => {
      AOS.init({
        duration: 2000,
        once: false,
      });
    }, [] );

  return (
    <header className="py-5 xl:py-5  text-white">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <h1 data-aos="fade-right" className="text-4xl font-semibold">
            Duonova<span className="text-accent">.</span>
          </h1>
        </NavLink>

        <div data-aos="fade-left" className="hidden xl:flex items-center gap-8">
          <Nav />
          <NavLink to="/Contact">
            <Button variant="ghost">hire us</Button>
          </NavLink>

          {/* mobile nav*/}
      
        </div>
        <div data-aos="fade-left" className="xl:hidden">
            <MobileNav />
            </div>
      </div>
    </header>
  );
};

export default Header;
