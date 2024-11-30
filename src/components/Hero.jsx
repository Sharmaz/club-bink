import { useRef } from 'react';

import BinkLogo from '../assets/images/bink_logo.svg';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function Hero() {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <section ref={ref} className="text-2xl text-slate-300 mx-4 mb-10 mt-36 md:text-5xl max-w-screen-lg md:pl-8 md:mx-auto relative">
      <span className="block relative p-[3px_2px] hero-style before:content-['Club Bink,'] before:orange-gradient before:animation-delay-0">Club Bink</span>
      <span className="block relative p-[3px_2px] hero-style before:content-['Tu red de confianza para intercambio de Bitcoins'] before:red-gradient before:animation-delay-3">Tu red de confianza.</span>
      <div className={`absolute top-0 right-0 md:right-8 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:-translate-x-20' : 'md:opacity-0'}`}>
        <img
          className="w-28 md:w-full"
          srcSet={`${BinkLogo} 112w, ${BinkLogo} 800w`}
          sizes="(max-width: 767px) 112px, 800px"
          src={BinkLogo}
          width={262}
          height={244}
          alt="gradient cup"
        />
      </div>
    </section>
  );
}

export default Hero;
