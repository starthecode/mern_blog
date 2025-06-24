import React from 'react';
import PartnersLogo from './Partners_Logo';
import AboutUs from './AboutUs';
import SvgLine1 from './lines/SvgLine1';

import { OverviewVerticles } from './OverviewVerticles';
import { Heading } from './Heading/Heading';
import IndustryAccordions from './DashComponents/IndustryAccordions';

const MultiSection = ({ sections }) => {
  return (
    <div className="h-full flex flex-col w-full">
      {sections.partnerslogo && <PartnersLogo data={sections.partnerslogo} />}
      <SvgLine1 />
      {sections.aboutus && <AboutUs data={sections.aboutus} />}
      <section
        className="relative pt-24 sm:pt-24 md:pt-24 lg:py-24 z-10"
        style={{
          backgroundImage: `url('https://bizsiteuploads.blob.core.windows.net/uploads/1744992778190-back-image.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="h-full max-w-full px-0 sm:px-0 md:px-40 lg:px-40 xl:px-40">
          <div className="flex text-center justify-center">
            <Heading
              type=""
              smallTitle={'Our Services'}
              title={'Simplifying the Digital Adoption Journey'}
            />
          </div>
          {sections.services && (
            <OverviewVerticles overviewData={sections.services?.items} />
          )}
        </div>
      </section>
      <IndustryAccordions />
    </div>
  );
};

export default MultiSection;
