import React from 'react';
import { Heading } from './Heading/Heading';
import SvgLine2 from './lines/SvgLine2';

import {
  FiTruck,
  FiSettings,
  FiActivity,
  FiHeart,
  FiSmartphone,
  FiShoppingBag,
} from 'react-icons/fi';
import GlowLight from './extras/GlowLight';
import { SecondaryButton } from './Buttons/SecondaryButton';
import { PrimaryButton } from './Buttons/PrimaryButton';
import { ServiceCards } from './ServiceCards';
import IndustryTabButton from './Buttons/IndustryTabButton';

const iconMap = {
  FiTruck,
  FiSettings,
  FiActivity,
  FiHeart,
  FiSmartphone,
  FiShoppingBag,
};

const contentData = {
  manufacturing: [
    {
      title: 'Cloud-based Custom Fleet Management Application',
      desc: 'We implemented real-time analytics and cloud-based...',
      image:
        'https://bizsiteuploads.blob.core.windows.net/uploads/industry-manufecturing-img.jpg',
    },
    {
      title:
        'Designing cloud-enabled environment for cost & resource efficiency',
      desc: 'We deployed the enterprise cloud solution...',
      image:
        'https://bizsiteuploads.blob.core.windows.net/uploads/industry-manufecturing-img.jpg',
    },
  ],
  logistics: [
    {
      title: 'AI-powered Logistics Optimization',
      desc: 'Streamlined delivery with predictive route planning.',
      image:
        'https://bizsiteuploads.blob.core.windows.net/uploads/industry-manufecturing-img.jpg',
    },
  ],
  // Add other tab content if needed
};

export const Services = ({ servicesdata, industrydata }) => {
  const [activeTab, setActiveTab] = React.useState('manufacturing');

  return (
    <section
      className="relative pt-24 sm:pt-24 md:pt-24 lg:pt-24 z-10"
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
            title={servicesdata?.title}
          />
        </div>{' '}
        <div className="w-full flex flex-col justify-center items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid xl:grid-cols-3 gap-10 mt-10 ">
          {servicesdata?.items?.map((item, index) => (
            <ServiceCards item={item} index={index} />
          ))}
        </div>
      </div>
      <SvgLine2 />
      <div className="h-full max-w-full px-0 sm:px-0 md:px-10 lg:px-20 xl:px-40 mt-20 pb-20 bg-white">
        <div className="flex w-full mb-10 pt-10">
          <Heading
            type="dark"
            smallTitle={'We serve multiple verticals'}
            title={industrydata?.title}
          />
        </div>
        {/* Tabs */}
        <GlowLight classes={'-left-20 bg-flamingo-600/40'} />
        <div className="h-full max-w-full relative z-10">
          <div className="flex gap-10 sm:gap-5 md:gap-5 lg:gap-8 overflow-x-auto pb-4">
            {industrydata?.items &&
              industrydata?.items?.map((tab, index) => {
                const IconComponent = iconMap[tab.industryIcon]; // get actual icon component

                return (
                  <IndustryTabButton
                    key={index}
                    tab={tab}
                    index={index}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    IconComponent={IconComponent}
                  />
                );
              })}
          </div>

          {/* Content */}
          <div className="grid grid-cols-4 gap-6 h-fit">
            <div className="col-span-3 h-fit">
              <div className="grid grid-cols-2 gap-6 mt-6">
                {(contentData[activeTab] || []).map((item, index) => (
                  <div
                    key={index}
                    className="group border rounded-2xl p-4 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="absolute">
                      <SecondaryButton title={''} link={''} />
                    </div>
                    <div className="grid grid-cols-2 py-10">
                      <div>
                        <h3 className="text-md font-normal mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>{' '}
                      <div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      </div>
                    </div>

                    <div />
                  </div>
                ))}
              </div>
            </div>
            <div className="group relative overflow-hidden mt-6 h-fit">
              <span className="absolute flex h-full items-center justify-center w-full">
                <PrimaryButton title={'Learn More'} link={'/'} />
              </span>
              <img
                src="https://bizsiteuploads.blob.core.windows.net/uploads/ai-img-learnmore.jpg"
                alt="learn more"
                className="w-full h-[270px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
