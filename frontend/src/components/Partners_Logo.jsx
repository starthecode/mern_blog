// components/Partners_logo.jsx

import GlowLight from './extras/GlowLight';
import { Heading } from './Heading/Heading';
import SvgLine1 from './lines/SvgLine1';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function PartnersLogo({ data }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative p-8 px-24 py-20 overflow-hidden">
      <GlowLight classes={'top-1/1 right-0 bg-flamingo-600/40'} />
      <div>
        <Heading type={'dark'} title={data?.title} />
      </div>

      <div
        ref={ref}
        className="flex flex-wrap justify-start gap-6 md:gap-10 mt-10"
      >
        {data?.items &&
          data?.items?.map((partner, i) => (
            <motion.div
              key={i}
              className="w-28 h-28 md:w-25 md:h-25 rounded-full border border-junglegreen-400 flex items-center justify-center bg-white shadow-sm"
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInUp}
            >
              <img
                src={`${partner.partnersImage}`}
                alt={'partner logo'}
                className="max-w-[80%] max-h-[80%] object-contain"
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
