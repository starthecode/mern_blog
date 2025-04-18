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
        'http://localhost:3000/assets/uploads/industry-manufecturing-img.jpg',
    },
    {
      title:
        'Designing cloud-enabled environment for cost & resource efficiency',
      desc: 'We deployed the enterprise cloud solution...',
      image:
        'http://localhost:3000/assets/uploads/industry-manufecturing-img.jpg',
    },
  ],
  logistics: [
    {
      title: 'AI-powered Logistics Optimization',
      desc: 'Streamlined delivery with predictive route planning.',
      image:
        'http://localhost:3000/assets/uploads/industry-manufecturing-img.jpg',
    },
  ],
  // Add other tab content if needed
};

export const Services = ({ servicesdata, industrydata }) => {
  const [activeTab, setActiveTab] = React.useState('manufacturing');

  return (
    <section
      className="relative sm:py-0 md:py-0 lg:pt-24  z-10"
      style={{
        backgroundImage: `url(http://localhost:3000/assets/uploads/back-image.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-full max-w-full px-40">
        <div className="flex text-center justify-center">
          <Heading
            type=""
            smallTitle={'Our Services'}
            title={servicesdata?.title}
          />
        </div>{' '}
        <div className="grid grid-cols-3 gap-10 mt-10 ">
          {servicesdata?.items?.map((item, index) => (
            <ServiceCards item={item} index={index} />
          ))}
        </div>
      </div>
      <SvgLine2 />
      <div className="h-full max-w-full px-40 mt-20 pb-20 bg-white">
        <div className="flex w-full mb-10 pt-10">
          <Heading
            type="dark"
            smallTitle={'We serve multiple verticals'}
            title={industrydata?.title}
          />
        </div>
        {/* Tabs */}
        <GlowLight classes={'-left-20 bg-flamingo-600/40'} />
        <div className="ml-auto mr-auto h-full max-w-full relative z-10">
          <div className="flex gap-10 overflow-x-auto pb-4">
            {industrydata?.items &&
              industrydata?.items?.map((tab, index) => {
                const IconComponent = iconMap[tab.industryIcon]; // get actual icon component

                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab.industryName)}
                    className={`px-5 py-8 w-[200px] rounded-lg shadow-sm text-center border ${
                      activeTab === tab.industryName
                        ? 'bg-junglegreen-500 border-junglegreen-200'
                        : 'bg-white'
                    } transition-all`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className={`text-md font-medium ${
                          activeTab === tab.industryName
                            ? 'text-white'
                            : 'text-junglegreen-500'
                        } transition-all`}
                      >
                        {IconComponent && <IconComponent size={24} />}
                      </span>
                      <span
                        className={`text-md font-medium ${
                          activeTab === tab.industryName
                            ? 'text-white'
                            : 'text-black'
                        } transition-all`}
                      >
                        {tab.industryName}
                      </span>
                    </div>
                  </button>
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
                src="http://localhost:3000/assets/uploads/ai-img-learnmore.jpg"
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
