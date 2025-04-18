import React from 'react';
import PartnersLogo from './Partners_Logo';
import AboutUs from './AboutUs';
import SvgLine1 from './lines/SvgLine1';
import SvgLine2 from './lines/SvgLine2';
import Industry from './Industry';
import { Services } from './Services';

const MultiSection = ({ sections }) => {
  console.log('sections', sections);

  return (
    <div className="h-full flex flex-col w-full">
      {sections.partner && <PartnersLogo data={sections.partner} />}
      <SvgLine1 />
      {sections.aboutus && <AboutUs data={sections.aboutus} />}

      {sections.services && sections.industry && (
        <Services
          servicesdata={sections.services}
          industrydata={sections.industry}
        />
      )}
    </div>
  );
};

export default MultiSection;
