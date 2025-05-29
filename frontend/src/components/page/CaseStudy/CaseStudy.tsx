import Cards2 from '@/components/Cards/Cards2';
import React from 'react';
import { HeadingWithImage } from './HeadingWithImage';
import { CTA } from './CTA';

export const CaseStudy = ({ data }: any) => {
  const items = [{}];
  return (
    <>
      <div className="container mt-12 grid sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {data?.caseStudy?.casestudy_fields?.caseStudy3xBox &&
          data?.caseStudy?.casestudy_fields?.caseStudy3xBox.map(
            (item: any, index: any) => <Cards2 item={item} key={index} />
          )}
      </div>

      <div className="min-h-[20vh] w-full relative flex items-center justify-center overflow-hidden py-20 mt-20">
        <div
          className="absolute inset-0 -top-20 dark:bg-grid-white/10 bg-grid-gray-100"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, white, transparent), linear-gradient(to top, transparent, white, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, white, transparent), linear-gradient(to top, transparent, white, transparent)',
            position: 'absolute',
            top: '10px',
          }}
        ></div>

        <div className="w-[80%] mx-auto  flex items-center justify-center relative ">
          <div className="parent flex flex-col items-center justify-center">
            <h1 className="mb-2 text-center font-inter lg:text-left text-foreground text-4xl sm:leading-none">
              <span className="block text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                About the Domain
              </span>
            </h1>

            <p className="text-base text-junglegreen-500 max-w-xl mx-auto text-center !leading-loose">
              {data?.caseStudy?.casestudy_fields?.aboutTheDomainText}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="border-[0.6px] border-woodsmoke-600/50 mt-24"></div> */}

      <div className="container mt-20">
        <HeadingWithImage
          order={'left'}
          small={data?.caseStudy?.casestudy_fields?.businessChallengesMinititle}
          main={data?.caseStudy?.casestudy_fields?.businessChallengesTitle}
          classes={'font-inter'}
          desc={data?.caseStudy?.casestudy_fields?.businessChallengesSubtitle}
          text={data?.caseStudy?.casestudy_fields?.businessChallengesTitleText}
          img={
            data?.caseStudy?.casestudy_fields?.businessChallengesImage
              ?.mediaItemUrl
          }
        />
      </div>

      <div className="container mt-40">
        <HeadingWithImage
          order={'right'}
          small={data?.caseStudy?.casestudy_fields?.businessSolutionsMinititle}
          main={data?.caseStudy?.casestudy_fields?.businessSolutionsTitle}
          classes={'font-inter'}
          desc={data?.caseStudy?.casestudy_fields?.businessSolutionsSubtitle}
          text={data?.caseStudy?.casestudy_fields?.businessSolutionsTitleText}
          img={
            data?.caseStudy?.casestudy_fields?.businessSolutionsImage
              ?.mediaItemUrl
          }
        />
      </div>

      <div className="container mt-40">
        <HeadingWithImage
          order={'left'}
          small={data?.caseStudy?.casestudy_fields?.businessResultsMinititle}
          main={data?.caseStudy?.casestudy_fields?.businessResultsTitle}
          classes={'font-inter'}
          desc={data?.caseStudy?.casestudy_fields?.businessResultsSubtitle}
          text={data?.caseStudy?.casestudy_fields?.businessResultsTitleText}
          img={
            data?.caseStudy?.casestudy_fields?.businessResultsImage
              ?.mediaItemUrl
          }
        />
      </div>

      <CTA
        ctatext={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
        }
      />
    </>
  );
};
