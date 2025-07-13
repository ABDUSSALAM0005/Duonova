import React from 'react'

import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub/>, path:""},
    { icon: <FaLinkedinIn/>, path:""},
    { icon: <FaInstagram/>, path:""},
    { icon: <FaTwitter/>, path:""},
]

const Socials = ({containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
          return(
            <NavLink key={index} href={social.path} className={iconStyles} >
            {social.icon}
            </NavLink>
          )
        })}
    </div>
  )
}

export default Socials