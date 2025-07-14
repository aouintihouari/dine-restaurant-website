import { useState } from "react";
import { NavLink } from "react-router";

const CelebrateTogether = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderData = [
    {
      title: "FAMILY GATHERING",
      heading: "Family Gathering",
      description:
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
      images: {
        desktop: "./images/homepage/family-gathering-desktop@2x.jpg",
        tablet: "./images/homepage/family-gathering-tablet@2x.jpg",
        mobile: "./images/homepage/family-gathering-mobile@2x.jpg",
      },
    },
    {
      title: "SPECIAL EVENTS",
      heading: "Special Events",
      description:
        "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
      images: {
        desktop: "./images/homepage/special-events-desktop@2x.jpg",
        tablet: "./images/homepage/special-events-tablet@2x.jpg",
        mobile: "./images/homepage/special-events-mobile@2x.jpg",
      },
    },
    {
      title: "SOCIAL EVENTS",
      heading: "Social Events",
      description:
        "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
      images: {
        desktop: "./images/homepage/social-events-desktop@2x.jpg",
        tablet: "./images/homepage/social-events-tablet@2x.jpg",
        mobile: "./images/homepage/social-events-mobile@2x.jpg",
      },
    },
  ];
  const currentSlide = sliderData[activeIndex];
  return (
    <section className="lg:flex-start relative mx-[10%] my-10 sm:my-36 lg:flex lg:gap-[10%]">
      <img
        className="absolute top-[-13vh] left-[-12%] -z-2 hidden sm:block"
        src="./images/patterns/pattern-curve-top-right.svg"
        alt="pattern curve top right"
      />
      <picture>
        <source
          srcSet={currentSlide.images.desktop}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={currentSlide.images.tablet}
          media="(min-width: 769px)"
        />
        <source
          srcSet={currentSlide.images.mobile}
          media="(max-width: 768px)"
        />
        <img
          src={currentSlide.images.mobile}
          alt={currentSlide.heading.toLowerCase()}
          className="h-auto w-full"
        />
      </picture>
      <img
        className="absolute top-[-5%] left-[-8%] hidden sm:block"
        src="./images/patterns/pattern-lines.svg"
        alt="pattern lines"
      />
      <article className="my-[10%] flex flex-col lg:mr-[10%] lg:flex-col-reverse">
        <ul className="semi-bold mx-auto text-center text-[17px] leading-[28px] tracking-[2.5px] sm:mx-0 sm:flex sm:gap-[10%] sm:text-left sm:whitespace-nowrap lg:mx-0 lg:flex-col lg:items-start lg:text-left">
          {sliderData.map((slide, index) => (
            <li
              key={index}
              className={`${
                activeIndex === index
                  ? "text-[#4C4C4C] opacity-100"
                  : "opacity-50"
              } relative my-1 cursor-pointer transition-colors duration-300 hover:text-[#242B37]`}
              onClick={() => setActiveIndex(index)}
            >
              {slide.title}
              {activeIndex === index && (
                <div className="absolute bottom-[-8px] left-1/2 -z-3 hidden h-0.5 w-12 -translate-x-1/2 transform bg-[#9E7F66] sm:block lg:bottom-[50%] lg:left-[-60%] lg:w-[50%] lg:transform-none"></div>
              )}
            </li>
          ))}
        </ul>
        <div className="lg:flex lg:flex-col lg:items-start lg:justify-start">
          <h5 className="bold my-3 text-center text-[32px] leading-[40px] tracking-[-0.4px] text-[#242B37] sm:my-8">
            {currentSlide.heading}
          </h5>
          <p className="regular w-[90%] text-center text-[16px] leading-[26px] tracking-[0px] text-[#242B37] sm:mx-auto sm:mb-6 sm:w-[60%] lg:mx-0 lg:text-left">
            {currentSlide.description}
          </p>
          <NavLink
            to="/booking"
            className="semi-bold mx-auto my-4 flex h-[64px] w-[245px] cursor-pointer items-center justify-center border-2 border-[#111] bg-[#111] text-[17px] leading-[16px] tracking-[2.5px] text-[#FFF] duration-300 hover:bg-transparent hover:text-[#111] lg:mx-0"
          >
            BOOK A TABLE
          </NavLink>
        </div>
      </article>
    </section>
  );
};

export default CelebrateTogether;
