import React from 'react';

const Vision = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-36 max-w-7xl">
        <div className="text-center">
          <h5 className="text-sm font-inter font-semibold tracking-wide uppercase">
            <span className="shadow-lg border border-woodsmoke-400/50 bg-gradient-to-b from-white to-transparent dark:bg-gradient-to-b dark:from-woodsmoke-950 dark:to-transparent transition-shadow relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-5 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
              <span className="bg-flamingo-500 dark:bg-gradient-to-r dark:from-flamingo-500 dark:to-flamingo-200 bg-clip-text text-transparent">
                Company Culture
              </span>
            </span>
          </h5>{' '}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="aos-init aos-animate"
          >
            {' '}
            <h3 className="text-4xl text-white">
              Mission, Vision and{' '}
              <span className="md:block text-onyx-500">Core Values</span>{' '}
            </h3>{' '}
          </div>
        </div>{' '}
        <h3 className="text-3xl font-normal text-white block mt-20">
          Our Core Values{' '}
        </h3>
        <div className="relative flex flex-wrap mt-10">
          <div className="absolute top-8 left-0 right-0 hidden lg:block h-[1px] -z-1">
            {' '}
            <div
              className="h-[1px] w-full bg-onyx-800"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              &zwnj;
            </div>{' '}
          </div>{' '}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 relative">
            {' '}
            <div className="w-full pb-4 border-b border-flamingo-500">
              {' '}
              <span
                data-aos="fade-down"
                data-aos-duration="500"
                className="flex text-2xl items-center justify-center w-16 h-16 mb-5 lg:mb-16 text-junglegreen-500 rounded-xl border bg-gradient-to-b from-onyx-950 to-onyx-700 shadow-massive"
              >
                {' '}
                P{' '}
              </span>{' '}
              <div>
                {' '}
                <p className="mt-12 text-lg font-medium leading-6 text-white">
                  {' '}
                  Proactively committed to our clients
                </p>{' '}
              </div>{' '}
            </div>
            <div className="w-full pb-4 border-b border-flamingo-500">
              {' '}
              <span
                data-aos="fade-down"
                data-aos-duration="1000"
                className="flex text-2xl items-center justify-center w-16 h-16 mb-5 lg:mb-16 text-junglegreen-500 rounded-xl border bg-gradient-to-tr from-onyx-950 to-onyx-700 shadow-massive"
              >
                {' '}
                A{' '}
              </span>{' '}
              <div>
                {' '}
                <p className="mt-12 text-lg font-medium leading-6 text-white">
                  {' '}
                  Allegiance to delivering optimized results
                </p>{' '}
              </div>{' '}
            </div>
            <div className="w-full pb-4 border-b border-flamingo-500">
              {' '}
              <span
                data-aos="fade-down"
                data-aos-duration="1500"
                className="flex text-2xl items-center justify-center w-16 h-16 mb-5 lg:mb-16 text-junglegreen-500 rounded-xl border bg-gradient-to-tr from-onyx-950 to-onyx-700 shadow-massive"
              >
                {' '}
                T{' '}
              </span>{' '}
              <div>
                {' '}
                <p className="mt-12 text-lg font-medium leading-6 text-white">
                  {' '}
                  Trust winning attitude
                </p>{' '}
              </div>{' '}
            </div>
            <div className="w-full pb-4 border-b border-flamingo-500">
              {' '}
              <span
                data-aos="fade-down"
                data-aos-duration="2500"
                className="flex text-2xl items-center justify-center w-16 h-16 mb-5 lg:mb-16 text-junglegreen-500 rounded-xl border bg-gradient-to-tr from-onyx-950 to-onyx-700 shadow-massive"
              >
                {' '}
                H{' '}
              </span>{' '}
              <div>
                {' '}
                <p className="mt-12 text-lg font-medium leading-6 text-white">
                  {' '}
                  Humbly connected to employees
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <ul className="grid grid-cols-1 list-none md:grid-cols-3 gap-2 mt-16">
          {' '}
          <li className="ring-white/10 ring-1 p-2 bg-gradient-to-t from-white/20 rounded-3xl lg:col-span-1">
            {' '}
            <div className="px-8 py-5 ring-1 ring-white/10 rounded-2xl shadow-massive bg-card/80 h-full">
              {' '}
              <p className="text-lg mt-12 font-display text-white lg:text-3xl">
                {' '}
                Mission Statement{' '}
              </p>{' '}
              <p className="mt-2 text-sm text-vanta-300">
                To simplify business decision-making through value-added data
                analytics solutions.
              </p>{' '}
            </div>{' '}
          </li>
          <li className="ring-white/10 ring-1 p-2 bg-gradient-to-t from-white/20 rounded-3xl lg:col-span-2">
            {' '}
            <div className="px-8 py-5 ring-1 ring-white/10 rounded-2xl shadow-massive bg-card/80 h-full">
              {' '}
              <p className="text-lg mt-12 font-display text-white lg:text-3xl">
                {' '}
                Vision Statement
              </p>{' '}
              <p className="mt-2 text-sm text-vanta-300">
                To be remembered as the company that seeks to bring out the best
                business results through data and analytics.
              </p>{' '}
            </div>{' '}
          </li>{' '}
        </ul>{' '}
      </div>{' '}
    </section>
  );
};

export default Vision;
