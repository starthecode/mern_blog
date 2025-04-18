import React from 'react';
import { Heading } from './Heading/Heading';
import GlowLight from './extras/GlowLight';

export default function Testimonials({ data }) {
  return (
    <div className="m-auto relative px-40 pb-40 pt-32 overflow-hidden z-10 bg-gradient-to-b from-black via-black to-black/90">
      <div>
        <Heading
          type={''}
          smallTitle={'CLIENT TESTIMONIALS'}
          title={data?.title}
        />
      </div>
      <GlowLight classes={'-left-20 bg-junglegreen-500/40'} />

      <div className="grid grid-cols-3 mt-14 gap-10 relative z-10">
        {data?.items &&
          data.items.map((item, index) => (
            <blockquote
              key={index}
              class="w-[370px] relative border-l border-t border-white/30  pt-1 p-0 max-w-6xl rounded-2xl overflow-hidden shadow-lg text-white  "
            >
              <div class="p-4 lg:p-6 rounded-3xl relative group h-full pt-16 pb-20 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                <div class="block items-center">
                  <div class="flex-grow">
                    <div class="text-sm text-gray-500">
                      <span class="text-xs font-bold text-gray-400 mr-1">
                        ★★★★★
                      </span>
                    </div>
                  </div>
                  <h3 class="mt-1 text-md font-bold text-white">
                    {item?.testimonialsName}
                  </h3>
                  <span class="text-xs font-medium text-flamingo-500">
                    Experienced Billing Manager
                  </span>
                  <p class="pt-2 text-sm text-woodsmoke-300">
                    Bizmetric renders outstanding Oracle Services. Their
                    expertise in delivering a high-performance Data Analytics
                    Solu...
                  </p>
                </div>
              </div>
            </blockquote>
          ))}
      </div>
      <div className="absolute top-32 -right-48 opacity-10">
        <img className="w-full" src="/assets/uploads/quotes.png" />
      </div>
    </div>
  );
}
