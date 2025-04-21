import React from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { SecondaryButton } from '../Buttons/SecondaryButton';

export default function NewsCards({ data, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.15,
          ease: 'easeOut',
        },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.95,
        y: 50,
        transition: {
          duration: 0.4,
          ease: 'easeIn',
        },
      });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={controls}
      key={index}
      className="group relative rounded-xl overflow-hidden shadow-lg group"
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute top-4 right-4 text-white transition">
        <SecondaryButton title={'Read More'} link={'/'} />
      </div>
      <div className="flex relative justify-center w-full items-center">
        <div className="w-[250px] absolute bottom-0 bg-black px-6 py-10">
          <div className="inline-block mb-4 px-3 py-1 bg-junglegreen-500 text-xs rounded-full">
            {data.category}
          </div>
          <h2 className="text-xs font-medium leading-snug text-white">
            {data.title}
          </h2>
          <div className="text-xs mt-4 text-gray-400">
            {data.date} {data.time && <span className="mx-2">|</span>}
            {data.time}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
