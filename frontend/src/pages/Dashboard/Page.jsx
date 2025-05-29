import React from 'react';
import PageHead from '../../components/DashComponents/PageHead';
import PublishPanel from '../../components/DashComponents/PublishPanel';
import TextEditor from '../../components/TextEditor';
import toast from 'react-hot-toast';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import FooterCtaComp from '../../components/DashComponents/FooterCtaComp';
import SeoPanel from '../../components/DashComponents/SeoPanel';
import { usePageTitle } from '../../utils/pathName';
import {
  defaultAboutData,
  defaultApproachBoxesData,
  defaultIndustryData,
  defaultOtherServicesData,
  defaultSliderData,
  defaultTestimonialsData,
  defaultThreeBoxesData,
  defaultWhyChooseData,
  ThreeInputs,
  tabsHomes,
  tabsIndustry,
  tabsServices,
  TwoInputs,
} from '../../lib/pageFields';
import HomeFields from '../../components/DashComponents/Slider/HomeFields';
import ServicesFields from '../../components/DashComponents/Slider/ServicesFields';
import TemplateDropdown from '../../components/DashComponents/TemplateDropdown';
import IndustryFields from '../../components/DashComponents/Slider/IndustryFields';
import ParentPageDropdown from '../../components/DashComponents/ParentPageDropdown';
import CustomMeta from '../../components/DashComponents/CustomMeta';
import PostMetaFields from '../../components/DashComponents/PostMetaFields';

