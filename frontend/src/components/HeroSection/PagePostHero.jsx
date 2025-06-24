import { motion, useAnimation } from 'framer-motion';
import { Breadcrumbs } from '../Breadcrumbs';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { SecondaryButton } from '../Buttons/SecondaryButton';
import PageHeading from '../Heading/PageHeading';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import ShortYouTubeEmbed from '../extras/ShortYouTubeEmbed';
import GlowLight from '../extras/GlowLight';
import LiteYouTubeEmbed from '../extras/LiteYouTubeEmbed';
import SideTwoImages from '../page/ContactUs/SideTwoImages';

export default function PagePostHero({
  type,
  title,
  excerpts,
  bannerImg,
  customMetaTitle,
  customMetaDesc,
  customMetaLink,
  customMetaLinkText,
  customMetaLinkTwo,
  customMetaLinkTwoText,
  customMetaExtra,
  customMetaExtra2,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: -100, opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <div
      className="relative h-fit py-0 sm:py-0 md:pt-24 lg:pt-24 xl:pt-20 overflow-hidden z-10"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'initial',
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="container">
        <div className="w-full flex flex-col justify-center items-center mb-10">
          <div className="grid md:grid-cols-1 xl:grid-cols-2 w-full justify-start items-start mb-5 mt-14">
            <div className="">
              <Breadcrumbs capitalizeLinks />
              <PageHeading
                type={''}
                smallTitle={title ? title : ''}
                title={customMetaTitle ? customMetaTitle : title}
                subText={excerpts ? excerpts : customMetaDesc}
              />
              {customMetaLinkText && customMetaLinkTwoText && (
                <div className="flex mt-10 gap-10">
                  <PrimaryButton
                    title={customMetaLinkText}
                    link={customMetaLink}
                  />
                  <SecondaryButton
                    title={customMetaLinkTwoText}
                    link={customMetaLinkTwo}
                  />
                </div>
              )}
            </div>

            {type !== 'contact-us' && (
              <div
                className={`gap-2 w-fit p-1 rounded-2xl ${
                  type === 'about-us' ? 'flex-col bg-woodsmoke-200' : ''
                } flex justify-center items-center relative z-10`}
              >
                {/* Video */}
                {customMetaExtra && (
                  <div
                    className={`flex my-auto ${
                      type === 'about-us' ? '' : 'mt-40'
                    }`}
                  >
                    <div className="iframe__div relative" ref={ref}>
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="relative"
                      >
                        {type === 'about-us' ? (
                          <LiteYouTubeEmbed videoId={customMetaExtra || ''} />
                        ) : type === 'life-at-bizmetric' ? (
                          <ShortYouTubeEmbed videoId={customMetaExtra || ''} />
                        ) : (
                          ''
                        )}
                      </motion.div>
                    </div>
                  </div>
                )}
                {customMetaExtra2 && (
                  <div>
                    <img
                      className={`w-fit ${
                        type === 'about-us'
                          ? 'h-[200px]'
                          : type === 'life-at-bizmetric'
                          ? 'h-[530px]'
                          : ''
                      } `}
                      src={customMetaExtra2}
                    />
                  </div>
                )}
              </div>
            )}

            {type === 'contact-us' && (
              <SideTwoImages
                customMetaExtra={customMetaExtra}
                customMetaExtra2={customMetaExtra2}
              />
            )}
          </div>
        </div>
      </div>
      <GlowLight classes={'bottom-[0%] right-10 bg-junglegreen-600/60'} />
    </div>
  );
}
