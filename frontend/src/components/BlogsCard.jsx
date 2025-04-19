import React from 'react';
import { Heading } from './Heading/Heading';
import { PrimaryButton } from './Buttons/PrimaryButton';
import { SecondaryButton } from './Buttons/SecondaryButton';
import GlowLight from './extras/GlowLight';
import SvgLine4 from './lines/SvgLine4';

const blogItems = [
  {
    category: 'Fabric Integration',
    title:
      'Seamlessly Integrate D365 with Microsoft Fabric: Bizmetric’s Cost-Effective Accelerator',
    date: 'DEC 28, 2024',
    time: '2 MINS TO READ',
    image:
      'https://bizsiteuploads.blob.core.windows.net/uploads/blogcard-img01.jpg',
  },
  {
    category: 'Oracle Fusion Integration',
    title:
      'Overcoming ERP Data Challenges with Microsoft Fabric and Oracle Fusion Integration',
    date: 'DEC 28, 2024',
    time: '',
    image:
      'https://bizsiteuploads.blob.core.windows.net/uploads/blogcard-img02.jpg',
  },
  {
    category: 'Data Transformation',
    title:
      'How to Integrate Oracle Fusion with Microsoft Fabric for Data Transformation?',
    date: 'DEC 28, 2024',
    time: '2 MINS TO READ',
    image:
      'https://bizsiteuploads.blob.core.windows.net/uploads/blogcard-img03.jpg',
  },
];

export default function BlogsCard({ testimonialsData }) {
  return (
    <section
      className="relative px-40 pt-28 pb-40 z-10 bg-black"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://bizsiteuploads.blob.core.windows.net/uploads/1744992778190-back-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex text-center justify-center">
        <Heading type="" smallTitle={'Our Blogs'} title={'Tech Talks & News'} />
      </div>

      <GlowLight classes={'top-1/1 right-0 bg-junglegreen-500/40'} />

      <div className="">
        <div className="flex justify-end mb-6">
          <PrimaryButton title={'View All'} link={'/'} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden">
          {blogItems.map((blog, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 right-4 text-white transition">
                <SecondaryButton title={'Read More'} link={'/'} />
              </div>
              <div className="flex relative justify-center w-full items-center">
                <div className="w-[250px] absolute bottom-0 bg-black px-6 py-10">
                  <div className="inline-block mb-4 px-3 py-1 bg-junglegreen-500 text-xs rounded-full">
                    {blog.category}
                  </div>
                  <h2 className="text-xs font-medium leading-snug text-white">
                    {blog.title}
                  </h2>
                  <div className="text-xs mt-4 text-gray-400">
                    {blog.date} {blog.time && <span className="mx-2">|</span>}
                    {blog.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SvgLine4 />

      <div className="relative overflow-hidden z-10 mt-48">
        <div>
          <Heading
            type={''}
            smallTitle={'CLIENT TESTIMONIALS'}
            title={testimonialsData?.title}
          />
        </div>
        <div className="grid grid-cols-3 mt-14 gap-10 relative z-10">
          {testimonialsData?.items &&
            testimonialsData.items.map((item, index) => (
              <blockquote
                key={index}
                class="w-[370px] relative border-l border-t border-junglegreen-500/60  pt-1 p-0 max-w-6xl rounded-2xl overflow-hidden shadow-lg text-white  "
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
      </div>
      <GlowLight classes={'-left-10 bottom-10 bg-junglegreen-500/40'} />
      <div className="absolute bottom-10 -right-48 opacity-10">
        <img
          className="w-full"
          src="https://bizsiteuploads.blob.core.windows.net/uploads/quotes.png"
        />
      </div>
    </section>
  );
}
