import React from 'react';
import { Heading } from './Heading/Heading';
import { PrimaryButton } from './Buttons/PrimaryButton';
import GlowLight from './extras/GlowLight';
import SvgLine4 from './lines/SvgLine4';

import NewsCards from './Cards/NewsCards';
import QuoteCards from './Cards/QuoteCards';

const blogItems = [
  {
    category: 'Fabric Integration',
    title:
      'Seamlessly Integrate D365 with Microsoft Fabric: Bizmetric’s Cost-Effective Accelerator',
    date: 'DEC 28, 2024',
    time: '2 MINS TO READ',
    image:
      'https://bizsiteuploads.blob.core.windows.net/uploads/1745393586343-blogcardimg01.webp',
  },
  {
    category: 'Oracle Fusion Integration',
    title:
      'Overcoming ERP Data Challenges with Microsoft Fabric and Oracle Fusion Integration',
    date: 'DEC 28, 2024',
    time: '',
    image:
      'https://bizsiteuploads.blob.core.windows.net/uploads/1745393596619-blogcardimg02.webp',
  },
  {
    category: 'Data Transformation',
    title:
      'How to Integrate Oracle Fusion with Microsoft Fabric for Data Transformation?',
    date: 'DEC 28, 2024',
    time: '2 MINS TO READ',
    image:
      'https://bizsiteuploads.blob.core.windows.net/uploads/1745393610946-blogcardimg03.webp',
  },
];

export default function ThreeBlogs({ testimonialsData }) {
  return (
    <section
      className="relative px-0 sm:px-0 md:px-10 lg:px-40 xl:px-40 pt-28 xl:pb-40 z-10 bg-black"
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
        <div className="flex justify-end sm:justify-center md:justify-center lg:justify-center xl:justify-end mb-6">
          <PrimaryButton title={'View All'} link={'/'} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden">
          {blogItems.map((blog, index) => (
            <NewsCards key={index} data={blog} index={index} />
          ))}
        </div>
      </div>
      <SvgLine4 />

      <div className="relative overflow-hidden z-10 mt-28 pb-20 xl:pb-0 xl:mt-48">
        <div>
          <Heading
            type={''}
            smallTitle={'CLIENT TESTIMONIALS'}
            title={testimonialsData?.title}
          />
        </div>
        <div className="flex flex-col justify-between items-center lg:grid lg:grid-cols-3 xl:grid-cols-3 mt-5 gap-10 relative z-10">
          {testimonialsData?.items &&
            testimonialsData.items.map((item, index) => (
              <QuoteCards data={item} index={index} />
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
