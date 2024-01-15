// HeroSection.js
'client only'
const HeroSection = () => {
  return (
    <section 
    className="
    h-screen 
    flex 
    items-center 
    border-b-0 
    bg-white 
    font-normal 
    text-dark-blue-text 
    px-5.6rem 
    mb-0 
    top-0 
    left-0 
    bottom-0 
    right-0 
    z-[-1]
    ">
      <div className="container items-center">
        <h1 className="load-hidden 
        font-bold 
        mb-3.2rem 
        text-left 
        md:text-4rem 
        md:text-center 
        sm:text-3.6rem 
        sm:line-loose 
        sm:text-3.5rem 
        sm:leading-[1.5] 
        sm:text-2.8rem
        "
        >
          Hi, my name is <span className="">Samuel</span>
          <br />
          I&apos;m a Frontend Developer.
        </h1>
        <p className="
        hero-cta 
        load-hidden 
        flex
        ">
          <a rel="noreferrer" 
            className="
            text-2.4rem 
            sm:text-2rem
            " 
            href="#about
            ">
          </a>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
