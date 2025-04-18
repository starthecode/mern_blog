// AboutusComp.jsx
import React from 'react';
import { PrimaryButton } from './Buttons/PrimaryButton';
import { Heading } from './Heading/Heading';
import GlowLight from './extras/GlowLight';

const AboutUs = ({ data }) => {
  return (
    <section className="px-24 pb-24 -mt-[300px]">
      <GlowLight classes={'top-[25%] left-0 bg-flamingo-600/40'} />
      <div className="max-w-7xl mx-auto">
        <Heading
          type="dark"
          smallTitle={data?.smallTitle}
          title={data?.aboutTitle}
        />
        <div className="grid md:grid-cols-2 gap-12 items-start pt-10">
          {/* Video */}
          <div className="w-full">
            <div
              className="relative border border-junglegreen-400 rounded-xl p-3 w-fit"
              dangerouslySetInnerHTML={{ __html: data?.embedField }}
            />
          </div>

          {/* Text Content */}
          <div>
            <p
              className="text-gray-700 text-md mb-8"
              dangerouslySetInnerHTML={{ __html: data?.descField }}
            />

            <PrimaryButton title={data.buttonText} link={data.buttonUrl} />
            {/* Stats */}
            <div
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
              dangerouslySetInnerHTML={{ __html: data?.moreField }}
            />
          </div>
        </div>
      </div>
      <GlowLight classes={'right-0 bg-flamingo-600/40'} />
    </section>
  );
};

export default AboutUs;
