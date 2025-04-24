import React from 'react';
import SliderForm from '../../components/DashComponents/Slider/SliderComp';
import PageHead from '../../components/DashComponents/PageHead';
import PublishPanel from '../../components/DashComponents/PublishPanel';
import TextEditor from '../../components/TextEditor';
import toast from 'react-hot-toast';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import PartnerComp from '../../components/DashComponents/Slider/PartnerComp';
import AboutComp from '../../components/DashComponents/Slider/AboutComp';
import ServicesComp from '../../components/DashComponents/Slider/ServicesComp';
import IndustryComp from '../../components/DashComponents/Slider/IndustryComp';
import WhychooseComp from '../../components/DashComponents/Slider/WhychooseComp';
import BlogComp from '../../components/DashComponents/Slider/BlogComp';
import TestimonialsComp from '../../components/DashComponents/Slider/TestimonialsComp';
import FooterCtaComp from '../../components/DashComponents/FooterCtaComp';
import SeoPanel from '../../components/DashComponents/SeoPanel';

export const Page = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [postid, setPostId] = React.useState('');

  const [pageDate, setPageDate] = React.useState('');

  const [actionType, setActionType] = React.useState('');

  const [activeTab, setActiveTab] = React.useState('tab-sliderForm');

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

        console.log('data', data);

        if (!res.ok) {
          toast.error(data.message || 'Failed to fetch page data');
          return;
        }

        setTitle(data.title);

        setPageDate(data.updatedAt);

        const contentArray = data.content || [];

        setSeoFields(data?.seo);

        const textContent = contentArray.find((item) => item.type === 'text');
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

        if (textContent?.data) setEditorContent(textContent.data);
        if (sliderContent?.data) setSlidersData(sliderContent.data);
        // if (partnerContent?.data) setPartnersData(partnerContent.data);
        if (partnerContent?.data) {
          setPartnerTitle(partnerContent.data.title || '');
          setPartnersData(partnerContent.data.items || []);
        }

        if (servicesContent?.data) {
          setServicesTitle(servicesContent.data.title || '');
          setServicesData(servicesContent.data.items || []);
        }

        if (industryContent?.data) {
          setIndustryTitle(industryContent.data.title || '');
          setIndustryData(industryContent.data.items || []);
        }

        if (whychooseContent?.data) {
          setWhychooseTitle(whychooseContent.data.title || '');
          setWhychooseData(whychooseContent.data.items || []);
        }

        if (testimonialsContent?.data) {
          setTestimonialsTitle(testimonialsContent.data.title || '');
          setTestimonialsData(testimonialsContent.data.items || []);
        }

        const aboutContent = contentArray.find(
          (item) => item.type === 'aboutus'
        );
        if (aboutContent?.data) {
          setAboutFields(aboutContent.data);
        }

        const footerCtaContent = contentArray.find(
          (item) => item.type === 'footercta'
        );
        if (footerCtaContent?.data) {
          setCtaField(footerCtaContent.data);
        }

        const blogContent = contentArray.find((item) => item.type === 'blog');
        if (blogContent?.data) {
          setBlogTitle(blogContent.data);
        }
      } catch (error) {
        toast.error(error);
      }
    };

    fetchPage();
  }, [postid]);

  const [ctaField, setCtaField] = React.useState(false);

  const [title, setTitle] = React.useState('');
  const [editorContent, setEditorContent] = React.useState('<p>Typing...</p>');
  const [slidersData, setSlidersData] = React.useState([
    {
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
    },
  ]);

  const [aboutFields, setAboutFields] = React.useState({
    smallTitle: '',
    aboutTitle: '',
    embedField: '',
    descField: '',
    buttonText: '',
    buttonUrl: '',
    moreField: '',
  });

  const [partnerTitle, setPartnerTitle] = React.useState('');
  const [partnersData, setPartnersData] = React.useState([
    {
      partnerImage: null,
      caseStudyUrl: '',
    },
  ]);

  const [servicesTitle, setServicesTitle] = React.useState('');
  const [servicesData, setServicesData] = React.useState([
    {
      servicesImage: null,
      servicesName: '',
    },
  ]);

  const [industryTitle, setIndustryTitle] = React.useState('');
  const [industryData, setIndustryData] = React.useState([
    {
      industryIcon: '',
      industryName: '',
      industryId: '',
    },
  ]);

  const [whychooseTitle, setWhychooseTitle] = React.useState('');
  const [whychooseData, setWhychooseData] = React.useState([
    {
      whychooseIcon: '',
      whychooseName: '',
      whychooseSubName: '',
      whychooseBtnName: '',
      whychooseBtnUrl: '',
      whychooseImage: '',
    },
  ]);

  const [testimonialsTitle, setTestimonialsTitle] = React.useState('');
  const [testimonialsData, setTestimonialsData] = React.useState([
    {
      testimonialsImage: '',
      testimonialsName: '',
      testimonialsSubName: '',
      testimonialsSubText: '',
    },
  ]);

  const [seoFields, setSeoFields] = React.useState({
    focusKeyphrase: '',
    seoTitle: '',
    seoDescription: '',
  });

  const [blogTitle, setBlogTitle] = React.useState('');

  const sliderRef = React.useRef();

  const partnerRef = React.useRef();

  const servicesRef = React.useRef();

  const industryRef = React.useRef();

  const whychooseRef = React.useRef();

  const testimonialsRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmUpdate = window.confirm(
      'Are you sure you want to update this page.'
    );
    if (!confirmUpdate) return;

    const currentSliderData = sliderRef.current?.getSlidersData?.();
    const currentPartnerData = partnerRef.current?.getPartnersData?.();
    const currentServicesData = servicesRef.current?.getServicesData?.();

    const currentIndustryData = industryRef.current?.getIndustryData?.();

    const currentWhychooseData = whychooseRef.current?.getWhychooseData?.();

    const currentTestimonialsData =
      testimonialsRef.current?.getTestimonialsData?.();

    //setSlidersData(currentSliderData);

    const randomPageId = Math.floor(1000 + Math.random() * 9000); // 4-digit number

    const payload = {
      title,
      pageId: postid ? postid : randomPageId,
      content: [
        {
          type: 'text',
          data: editorContent,
        },
        {
          type: 'footercta',
          data: ctaField,
        },
        {
          type: 'slider',
          data: currentSliderData,
        },
        {
          type: 'partner',
          data: {
            title: partnerTitle,
            items: currentPartnerData,
          },
        },
        {
          type: 'services',
          data: {
            title: servicesTitle,
            items: currentServicesData,
          },
        },

        {
          type: 'aboutus',
          data: aboutFields, // ✅ This line adds the aboutFields data
        },
        {
          type: 'industry',
          data: {
            title: industryTitle,
            items: currentIndustryData,
          },
        },
        {
          type: 'whychoose',
          data: {
            title: whychooseTitle,
            items: currentWhychooseData,
          },
        },
        {
          type: 'testimonials',
          data: {
            title: testimonialsTitle,
            items: currentTestimonialsData,
          },
        },
        {
          type: 'blog',
          data: blogTitle,
        },
      ],
      seoFields: seoFields,
    };

    if (postid || actionType === 'edit') {
      // UPDATE POST
      //console.log('Update payload', payload);

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <PageHead title={title} setTitle={setTitle} postId={postid} />
          <TextEditor
            editorContent={editorContent}
            setEditorContent={setEditorContent}
          />

          <div className="border border-gray-300 rounded-md">
            <div className="border-b border-gray-200 flex text-sm">
              <button
                type="button"
                onClick={() => setActiveTab('tab-sliderForm')}
                className={`px-4 py-2 w-full text-left ${
                  activeTab === 'tab-sliderForm'
                    ? 'bg-flamingo-500 text-white font-bold'
                    : 'font-normal'
                }`}
              >
                Slider Section
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tab-partnerComp')}
                className={`px-4 py-2 w-full text-left ${
                  activeTab === 'tab-partnerComp'
                    ? 'bg-flamingo-500 text-white font-bold'
                    : 'font-normal'
                }`}
              >
                Partner Section
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tab-aboutComp')}
                className={`px-4 py-2 w-full text-left ${
                  activeTab === 'tab-aboutComp'
                    ? 'bg-flamingo-500 text-white font-bold'
                    : 'font-normal'
                }`}
              >
                About Section
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tab-servicesComp')}
                className={`px-4 py-2 w-full text-left ${
                  activeTab === 'tab-servicesComp'
                    ? 'bg-flamingo-500 text-white font-bold'
                    : 'font-normal'
                }`}
              >
                Services Section
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tab-industryComp')}
                className={`px-4 py-2 w-full text-left ${
                  activeTab === 'tab-industryComp'
                    ? 'bg-flamingo-500 text-white font-bold'
                    : 'font-normal'
                }`}
              >
                Industry Section
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tab-whychooseComp')}
                className={`px-4 py-2 w-full text-left ${
                  activeTab === 'tab-whychooseComp'
                    ? 'bg-flamingo-500 text-white font-bold'
                    : 'font-normal'
                }`}
              >
                WhyChoose Section
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tab-blogComp')}
                className={`px-4 py-2 w-full text-left ${
                  activeTab === 'tab-blogComp'
                    ? 'bg-flamingo-500 text-white font-bold'
                    : 'font-normal'
                }`}
              >
                Blog Section
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tab-testimonialsComp')}
                className={`px-4 py-2 w-full text-left ${
                  activeTab === 'tab-testimonialsComp'
                    ? 'bg-flamingo-500 text-white font-bold'
                    : 'font-normal'
                }`}
              >
                Testimonials Section
              </button>
            </div>

            <div className="p-4">
              <div
                style={{
                  display: activeTab === 'tab-sliderForm' ? 'block' : 'none',
                }}
              >
                <SliderForm ref={sliderRef} slidersData={slidersData} />
              </div>
              <div
                style={{
                  display: activeTab === 'tab-partnerComp' ? 'block' : 'none',
                }}
              >
                <PartnerComp
                  ref={partnerRef}
                  partnersData={partnersData}
                  partnerTitle={partnerTitle}
                  setPartnerTitle={setPartnerTitle}
                />
              </div>
              <div
                style={{
                  display: activeTab === 'tab-aboutComp' ? 'block' : 'none',
                }}
              >
                <AboutComp
                  aboutFields={aboutFields}
                  setAboutFields={setAboutFields}
                />
              </div>
              <div
                style={{
                  display: activeTab === 'tab-servicesComp' ? 'block' : 'none',
                }}
              >
                <ServicesComp
                  ref={servicesRef}
                  servicesData={servicesData}
                  servicesTitle={servicesTitle}
                  setServicesTitle={setServicesTitle}
                />
              </div>
              <div
                style={{
                  display: activeTab === 'tab-industryComp' ? 'block' : 'none',
                }}
              >
                <IndustryComp
                  ref={industryRef}
                  industryData={industryData}
                  industryTitle={industryTitle}
                  setIndustryTitle={setIndustryTitle}
                />
              </div>
              <div
                style={{
                  display: activeTab === 'tab-whychooseComp' ? 'block' : 'none',
                }}
              >
                <WhychooseComp
                  ref={whychooseRef}
                  whychooseData={whychooseData}
                  whychooseTitle={whychooseTitle}
                  setWhychooseTitle={setWhychooseTitle}
                />
              </div>
              <div
                style={{
                  display: activeTab === 'tab-blogComp' ? 'block' : 'none',
                }}
              >
                <BlogComp blogTitle={blogTitle} setBlogTitle={setBlogTitle} />
              </div>
              <div
                style={{
                  display:
                    activeTab === 'tab-testimonialsComp' ? 'block' : 'none',
                }}
              >
                <TestimonialsComp
                  ref={testimonialsRef}
                  testimonialsData={testimonialsData}
                  testimonialsTitle={testimonialsTitle}
                  setTestimonialsTitle={setTestimonialsTitle}
                />
              </div>
            </div>
          </div>
          <div>
            <SeoPanel seoFields={seoFields} setSeoFields={setSeoFields} />
          </div>
        </div>
        <div>
          <PublishPanel postid={postid} pageDate={pageDate} />
          <FooterCtaComp ctaField={ctaField} setCtaField={setCtaField} />
        </div>
      </div>
    </form>
  );
};
