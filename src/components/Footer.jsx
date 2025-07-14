import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-[#111] py-[10%] sm:flex-row sm:justify-start sm:gap-[20%] sm:px-[10%] lg:gap-[25%] lg:py-[5%]">
      <NavLink to="/" className="sm:self-start">
        <img src="./images/logo.svg" alt="logo footer" />
      </NavLink>
      <div className="flex flex-col gap-4 text-[14px] leading-[28px] tracking-[2px] text-white uppercase lg:flex-row-reverse lg:gap-[35%]">
        <ul className="mt-[20%] text-center whitespace-nowrap sm:mt-0 sm:text-left lg:mt-0">
          <li>Marthwaite, Sedbergh</li>
          <li>Cumbria</li>
          <li>+00 44 123 4567</li>
        </ul>
        <ul className="mt-[10%] text-center whitespace-nowrap sm:text-left lg:mt-0">
          <li>OPEN TIMES</li>
          <li>MON - FRI: 09:00 AM - 10:00 PM</li>
          <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
