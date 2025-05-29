import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Explore = () => {
  return (
    <div className="relative z-999 overflow-hidden rounded-[30px] bg-gradient-to-t from-white to-transparent dark:bg-gradient-to-t dark:from-woodsmoke-950 dark:to-woodsmoke-950/98 pt-25 px-4 sm:px-20 lg:px-27.5 mt-40">
      <div className="mx-auto lg:text-center">
        <div className="relative flex flex-wrap justify-center z-10">
          <div className="w-full px-4">
            <h5 className="text-sm font-inter font-semibold tracking-wide uppercase">
              <span className="shadow-lg border border-woodsmoke-400/50 bg-gradient-to-b from-white to-transparent dark:bg-gradient-to-b dark:from-woodsmoke-950 dark:to-transparent transition-shadow relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-5 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                <span className="bg-flamingo-500 dark:bg-gradient-to-r dark:from-flamingo-500 dark:to-flamingo-200 bg-clip-text text-transparent">
                  Explore Bizmetric
                </span>
              </span>
            </h5>

            <h1 className="mb-4 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
              Transforming Business with Cutting-Edge Technology Solutions{' '}
            </h1>

            <p className="text-onyx-300">
              {' '}
              we specialize in revolutionizing businesses through our advanced
              technology services. Our expertise in Artificial Intelligence
              empowers organizations to automate processes, enhance
              decision-making, and drive innovation. With our Data Analytics
              solutions, we help companies uncover valuable insights, optimize
              performance, and achieve data-driven success. Our Enterprise
              Applications are designed to streamline operations, improve
              efficiency, and support scalable growth. Partner with us to
              harness the power of technology and stay ahead in the competitive
              landscape.
            </p>
          </div>
        </div>{' '}
        <p className="text-vanta-300 mt-4  text-balance"></p>{' '}
        <div className="flex justify-center">
          <div className="p-1 w-[200px] rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
            <a
              className="*:select-none dark:shadow-flamingo-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-3xl border border-flamingo-600 bg-flamingo-500 px-4 text-base text-white shadow-md shadow-flamingo-200 before:absolute before:inset-0 before:rounded-3xl before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 hover:bg-flamingo-600 active:bg-flamingo-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-flamingo-600 dark:before:border-0 dark:before:border-t dark:before:border-flamingo-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-flamingo-700 dark:active:bg-flamingo-800 dark:active:before:from-flamingo-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&amp;>*:not(.sr-only)]:relative"
              href="https://test.com"
            >
              <span className="flex items-center text-nowrap">
                View All Services{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="ml-2 w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>{' '}
      <div className="relative grid gird-cols-1 mt-12 lg:mt-24 lg:grid-cols-3 md:grid-cols-2 justify-between flex-col gap-2 w-lg z-10">
        {' '}
        <div className="relative top-5 shadow-massive p-2 ring-1 ring-white/10 rounded-2xl lg:rounded-b-none hover:rounded-2xl duration-500 hover:-translate-y-6 overflow-hidden bg-card h-full flex flex-col justify-between">
          <Link href={'/'}>
            <h1 className="absolute flex flex-col items-center justify-center w-full h-full z-20 text-xl">
              Artificial Intelegence
            </h1>
            <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/50">
              <Image
                width={200}
                height={200}
                className="w-auto h-auto"
                src="/temp/5617146_2960599.jpg"
                alt="service img"
              />{' '}
            </div>
          </Link>
        </div>
        <div className="relative top-5 shadow-massive p-2 ring-1 ring-white/10 rounded-2xl lg:rounded-b-none hover:rounded-2xl duration-500 hover:-translate-y-6 overflow-hidden bg-card h-full flex flex-col justify-between">
          <Link href={'/'}>
            <h1 className="absolute flex flex-col items-center justify-center w-full h-full z-20 text-xl">
              Data Analytics
            </h1>
            <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/50">
              <Image
                width={200}
                height={200}
                className="w-auto h-auto"
                src="/temp/9509.jpg"
                alt="service img"
              />{' '}
            </div>
          </Link>
        </div>
        <div className="relative top-5 shadow-massive p-2 ring-1 ring-white/10 rounded-2xl lg:rounded-b-none hover:rounded-2xl duration-500 hover:-translate-y-6 overflow-hidden bg-card h-full flex flex-col justify-between">
          <Link href={'/'}>
            <h1 className="absolute flex flex-col items-center justify-center w-full h-full z-20 text-xl">
              Enterprice Applications
            </h1>
            <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/50">
              <Image
                width={200}
                height={200}
                className="w-auto h-auto"
                src="/temp/2151003719.jpg"
                alt="service img"
              />
            </div>
          </Link>
        </div>{' '}
      </div>
      <div className="absolute [mask-image:linear-gradient(to_bottom,transparent,white)] h-96 inset-x-0 opacity-60 rotate-0 text-gray-500/20 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-full inset-0 w-full"
        >
          <defs>
            <pattern
              height="32"
              id="grid-pattern"
              patternTransform="translate(0 -1)"
              patternUnits="userSpaceOnUse"
              width="32"
              x="50%"
              y="100%"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Explore;
