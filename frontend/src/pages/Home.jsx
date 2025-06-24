import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

import AnimatedSlider from '../components/Hero/AnimatedSlider';
import PartnersLogo from '../components/Partners_Logo';
import AboutUs from '../components/AboutUs';

import '../styles/HomePage.css';
import Industry from '../components/Industry';
import Choose from '../components/Choose';
import BlogsCard from '../components/ThreeBlogs';
import Testimonials from '../components/Testimonials';
import FooterCta from '../components/FooterCta';
import MultiSection from '../components/MultiSection';
import FrontLoader from '../components/Loader/FrontLoader';
import { Poll } from '../components/Poll/Poll';
import SeoComp from '../components/SeoComp';
import { ServiceCards } from '../components/ServiceCards';

const COMPONENTS = {
  slider: AnimatedSlider,
  partnerslogo: PartnersLogo,
  aboutus: AboutUs,
  services: ServiceCards,
  industry: Industry, // Include additional types as needed
  whychoose: Choose,
  blog: BlogsCard,
  testimonials: Testimonials,
  footercta: FooterCta,
};

export default function Home() {
  const location = useLocation();
  const slug =
    location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

  const [sections, setSections] = useState({});

  const [seoData, setSeoData] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const res = await fetch(`/api/page/getpage/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const json = await res.json();

        if (!res.ok) {
          toast.error(json.message || 'Failed to fetch page data');
          return;
        }

        const newSections = {};
        for (const section of json?.content || []) {
          newSections[section.type] = section.data || [];
        }
        setSeoData(json?.seo);
        setSections(newSections);
      } catch (error) {
        toast.error(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  return loading ? (
    <FrontLoader />
  ) : (
    <div>
      <SeoComp
        seoTitle={seoData?.seoTitle}
        description={seoData?.seoDescription}
        keywords={seoData?.focusKeyphrase}
        image={seoData?.image}
        url={`https://yourdomain.com/blog/${seoData?.slug}`}
      />
      <Poll />
      <div className="h-full" style={{ display: 'inherit' }}>
        {sections.slider && <AnimatedSlider data={sections.slider} />}
        <MultiSection sections={sections} />
        {sections.whychoose && <Choose data={sections.whychoose} />}
        {sections.blog && sections.testimonials && (
          <BlogsCard
            blogData={sections.blog}
            testimonialsData={sections.testimonials}
          />
        )}
      </div>
    </div>
  );
}
