import React from 'react';
import { motion } from 'framer-motion';

import { PrimaryButton } from '../Buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa6';
import { SecondaryButton } from '../Buttons/SecondaryButton';

export const LeftCard = ({ item }) => {
  const services_items =
    'text-base md:text-md lg:text-lg xl:text-xl xl:px-0 block !text-white font-inter font-normal flex flex-1';

  return (
    <>
      {item?.homeSliderMiniText && (
        <Link
          to="#"
          className="relative z-[1] shadow-xl overflow-hidden inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm bg-white rounded-full dark:bg-onyx-900 hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <p className="glow_animation relative text-xs bg-junglegreen-500 rounded-full !text-white px-4 py-1.5 mr-3">
            New
          </p>{' '}
          <p className="text-sm font-medium dark:!text-white">
            {item?.homeSliderMiniText}
          </p>
          <BiChevronRight className="ml-2 w-4 h-4" />
        </Link>
      )}

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="mb-4 text-center font-inter lg:text-left text-foreground text-3xl sm:text-xl md:text-xl xl:text-5xl sm:leading-none"
      >
        <span
          className="block text-[#F4FFFA00] bg-clip-text bg-gradient-to-b from-junglegreen-400 via-junglegreen-100 to-white leading-[60px]"
          dangerouslySetInnerHTML={{ __html: item.titleText }}
        />

        <span className="pb-2 text-transparent bg-clip-text bg-gradient-to-br dark:from-junglegreen-400 dark:via-junglegreen-500 dark:to-junglegreen-500 from-junglegreen-500 via-junglegreen-500 to-junglegreen-800 block md:ml-0">
          {item.homeSliderTitle2}
        </span>
      </motion.h1>
      {item.homeSliderDesc && (
        <p className="mb-8 max-w-md text-center text-lg font-medium text-ebony-700 dark:text-[#9ca3af]  lg:text-left">
          {item.homeSliderDesc}
        </p>
      )}

      {item.buttonText && (
        <div className="flex group align-baseline gap-5">
          <PrimaryButton title={item.buttonText} link={item.buttonUrl} />

          <SecondaryButton
            title={item.buttonTextTwo}
            link={item.homeSliderBtn2Url}
          />
        </div>
      )}

      {item.subText && item.subTextTwo && item.subTextThree && (
        <div className="flex flex-col items-center justify-center sm:justify-center md:justify-start w-full mt-14 border border-white bg-[linear-gradient(182deg,_#000000e0,_transparent)] rounded-3xl px-5 py-2">
          <div className="w-full flex gap-5 items-center sm:text-center md:text-left 2xl:text-left 2xl:gap-10">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              {item.subText && (
                <div className="block">
                  <span>
                    <img
                      className="w-[20px] flex object-contain"
                      src="/assets/uploads/insights.svg"
                    />
                  </span>
                  <div
                    className="hover:text-flamingo-400 !text-white font-medium"
                    dangerouslySetInnerHTML={{ __html: item.subText }}
                  />

                  <span className="text-[10px] leading-4 block text-slate-300">
                    Transform your legacy <br />
                    technology with AI-enabled processes.
                  </span>
                </div>
              )}
            </motion.div>
            <div className="border__seprator" />
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              {item.subTextTwo && (
                <div className="block">
                  <span>
                    <img
                      className="w-[20px] flex object-contain"
                      src="/assets/uploads/insights.svg"
                    />
                  </span>
                  <div
                    className="hover:text-flamingo-400 font-medium"
                    dangerouslySetInnerHTML={{ __html: item.subTextTwo }}
                  />
                  <span className="text-[10px] leading-4 block text-slate-300">
                    Adopt the best analytics <br />
                    and Data Analytics Services methodologies
                  </span>
                </div>
              )}
            </motion.div>
            <div className="border__seprator" />
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              <div className="block">
                <span>
                  <img
                    className="w-[20px] flex object-contain"
                    src="/assets/uploads/insights.svg"
                  />
                </span>
                <div
                  className="hover:text-flamingo-400 font-medium"
                  dangerouslySetInnerHTML={{ __html: item.subTextThree }}
                />
                <span className="text-[10px] leading-4 block text-slate-300">
                  Adopt the best analytics <br />
                  and Data Analytics Services methodologies
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};
