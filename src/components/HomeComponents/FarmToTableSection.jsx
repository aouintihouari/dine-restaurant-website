const FarmToTableSection = () => {
  return (
    <>
      <section className="relative lg:flex lg:justify-between lg:px-[5%]">
        <picture className="flex justify-center">
          <source
            srcSet="./images/homepage/enjoyable-place-desktop@2x.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="./images/homepage/enjoyable-place-tablet@2x.jpg"
            media="(min-width: 769px)"
          />
          <source
            srcSet="./images/homepage/enjoyable-place-mobile@2x.jpg"
            media="(max-width: 768px)"
          />
          <img
            className="absolute top-[-15vh] w-[80%] lg:left-[5%] lg:w-[35%]"
            src="./images/homepage/enjoyable-place-mobile@2x.jpg"
            alt="enjoyable place"
          />
        </picture>
        <article className="relative mt-[40vh] flex flex-col items-center text-[#242B37] sm:mt-[30vh] lg:mt-[20vh]">
          <img
            className="absolute top-[-75%] left-[-55%] hidden sm:block lg:top-[0%] lg:left-[-60%]"
            src="./images/patterns/pattern-curve-top-right.svg"
            alt="curve top right"
          />
          <img
            className="absolute top-[-5vh] lg:left-[30%]"
            src="./images/patterns/pattern-divide.svg"
            alt="pattern divide"
          />
          <h2 className="bold mb-[5%] w-[60%] text-center text-[32px] leading-[40px] tracking-[-0.4px] sm:mb-[3%] sm:w-[45%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-0.5px] lg:ml-[0%] lg:w-[40%] lg:text-left">
            Enjoyable place for all the family
          </h2>
          <p className="regular mb-[15%] w-[82%] text-center text-[16px] leading-[26px] tracking-[0px] sm:mb-[12%] sm:w-[60%] sm:text-[20px] sm:leading-[30px] lg:ml-[0%] lg:w-[40%] lg:text-left">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </article>
      </section>
      <section className="relative lg:flex lg:flex-row-reverse lg:px-[5%]">
        <picture className="flex justify-center lg:w-[35%]">
          <source
            srcSet="./images/homepage/locally-sourced-desktop@2x.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="./images/homepage/locally-sourced-tablet@2x.jpg"
            media="(min-width: 769px)"
          />
          <source
            srcSet="./images/homepage/locally-sourced-mobile@2x.jpg"
            media="(max-width: 768px)"
          />
          <img
            className="w-[80%] lg:absolute lg:top-[30vh] lg:left-[45%] lg:w-[34.9%]"
            src="./images/homepage/locally-sourced-mobile@2x.jpg"
            alt="locally sourced"
          />
        </picture>
        <article className="relative flex flex-col items-center text-[#242B37] lg:mt-[40vh] lg:items-start">
          <img
            className="absolute top-[20%] right-[-50%] -z-2 hidden sm:block lg:top-[40vh] lg:right-[-36vw]"
            src="./images/patterns/pattern-curve-top-left.svg"
            alt="curve top left"
          />
          <img
            className="absolute top-[15%] mx-auto sm:top-[10%] lg:left-[0%]"
            src="./images/patterns/pattern-divide.svg"
            alt="pattern divide"
          />
          <img
            className="absolute top-[-30%] right-[5%] hidden sm:block lg:top-[30vh] lg:right-[-38%]"
            src="./images/patterns/pattern-lines.svg"
            alt="pattern lines"
          />
          <h2 className="bold mx-auto mt-[20%] mb-[5%] w-[60%] text-center text-[32px] leading-[40px] tracking-[-0.4px] sm:mt-[10%] sm:mb-[5%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-0.5px] lg:ml-[0%] lg:w-[40%] lg:text-left">
            The most locally sourced food
          </h2>
          <p className="regular mb-[15%] w-[82%] text-center text-[16px] leading-[26px] tracking-[0px] sm:mb-[12%] sm:w-[60%] sm:text-[20px] sm:leading-[30px] lg:ml-[0%] lg:w-[40%] lg:text-left">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </article>
      </section>
    </>
  );
};

export default FarmToTableSection;