export const Page = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [postid, setPostId] = React.useState('');

  const [pageDate, setPageDate] = React.useState('');

  const [actionType, setActionType] = React.useState('');

  const [ctaField, setCtaField] = React.useState(false);

  const [templateField, setTemplateField] = React.useState('default');

  const [parentpageField, setParentPageField] = React.useState([]);

  const [title, setTitle] = React.useState('');
  const [editorContent, setEditorContent] = React.useState('{}');

  const [metaData, setMetaData] = React.useState({
    featuredImage: '',
  });

  const [homepageFields, setHomepageFields] = React.useState({
    slidersData: [defaultSliderData],
    aboutFields: [defaultAboutData],
    partnerTitle: '',
    partnersData: [
      {
        partnerImage: null,
        caseStudyUrl: '',
      },
    ],
    servicesTitle: '',
    servicesData: [
      {
        servicesImage: null,
        servicesName: '',
        servicesDesc: '',
      },
    ],
    industryTitle: '',
    industryData: [defaultIndustryData],
    whychooseTitle: '',
    whychooseData: [defaultWhyChooseData],
    testimonialsTitle: '',
    testimonialsData: [defaultTestimonialsData],
    blogTitle: '',
  });

  //Services Page Fields State
  const [servicesFields, setServicesFields] = React.useState({
    ThreeBoxesData: [defaultThreeBoxesData],
    OverviewBoxesData: [
      {
        servicesImage: '',
        servicesName: '',
        servicesDesc: '',
      },
    ],

    whyboxFields: [
      {
        whyboxDesc: '',
        whyboxImage: '',
      },
    ],
    approachData: [defaultApproachBoxesData],
    otherservicesData: [defaultOtherServicesData],
  });

  //Industry Page Fields State
  const [industryState, setIndustryState] = React.useState({
    industryBox1Fields: [TwoInputs],
    industryBox2Fields: [ThreeInputs],
    industryBox3Fields: [ThreeInputs],
    industryBox4Fields: [ThreeInputs],
    industryBox5Fields: [ThreeInputs],
    industryBox6Fields: [ThreeInputs],
  });

  const [seoFields, setSeoFields] = React.useState({
    focusKeyphrase: '',
    seoTitle: '',
    seoDescription: '',
  });

  const [customMetaFields, setCustomMetaFields] = React.useState({
    customMetaTitle: '',
    customMetaDesc: '',
    customMetaLink: '',
  });

  const [activeTab, setActiveTab] = React.useState(
    templateField === 'services'
      ? 'tab-serviceBox1'
      : templateField == 'homepage'
      ? 'tab-sliderForm'
      : templateField == 'industries'
      ? 'tab-industryBox1'
      : null
  );

  React.useEffect(() => {
    if (templateField) {
      setActiveTab(
        templateField === 'services'
          ? 'tab-serviceBox1'
          : templateField == 'homepage'
          ? 'tab-sliderForm'
          : templateField == 'industries'
          ? 'tab-industryBox1'
          : null
      );
    }
  }, [templateField]);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const pageFromUrl = urlParams.get('page'); // fix here
    const pageAction = urlParams.get('action'); // fix here

    if (pageFromUrl) {
      setPostId(pageFromUrl);
      setActionType(pageAction);
    }
  }, [location]);

  const [searchParams] = useSearchParams();
  const isEditing = !!searchParams.get('action'); // or check both `page` and `action`

  React.useEffect(() => {
    if (!isEditing && actionType === 'edit') {
      setActionType('new');
      window.location.reload();
      // optional safety
    }
  }, [isEditing, actionType]);

  React.useEffect(() => {
    const fetchPage = async () => {
      if (!postid) return;

      try {
        const res = await fetch(`/api/page/get/${postid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await res.json();

        if (!res.ok) {
          toast.error(data.message || 'Failed to fetch page data');
          return;
        }

        setTitle(data.title);

        setTemplateField(data.template);

        setParentPageField(data.parentPage);

        setPageDate(data.updatedAt);

        const contentArray = data.content || [];

        setSeoFields(data?.seo);

        setCustomMetaFields(data?.customMetaFields);

        if (data.metaFields) {
          // Handle metaFields with proper defaults
          setMetaData({
            featuredImage: data.metaFields?.featuredImage || '',
          });
        }

        if (data?.editorJs) {
          try {
            const content =
              typeof data.editorJs === 'string'
                ? JSON.parse(data.editorJs) // safely parse stringified data
                : data.editorJs; // already parsed object

            setEditorContent(JSON.stringify(content));
          } catch (err) {
            console.error('Invalid editorJs format', err);
            setEditorContent(JSON.stringify({ blocks: [] })); // fallback to empty content
          }
        }

        //Industry
        const industryBox1Content = contentArray.find(
          (item) => item.type === 'industrybox1'
        );

        if (industryBox1Content?.data) {
          setIndustryState((prev) => ({
            ...prev,
            industryBox1Fields: industryBox1Content.data,
          }));
        }

        const industryBox2Content = contentArray.find(
          (item) => item.type === 'industrybox2'
        );

        if (industryBox2Content?.data) {
          setIndustryState((prev) => ({
            ...prev,
            industryBox2Fields: industryBox2Content.data,
          }));
        }

        const industryBox3Content = contentArray.find(
          (item) => item.type === 'industrybox3'
        );

        if (industryBox3Content?.data) {
          setIndustryState((prev) => ({
            ...prev,
            industryBox3Fields: industryBox3Content.data,
          }));
        }

        const industryBox4Content = contentArray.find(
          (item) => item.type === 'industrybox4'
        );

        if (industryBox4Content?.data) {
          setIndustryState((prev) => ({
            ...prev,
            industryBox4Fields: industryBox4Content.data,
          }));
        }

        const industryBox5Content = contentArray.find(
          (item) => item.type === 'industrybox5'
        );

        if (industryBox5Content?.data) {
          setIndustryState((prev) => ({
            ...prev,
            industryBox5Fields: industryBox5Content.data,
          }));
        }

        const industryBox6Content = contentArray.find(
          (item) => item.type === 'industrybox6'
        );

        if (industryBox6Content?.data) {
          setIndustryState((prev) => ({
            ...prev,
            industryBox6Fields: industryBox6Content.data,
          }));
        }

        //services
        const threeBoxesContent = contentArray.find(
          (item) => item.type === 'threeboxes'
        );

        const overviewBoxesContent = contentArray.find(
          (item) => item.type === 'overviewboxes'
        );

        const whyboxContent = contentArray.find(
          (item) => item.type === 'whybizmetricbox'
        );

        const approachBoxContent = contentArray.find(
          (item) => item.type === 'approach'
        );

        const otherServicesContent = contentArray.find(
          (item) => item.type === 'otherservices'
        );

        if (threeBoxesContent?.data) {
          setServicesFields((prev) => ({
            ...prev,
            threeBoxesData: threeBoxesContent.data,
          }));
        }

        if (overviewBoxesContent?.data) {
          setServicesFields((prev) => ({
            ...prev,
            overviewBoxesData: overviewBoxesContent.data,
          }));
        }

        if (whyboxContent?.data) {
          setServicesFields((prev) => ({
            ...prev,
            whyboxFields: whyboxContent.data,
          }));
        }

        if (approachBoxContent?.data) {
          setServicesFields((prev) => ({
            ...prev,
            approachData: approachBoxContent.data,
          }));
        }

        if (otherServicesContent?.data) {
          setServicesFields((prev) => ({
            ...prev,
            otherservicesData: otherServicesContent.data,
          }));
        }

        //homepage
        const sliderContent = contentArray.find(
          (item) => item.type === 'slider'
        );

        const partnerContent = contentArray.find(
          (item) => item.type === 'partner'
        );

        const servicesContent = contentArray.find(
          (item) => item.type === 'services'
        );

        const industryContent = contentArray.find(
          (item) => item.type === 'industry'
        );

        const whychooseContent = contentArray.find(
          (item) => item.type === 'whychoose'
        );

        const testimonialsContent = contentArray.find(
          (item) => item.type === 'testimonials'
        );

        if (sliderContent?.data) {
          setHomepageFields((prev) => ({
            ...prev,
            slidersData: sliderContent.data,
          }));
        }

        if (partnerContent?.data) {
          setHomepageFields((prev) => ({
            ...prev,
            partnerTitle: partnerContent.data.title || '',
            partnersData: partnerContent.data.items || [],
          }));
        }

        if (servicesContent?.data) {
          setHomepageFields((prev) => ({
            ...prev,
            servicesTitle: servicesContent.data.title || '',
            servicesData: servicesContent.data.items || [],
          }));
        }

        if (industryContent?.data) {
          setHomepageFields((prev) => ({
            ...prev,
            industryTitle: industryContent.data.title || '',
            industryData: industryContent.data.items || [],
          }));
        }

        if (whychooseContent?.data) {
          setHomepageFields((prev) => ({
            ...prev,
            whychooseTitle: whychooseContent.data.title || '',
            whychooseData: whychooseContent.data.items || [],
          }));
        }

        if (testimonialsContent?.data) {
          setHomepageFields((prev) => ({
            ...prev,
            testimonialsTitle: testimonialsContent.data.title || '',
            testimonialsData: testimonialsContent.data.items || [],
          }));
        }

        const aboutContent = contentArray.find(
          (item) => item.type === 'aboutus'
        );
        if (aboutContent?.data) {
          setHomepageFields((prev) => ({
            ...prev,
            aboutFields: aboutContent.data,
          }));
        }

        const blogContent = contentArray.find((item) => item.type === 'blog');
        if (blogContent?.data) {
          setHomepageFields((prev) => ({
            ...prev,
            blogTitle: blogContent.data,
          }));
        }
        if (data?.footercta) {
          setCtaField(data?.footercta);
        }
      } catch (error) {
        toast.error(error.message || 'Something went wrong');
      }
    };

    fetchPage();
  }, [postid]);

  const sectionsRef = React.useRef({
    slider: null,
    partner: null,
    services: null,
    industry: null,
    whychoose: null,
    testimonials: null,
    ThreeBoxes: null,
    OverviewBoxes: null,
    approach: null,
    otherservices: null,
    industrybox2: null,
    industrybox3: null,
    industrybox4: null,
    industrybox6: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmUpdate = window.confirm(
      'Are you sure you want to update this page.'
    );
    if (!confirmUpdate) return;

    if (!title) {
      toast.error('Enter Page Title');
      return;
    } else if (!templateField) {
      toast.error('Select template');
      return;
    }

    //industries page
    const currentIndustryBox2Data =
      sectionsRef.current.industrybox2?.getIndustryBox2Data?.();
    const currentIndustryBox3Data =
      sectionsRef.current.industrybox3?.getIndustryBox3Data?.();

    const currentIndustryBox4Data =
      sectionsRef.current.industrybox4?.getIndustryBox4Data?.();

    const currentIndustryBox6Data =
      sectionsRef.current.industrybox6?.getIndustryBox6Data?.();

    //homepage
    const currentSliderData = sectionsRef.current.slider?.getSlidersData?.();
    const currentPartnerData = sectionsRef.current.partner?.getPartnersData?.();
    const currentServicesData =
      sectionsRef.current.services?.getServicesData?.();
    const currentIndustryData =
      sectionsRef.current.industry?.getIndustryData?.();
    const currentWhychooseData =
      sectionsRef.current.whychoose?.getWhychooseData?.();
    const currentTestimonialsData =
      sectionsRef.current.testimonials?.getTestimonialsData?.();

    //services page
    const currentThreeBoxesData =
      sectionsRef.current.ThreeBoxes?.getThreeBoxesData?.();

    const currentOverviewBoxesData =
      sectionsRef.current.OverviewBoxes?.getOverviewBoxesData?.();

    const currentApproachBoxesData =
      sectionsRef.current.approach?.getApproachBoxesData?.();

    const currentOtherServicesData =
      sectionsRef.current.otherservices?.getOtherServicesData?.();

    const randomPageId = Math.floor(1000 + Math.random() * 9000); // 4-digit number

    const isHomepage = templateField === 'homepage';
    const isServices = templateField === 'services';
    // const isIndustry = templateField === 'industries';

    const homepageContent = [
      {
        type: 'slider',
        data: currentSliderData,
      },
      {
        type: 'partner',
        data: {
          title: homepageFields?.partnerTitle,
          items: currentPartnerData,
        },
      },
      {
        type: 'services',
        data: {
          title: homepageFields?.servicesTitle,
          items: currentServicesData,
        },
      },
      {
        type: 'aboutus',
        data: homepageFields.aboutFields,
      },
      {
        type: 'industry',
        data: {
          title: homepageFields.industryTitle,
          items: currentIndustryData,
        },
      },
      {
        type: 'whychoose',
        data: {
          title: homepageFields.whychooseTitle,
          items: currentWhychooseData,
        },
      },
      {
        type: 'testimonials',
        data: {
          title: homepageFields.testimonialsTitle,
          items: currentTestimonialsData,
        },
      },
      {
        type: 'blog',
        data: homepageFields.blogTitle,
      },
    ];

    // You can customize this part with a different structure for non-homepage templates
    const servicesTemplateContent = [
      {
        type: 'threeboxes',
        data: currentThreeBoxesData,
      },
      {
        type: 'overviewboxes',
        data: currentOverviewBoxesData,
      },

      {
        type: 'whybizmetricbox',
        data: servicesFields.whyboxFields,
      },

      {
        type: 'approach',
        data: currentApproachBoxesData,
      },

      {
        type: 'otherservices',
        data: currentOtherServicesData,
      },
    ];

    const industryTemplateContent = [
      {
        type: 'industrybox1',
        data: industryState.industryBox1Fields,
      },
      {
        type: 'industrybox2',
        data: currentIndustryBox2Data,
      },
      {
        type: 'industrybox3',
        data: currentIndustryBox3Data,
      },
      {
        type: 'industrybox4',
        data: currentIndustryBox4Data,
      },
      {
        type: 'industrybox5',
        data: industryState.industryBox5Fields,
      },
      {
        type: 'industrybox6',
        data: currentIndustryBox6Data,
      },
    ];

    const payload = {
      title,
      pageId: postid ? postid : randomPageId,
      template: templateField,
      parentPage: parentpageField,
      editorJs: JSON.parse(editorContent),
      footercta: ctaField,
      content: isHomepage
        ? homepageContent
        : isServices
        ? servicesTemplateContent
        : industryTemplateContent,
      seoFields: seoFields,
      metaFields: metaData,
      customMetaFields: customMetaFields,
    };

    if (postid || actionType === 'edit') {
      console.log('payload edit', payload);

      try {
        const res = await fetch(`/api/page/update/${postid}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
          toast.error(data.message);
          return;
        }

        if (data.success) {
          toast.success('Page Updated');
          // navigate(`/dashboard/page-new?page=${postid}&action=edit`);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      // CREATE POST
      try {
        const res = await fetch('/api/page/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
          toast.error(data.message);
          return;
        }

        if (data.success) {
          toast.success('Page Created');
          setActionType('edit');
          navigate(`/dashboard/page-new?page=${randomPageId}&action=edit`);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const pageName = usePageTitle(postid);

  const selectedTabs =
    templateField === 'homepage'
      ? tabsHomes
      : templateField === 'services'
      ? tabsServices
      : templateField === 'industries'
      ? tabsIndustry
      : null;

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <PageHead
            templateField={templateField}
            title={title}
            setTitle={setTitle}
            postId={postid}
          />
          <TextEditor
            editorContent={editorContent}
            setEditorContent={setEditorContent}
          />

          {selectedTabs && (
            <div className="border border-gray-300 rounded-md">
              <div className="border-b border-gray-200 flex text-xs">
                {selectedTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 w-full text-left ${
                      activeTab === tab.id
                        ? 'bg-flamingo-500 text-white font-bold'
                        : 'font-normal'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {templateField === 'homepage' ? (
                <HomeFields
                  activeTab={activeTab}
                  sectionsRef={sectionsRef}
                  homepageFields={homepageFields}
                  setHomepageFields={setHomepageFields}
                />
              ) : templateField === 'services' ? (
                <ServicesFields
                  activeTab={activeTab}
                  sectionsRef={sectionsRef}
                  servicesFields={servicesFields}
                  setServicesFields={setServicesFields}
                />
              ) : templateField === 'industries' ? (
                <IndustryFields
                  activeTab={activeTab}
                  sectionsRef={sectionsRef}
                  industryState={industryState}
                  setIndustryState={setIndustryState}
                />
              ) : null}
            </div>
          )}

          <div>
            <SeoPanel
              seoFields={seoFields}
              setSeoFields={setSeoFields}
              pageName={pageName}
            />{' '}
          </div>
        </div>
        <div>
          <PublishPanel postid={postid} pageDate={pageDate} />
          <ParentPageDropdown
            parentpageField={parentpageField}
            setParentPageField={setParentPageField}
          />
          <FooterCtaComp ctaField={ctaField} setCtaField={setCtaField} />
          <TemplateDropdown
            templateField={templateField}
            setTemplateField={setTemplateField}
          />
          <CustomMeta
            customMetaFields={customMetaFields}
            setCustomMetaFields={setCustomMetaFields}
          />
          <PostMetaFields
            setMetaData={setMetaData}
            initialMetaData={metaData}
          />
        </div>
      </div>
    </form>
  );
};
