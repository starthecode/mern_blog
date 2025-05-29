// pageFields.js

//Industry Page Fields
export const TwoInputs = {
  textInput1: '',
  textInput2: '',
};

export const ThreeInputs = {
  textInput1: '',
  textInput2: '',
  textInput3: '',
};

//services page fields

export const defaultThreeBoxesData = {
  ThreeBoxesInput1: '',
  ThreeBoxesInput2: '',
  ThreeBoxesInput3: '',
};

export const defaultApproachBoxesData = {
  approachInput1: '',
  approachInput2: '',
  approachInput3: '',
};

export const defaultOtherServicesData = {
  otherservicesInput1: '',
  otherservicesInput2: '',
  otherservicesInput3: '',
  otherservicesInput4: '',
};

//services page fields end
export const defaultSliderData = {
  sliderImage: null,
  smallText: '',
  titleText: '',
  subText: '',
  subTextTwo: '',
  subTextThree: '',
  buttonText: '',
  buttonUrl: '',
  buttonTextTwo: '',
  buttonUrlTwo: '',
  customClass: '',
  customClassTwo: '',
  isCustom: '',
};

export const defaultAboutData = {
  smallTitle: '',
  aboutTitle: '',
  embedField: '',
  descField: '',
  buttonText: '',
  buttonUrl: '',
  moreField: '',
};

export const defaultIndustryData = {
  industryIcon: '',
  industryName: '',
  industryId: '',
};

export const defaultWhyChooseData = {
  whychooseIcon: '',
  whychooseName: '',
  whychooseSubName: '',
  whychooseBtnName: '',
  whychooseBtnUrl: '',
  whychooseImage: '',
};

export const defaultTestimonialsData = {
  testimonialsImage: '',
  testimonialsName: '',
  testimonialsSubName: '',
  testimonialsSubText: '',
};

export const getContentByTemplate = (
  template,
  {
    currentSliderData = [],
    partnerTitle = '',
    currentPartnerData = [],
    servicesTitle = '',
    currentServicesData = [],
    aboutFields = {},
    industryTitle = '',
    currentIndustryData = [],
    whychooseTitle = '',
    currentWhychooseData = [],
    testimonialsTitle = '',
    currentTestimonialsData = [],
    blogTitle = '',
  } = {}
) => {
  switch (template) {
    case 'homepage':
      return [
        { type: 'slider', data: currentSliderData },
        {
          type: 'partner',
          data: { title: partnerTitle, items: currentPartnerData },
        },
        {
          type: 'services',
          data: { title: servicesTitle, items: currentServicesData },
        },
        { type: 'aboutus', data: aboutFields },
        {
          type: 'industry',
          data: { title: industryTitle, items: currentIndustryData },
        },
        {
          type: 'whychoose',
          data: { title: whychooseTitle, items: currentWhychooseData },
        },
        {
          type: 'testimonials',
          data: { title: testimonialsTitle, items: currentTestimonialsData },
        },
        { type: 'blog', data: blogTitle },
      ];

    case 'services':
      return [
        {
          type: 'services',
          data: { title: servicesTitle, items: currentServicesData },
        },
        { type: 'aboutus', data: aboutFields },
      ];

    case 'subservices':
      return [
        {
          type: 'services',
          data: { title: servicesTitle, items: currentServicesData },
        },
        {
          type: 'testimonials',
          data: { title: testimonialsTitle, items: currentTestimonialsData },
        },
      ];

    default:
      return [];
  }
};

export const tabsHomes = [
  { id: 'tab-sliderForm', label: 'Slider Section' },
  { id: 'tab-partnerComp', label: 'Partner Section' },
  { id: 'tab-aboutComp', label: 'About Section' },
  { id: 'tab-servicesComp', label: 'Services Section' },
  { id: 'tab-industryComp', label: 'Industry Section' },
  { id: 'tab-whychooseComp', label: 'WhyChoose Section' },
  { id: 'tab-blogComp', label: 'Blog Section' },
  { id: 'tab-testimonialsComp', label: 'Testimonials Section' },
];

export const tabsServices = [
  { id: 'tab-serviceBox1', label: 'Service Box 1' },
  { id: 'tab-serviceBox2', label: 'Service Box 2' },
  { id: 'tab-serviceBox3', label: 'Service Box 3' },
  { id: 'tab-serviceBox4', label: 'Service Box 4' },
  { id: 'tab-serviceBox5', label: 'Service Box 5' },
];

export const tabsIndustry = [
  { id: 'tab-industryBox1', label: 'Industry Box 1' },
  { id: 'tab-industryBox2', label: 'Industry Box 2' },
  { id: 'tab-industryBox3', label: 'Industry Box 3' },
  { id: 'tab-industryBox4', label: 'Industry Box 4' },
  { id: 'tab-industryBox5', label: 'Industry Box 5' },
  { id: 'tab-industryBox6', label: 'Industry Box 6' },
];
