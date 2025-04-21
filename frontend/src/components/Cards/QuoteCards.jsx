import React from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function QuoteCards({ data, index }) {
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
        x: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.15,
          ease: 'easeIn',
        },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.95,
        x: 50,
        transition: {
          duration: 0.4,
          ease: 'easeOut',
        },
      });
    }
  }, [inView, controls, index]);

  return (
    <motion.blockquote
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, x: 50 }}
      animate={controls}
      key={index}
      class="w-[370px] relative border-l border-t border-b border-junglegreen-500/60 pt-1 pb-10 max-w-6xl rounded-2xl shadow-lg text-white"
    >
      <div class="p-4 lg:p-6 rounded-3xl relative group h-full pt-16 pb-20 bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div class="block items-center">
          <div class="flex-grow">
            <div class="text-sm text-gray-500">
              <span class="text-xs font-bold text-gray-400 mr-1">★★★★★</span>
            </div>
          </div>
          <h3 class="mt-1 text-md font-bold text-white">
            {data?.testimonialsName}
          </h3>
          <span class="text-xs font-medium text-flamingo-500">
            Experienced Billing Manager
          </span>
          <p class="pt-2 text-sm text-woodsmoke-300">
            Bizmetric renders outstanding Oracle Services. Their expertise in
            delivering a high-performance Data Analytics Solu...
          </p>
        </div>
      </div>
    </motion.blockquote>
  );
}
