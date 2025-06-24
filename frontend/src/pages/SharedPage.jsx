import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TempServices from '../components/Templates/TempServices';
import NotFound from '../NotFound';
import FrontLoader from '../components/Loader/FrontLoader';
import PagePostHero from '../components/HeroSection/PagePostHero';
import { Heading } from '../components/Heading/Heading';
import Line5 from '../components/lines';
import { motion, useAnimation } from 'framer-motion';
import LiteYouTubeEmbed from '../components/extras/LiteYouTubeEmbed';
import { useInView } from 'react-intersection-observer';
import FiveCards from '../components/Cards/FiveCards';
import FeedbackSlider from '../components/FeedbackSlider';
import { GalleryWithTab } from '../components/extras/GalleryWithTab';
import AwardsRecognition from '../components/extras/AwardsRecognition';
import TempLiftAtBiz from '../components/Templates/TempLiftAtBiz';
import TempAboutus from '../components/Templates/TempAboutus';
import TempContactus from '../components/Templates/TempContactus';

export default function SharedPage() {
  const { slug } = useParams();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  console.log('slug', slug);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [pageHeaderData, setPageHeaderData] = React.useState({
    title: '',
    excerpts: '',
    bannerImg: '',
    customMetaTitle: '',
    customMetaDesc: '',
    customMetaLink: '',
    customMetaLinkText: '',
    customMetaLinkTwo: '',
    customMetaLinkTwoText: '',
    customMetaExtra: '',
  });
  const [notFound, setNotFound] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: -100, opacity: 0 });
    }
  }, [inView, controls]);

  useEffect(() => {
    if (!slug) return;

    const fetchPage = async () => {
      setLoading(true);
      setData(null);
      setNotFound(false);

      try {
        const res = await fetch(`/api/page/getpage/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const json = await res.json();

        if (!res.ok || !json?.title) {
          setNotFound(true);
          return;
        }

        setData(json);
        setPageHeaderData({
          title: json.title || '',
          excerpts: json.excerpts || '',
          bannerImg: json.metaFields?.featuredImage || '',
          customMetaTitle: json?.customMetaFields?.customMetaTitle || '',
          customMetaDesc: json?.customMetaFields?.customMetaDesc || '',
          customMetaLink: json?.customMetaFields?.customMetaLink || '',
          customMetaLinkText: json?.customMetaFields?.customMetaLinkText || '',
          customMetaLinkTwo: json?.customMetaFields?.customMetaLinkTwo || '',
          customMetaLinkTwoText:
            json?.customMetaFields?.customMetaLinkTwoText || '',
          customMetaExtra: json?.customMetaFields?.customMetaExtra || '',
          customMetaExtra2: json?.customMetaFields?.customMetaExtra2 || '',
        });
      } catch (error) {
        console.error(error.message || 'Something went wrong');
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading)
    return (
      <div className="text-center py-10">
        <FrontLoader />
      </div>
    );

  if (notFound) return <NotFound />;

  return (
    <>
      <PagePostHero type={slug} {...pageHeaderData} />
      {slug === 'life-at-bizmetric' ? (
        <TempLiftAtBiz data={data} controls={controls} ref={ref} />
      ) : slug === 'about-us' ? (
        <TempAboutus data={data} type={slug} />
      ) : slug === 'contact-us' ? (
        <TempContactus data={data} type={slug} />
      ) : (
        ''
      )}
    </>
  );
}
