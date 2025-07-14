const MenuHighlights = () => {
  return (
    <section className="mt-[5vh] w-full bg-[#111] px-[10%] pb-[10%] lg:mt-[20vh] lg:flex lg:justify-between lg:gap-[10%] lg:pt-[15vh]">
      <article className="flex flex-col items-center lg:w-[40%] lg:items-start">
        <img
          className="mt-[15%]"
          src="./images/patterns/pattern-divide.svg"
          alt="pattern divide"
        />
        <h3 className="bold mx-auto mt-[10%] w-[80%] text-center text-[32px] leading-[40px] tracking-[-0.4px] text-white sm:text-[48px] sm:leading-[48px] sm:tracking-[-0.5px] lg:mx-0 lg:text-left">
          A few highlights from our menu
        </h3>
        <p className="regular my-[10%] text-center text-[16px] leading-[26px] tracking-[0px] text-white sm:my-[8%] sm:w-[70%] sm:text-[20px] sm:leading-[30px] sm:tracking-[0px] lg:mx-0 lg:text-left">
          We cater for all dietary requirements, but here's a glimpse at some of
          our diner's favourites. Our menu is revamped every season.
        </p>
      </article>

      <section className="sm:flex sm:flex-col sm:gap-[10%] lg:w-[50%] lg:gap-[5%]">
        {/* Seared Salmon Fillet */}
        <div className="sm:flex sm:items-start sm:gap-[8%] lg:items-center">
          <picture className="lg:w-[30%]">
            <source
              srcSet="./images/homepage/salmon-desktop-tablet@2x.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="./images/homepage/salmon-desktop-tablet@2x.jpg"
              media="(min-width: 769px)"
            />
            <source
              srcSet="./images/homepage/salmon-mobile@2x.jpg"
              media="(max-width: 768px)"
            />
            <img
              className="relative z-1 my-8"
              src="./images/homepage/salmon-mobile@2x.jpg"
              alt="salmon"
            />
          </picture>
          <img
            className="absolute left-[30%] -z-0 mt-[5%] hidden sm:block lg:left-[60%] lg:mt-[-7%]"
            src="./images/patterns/pattern-divide.svg"
            alt="divide icon"
          />
          <div className="text-center text-white sm:mt-8 sm:text-left lg:mx-0 lg:w-[65%] lg:text-left">
            <h4 className="bold mb-4 text-[20px] leading-[24px] tracking-[-0.25px]">
              Seared Salmon Fillet
            </h4>
            <p className="regular mx-auto w-[90%] text-[16px] leading-[26px] tracking-[0px] sm:mx-0">
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </div>
        <div className="my-5 h-0.25 w-full bg-[#fff]"></div>
        {/* Rosemary Filet Mignon */}
        <div className="sm:flex sm:items-start sm:gap-[8%] lg:items-center">
          <picture className="lg:w-[30%]">
            <source
              srcSet="./images/homepage/beef-desktop-tablet@2x.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="./images/homepage/beef-desktop-tablet@2x.jpg"
              media="(min-width: 769px)"
            />
            <source
              srcSet="./images/homepage/beef-mobile@2x.jpg"
              media="(max-width: 768px)"
            />
            <img
              className="relative z-1 my-8"
              src="./images/homepage/beef-mobile@2x.jpg"
              alt="beef"
            />
          </picture>
          <img
            className="absolute left-[30%] -z-0 mt-[5%] hidden sm:block lg:left-[60%] lg:mt-[-7%]"
            src="./images/patterns/pattern-divide.svg"
            alt="divide icon"
          />
          <div className="text-center text-white sm:mt-8 sm:text-left lg:mx-0 lg:w-[65%] lg:text-left">
            <h4 className="bold mb-4 text-[20px] leading-[24px] tracking-[-0.25px]">
              Rosemary Filet Mignon
            </h4>
            <p className="regular mx-auto w-[90%] text-[16px] leading-[26px] tracking-[0px] sm:mx-0">
              Our prime beef served to your taste with a delicious choice of
              seasonal sides.
            </p>
          </div>
        </div>
        <div className="my-5 h-0.25 w-full bg-[#fff]"></div>
        {/* Summer Fruit Chocolate Mousse */}
        <div className="sm:flex sm:items-start sm:gap-[8%] lg:items-center">
          <picture className="lg:w-[30%]">
            <source
              srcSet="./images/homepage/chocolate-desktop-tablet@2x.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="./images/homepage/chocolate-desktop-tablet@2x.jpg"
              media="(min-width: 769px)"
            />
            <source
              srcSet="./images/homepage/chocolate-mobile@2x.jpg"
              media="(max-width: 768px)"
            />
            <img
              className="relative z-1 my-8"
              src="./images/homepage/chocolate-mobile@2x.jpg"
              alt="chocolate mousse"
            />
          </picture>
          <img
            className="absolute left-[30%] -z-0 mt-[5%] hidden sm:block lg:left-[60%] lg:mt-[-7%]"
            src="./images/patterns/pattern-divide.svg"
            alt="divide icon"
          />
          <div className="text-center text-white sm:mt-8 sm:text-left lg:mx-0 lg:w-[65%] lg:text-left">
            <h4 className="bold mb-4 text-[20px] leading-[24px] tracking-[-0.25px]">
              Summer Fruit Chocolate Mousse
            </h4>
            <p className="regular mx-auto w-[90%] text-[16px] leading-[26px] tracking-[0px] sm:mx-0">
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MenuHighlights;
