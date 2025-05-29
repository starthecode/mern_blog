import React from 'react';
import TestimonialsComp from './TestimonialsComp';
import BlogComp from './BlogComp';
import WhychooseComp from './WhychooseComp';
import IndustryComp from './IndustryComp';
import ServicesComp from './ServicesComp';
import AboutComp from './AboutComp';
import PartnerComp from './PartnerComp';
import SliderForm from './SliderComp';

export default function HomeFields({
  activeTab,
  sectionsRef,
  homepageFields,
  setHomepageFields,
}) {
  return (
    <div className="p-4">
      <div
        style={{ display: activeTab === 'tab-sliderForm' ? 'block' : 'none' }}
      >
        <SliderForm
          ref={(el) => (sectionsRef.current.slider = el)}
          slidersData={homepageFields?.slidersData}
        />
      </div>

      <div
        style={{ display: activeTab === 'tab-partnerComp' ? 'block' : 'none' }}
      >
        <PartnerComp
          ref={(el) => (sectionsRef.current.partner = el)}
          partnersData={homepageFields?.partnersData}
          partnerTitle={homepageFields?.partnerTitle}
          setPartnerTitle={setHomepageFields?.setPartnerTitle}
        />
      </div>

      <div
        style={{ display: activeTab === 'tab-aboutComp' ? 'block' : 'none' }}
      >
        <AboutComp
          aboutFields={homepageFields?.aboutFields}
          setAboutFields={setHomepageFields?.setAboutFields}
        />
      </div>

      <div
        style={{ display: activeTab === 'tab-servicesComp' ? 'block' : 'none' }}
      >
        <ServicesComp
          ref={(el) => (sectionsRef.current.services = el)}
          servicesData={homepageFields?.servicesData}
          servicesTitle={homepageFields?.servicesTitle}
          setServicesTitle={setHomepageFields?.setServicesTitle}
        />
      </div>

      <div
        style={{ display: activeTab === 'tab-industryComp' ? 'block' : 'none' }}
      >
        <IndustryComp
          ref={(el) => (sectionsRef.current.industry = el)}
          industryData={homepageFields?.industryData}
          industryTitle={homepageFields?.industryTitle}
          setIndustryTitle={setHomepageFields?.setIndustryTitle}
        />
      </div>

      <div
        style={{
          display: activeTab === 'tab-whychooseComp' ? 'block' : 'none',
        }}
      >
        <WhychooseComp
          ref={(el) => (sectionsRef.current.whychoose = el)}
          whychooseData={homepageFields?.whychooseData}
          whychooseTitle={homepageFields?.whychooseTitle}
          setWhychooseTitle={setHomepageFields?.setWhychooseTitle}
        />
      </div>

      <div style={{ display: activeTab === 'tab-blogComp' ? 'block' : 'none' }}>
        <BlogComp
          blogTitle={homepageFields?.blogTitle}
          setBlogTitle={setHomepageFields?.setBlogTitle}
        />
      </div>

      <div
        style={{
          display: activeTab === 'tab-testimonialsComp' ? 'block' : 'none',
        }}
      >
        <TestimonialsComp
          ref={(el) => (sectionsRef.current.testimonials = el)}
          testimonialsData={homepageFields?.testimonialsData}
          testimonialsTitle={homepageFields?.testimonialsTitle}
          setTestimonialsTitle={setHomepageFields?.setTestimonialsTitle}
        />
      </div>
    </div>
  );
}
