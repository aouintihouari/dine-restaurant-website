import { NavLink } from "react-router";

const Hero = () => {
  return (
    <header className="relative w-full">
      <picture>
        <source
          srcSet="./images/homepage/hero-bg-desktop@2x.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="./images/homepage/hero-bg-tablet@2x.jpg"
          media="(min-width: 769px)"
        />
        <source
          srcSet="./images/homepage/hero-bg-mobile@2x.jpg"
          media="(max-width: 768px)"
        />
        <img src="./images/homepage/hero-bg-mobile@2x.jpg" alt="hero bg" />
      </picture>
      <article className="absolute top-[27vh] h-[calc(100%-27vh)] w-full items-center bg-black text-white sm:top-[30vh] sm:h-[calc(100%-24vh)] lg:top-0 lg:left-0 lg:h-full lg:w-[33%] lg:px-[10%] lg:py-[2%]">
        <NavLink to="/">
          <img
            className="mx-auto py-[3%] lg:mx-0 lg:mb-[10vh] lg:px-[10%]"
            src="./images/logo.svg"
            alt="logo"
          />
        </NavLink>
        <div className="absolute flex flex-col items-center px-[5%] lg:w-full">
          <h1 className="light my-[10%] w-[60%] text-center text-[32px] leading-[40px] tracking-[-0.4px] sm:my-[5%] sm:w-[50%] sm:text-[48px] sm:leading-[64px] sm:tracking-[-0.6px] lg:mx-0 lg:mb-[5vh] lg:w-full lg:text-left lg:text-[80px] lg:leading-[80px] lg:tracking-[-1px]">
            Exquisite dining since 1989
          </h1>
          <p className="regular text-center text-[16px] leading-[26px] tracking-normal sm:w-[80%] sm:text-[20px] sm:leading-[30px] lg:mx-0 lg:w-[90%] lg:self-start lg:text-left">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <NavLink
            to="/booking"
            className="semi-bold mt-[6%] inline-flex h-[64px] w-[245px] cursor-pointer items-center justify-center border-2 border-white text-white uppercase duration-300 hover:border-white hover:bg-white hover:text-[#111] lg:self-start"
          >
            Book a table
          </NavLink>
        </div>
      </article>
    </header>
  );
};
export default Hero;
