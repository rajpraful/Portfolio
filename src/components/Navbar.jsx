import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, resume } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="md:px-16 px-6 w-full flex item-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-100 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            Praful &nbsp;
            <span className="md:hidden text-[12px] font-medium">
              (5+ years)
            </span>
            <span className="md:block hidden text-[14px] font-medium">
              | &nbsp;Frontend Developer (5+ years)
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row items-center gap-5 md:gap-10">
          {/* chang icon sccording to UI theme */}
          <a href="https://www.linkedin.com/in/praful-raj-h-m" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
              alt="LinkedIn"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
            />
          </a>
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
          <a href="/Praful_React_Profile.pdf" target="_blank">
            <img
              src={resume}
              alt="Resume"
              className="w-[36px] h-[36px] object-contain cursor-pointer rounded-full"
            />
          </a>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* chang icon sccording to UI theme */}
          <a href="https://www.linkedin.com/in/praful-raj-h-m" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
              alt="LinkedIn"
              className="w-[20px] h-[20px] object-contain cursor-pointer mr-4"
            />
          </a>
          <a href="/Praful_React_Profile.pdf" target="_blank">
            <img
              src={resume}
              alt="Resume"
              className="w-[20px] h-[20px] object-contain cursor-pointer rounded-full mr-4"
            />
          </a>
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[15px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
