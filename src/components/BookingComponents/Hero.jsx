import { NavLink } from "react-router";
import Form from "./Form";

const Hero = () => {
  return (
    <header className="relative mb-[15vh] lg:mb-0">
      <picture>
        <source
          srcSet="./images/booking/hero-bg-desktop@2x.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="./images/booking/hero-bg-tablet@2x.jpg"
          media="(min-width: 769px)"
        />
        <source
          srcSet="./images/booking/hero-bg-mobile@2x.jpg"
          media="(max-width: 768px)"
        />
        <img
          className="absolute -z-2 h-auto w-full"
          src="./images/booking/hero-bg-mobile@2x.jpg"
          alt="hero bg"
        />
      </picture>
      <article className="relative z-0 flex flex-col items-center py-[10%] text-center text-white lg:items-start lg:py-[4%] lg:text-left">
        <NavLink className="sm:self-start sm:pl-[10%]" to="/">
          <img src="./images/logo.svg" alt="logo" />
        </NavLink>
        <h1 className="light my-10 text-[32px] leading-[40px] tracking-[-0.4px] sm:text-[48px] sm:leading-[64px] sm:tracking-[-0.6px] lg:mt-[10%] lg:pl-[10%] lg:text-left lg:text-[80px] lg:leading-[80px] lg:tracking-[-1px]">
          Reservations
        </h1>
        <p className="mb-[10%] w-[78%] text-[16px] leading-[26px] tracking-[0px] sm:text-[20px] sm:leading-[30px] lg:w-[33%] lg:pl-[10%] lg:text-left">
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>
        <button className="semi-bold flex h-[64px] w-[245px] cursor-pointer items-center justify-center border-2 border-white bg-transparent text-[17px] leading-[16px] tracking-[2.5px] text-white duration-300 hover:border-white hover:bg-white hover:text-[#111] sm:hidden">
          RESERVE PLACE
        </button>
      </article>
      <Form />
    </header>
  );
};

export default Hero;
