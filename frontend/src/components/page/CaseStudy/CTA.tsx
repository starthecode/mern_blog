import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

export const CTA = ({ ctatext }: any) => {
  return (
    <div className="container min-h-[20vh] relative overflow-hidden py-20 mt-20">
      <div className="mask_left mask_right mask_top mask-bottom absolute inset-0 -top-20 dark:bg-grid-white/10 bg-grid-gray-100"></div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <div className="flex flex-col justify-center items-center w-[600px]">
          <h1 className="mb-2 font-inter text-center text-foreground text-4xl sm:leading-none">
            <span className="block text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
              Get started today with Bizmetric to kickstart your Digital Journey{' '}
            </span>
          </h1>

          <p className="text-base text-center">{ctatext}</p>
        </div>
        <div className="mt-10">
          <div className="flex align-baseline">
            <div className="p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
              <Link
                href={''}
                className="dark:shadow-flamingo-500/10 dark:text-white group relative z-[1] flex w-full h-11 items-center justify-center gap-1.5 rounded-3xl border border-flamingo-600 bg-flamingo-500 px-4 text-base text-white shadow-md shadow-flamingo-200 before:absolute before:inset-0 before:rounded-3xl before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 hover:bg-flamingo-600 active:bg-flamingo-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-flamingo-600 dark:before:border-0 dark:before:border-t dark:before:border-flamingo-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-flamingo-700 dark:active:bg-flamingo-800 dark:active:before:from-flamingo-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none"
              >
                <span className="flex items-center text-nowrap">
                  {'Talk to Our Expert'}
                  <ArrowLongRightIcon className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>

            <a
              href={''}
              className="flex items-center px-8 font-medium text-ebony-700 hover:text-flamingo-500 text-sm "
            >
              {'Read More'}
              <ArrowLongRightIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
