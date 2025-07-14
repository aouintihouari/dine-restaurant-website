import { NavLink } from "react-router";

const Reservation = () => {
  return (
    <section className="relative">
      <picture>
        <source
          srcSet="./images/homepage/ready-bg-desktop@2x.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="./images/homepage/ready-bg-tablet@2x.jpg"
          media="(min-width: 769px)"
        />
        <source
          srcSet="./images/homepage/ready-bg-mobile@2x.jpg"
          media="(max-width: 768px)"
        />
        <img
          className="absolute top-0 left-0"
          src=" ./images/homepage/ready-bg-mobile@2x.jpg"
          alt="ready bg"
        />
      </picture>
      <div className="relative z-0 flex flex-col px-[10%] py-[18%] text-white sm:py-[5%] lg:flex-row">
        <h6 className="bold text-center text-[32px] leading-[40px] tracking-[-0.4px] sm:text-[48px] sm:leading-[48px] sm:tracking-[-0.5px]">
          Ready to make a reservation?
        </h6>
        <NavLink
          to="/booking"
          className="semi-bold mx-auto my-[10%] flex h-[64px] w-[245px] cursor-pointer items-center justify-center border-2 border-white text-[17px] leading-[16px] tracking-[2.5px] duration-300 hover:border-white hover:bg-white hover:text-[#111] sm:my-[5%] lg:my-0"
        >
          BOOK A TABLE
        </NavLink>
      </div>
    </section>
  );
};

export default Reservation;
