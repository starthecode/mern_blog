import React from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export const Heading = ({ type, smallTitle, title, subText }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        fontWeight: 500,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [inView, controls]);

  return (
    <div className="w-full text-center sm:text-center md:text-center xl:text-left">
      {smallTitle && (
        <div
          ref={ref}
          initial={{ y: -50, opacity: 0 }}
          animate={controls}
          className={`w-fit mb-4 px-3 py-3 border border-ebony-400/60 bg-gradient-to-b ${
            type == 'dark'
              ? 'from-white to-transparent'
              : 'from-woodsmoke-950 to-transparent'
          } transition-shadow relative inline-flex items-center rounded-tl-2xl rounded-tr-2xl rounded-br-2xl`}
        >
          <h5
            className={`text-sm font-semibold text-foreground sm:leading-none uppercase block text-[#F4FFFA00] bg-clip-text bg-gradient-to-b ${
              type == 'dark'
                ? 'from-flamingo-600 to-ebony-950'
                : 'from-junglegreen-500 to-white'
            }`}
          >
            <span>{smallTitle}</span>
          </h5>
        </div>
      )}

      <motion.h2
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        className={`block mb-5 sm:text-center md:text-center xl:text-left text-2xl sm:text-xl md:text-3xl xl:text-4xl text-[#F4FFFA00] bg-clip-text bg-gradient-to-b ${
          type == 'dark'
            ? 'from-black to-junglegreen-500'
            : 'from-white to-white/35'
        } leading-[40px]`}
      >
        {title}
      </motion.h2>
      <p>{subText}</p>
    </div>
  );
};
