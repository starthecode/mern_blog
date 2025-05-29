import Image from 'next/image';
import React from 'react';

export const HeadingWithImage = ({
  order,
  small,
  main,
  classes,
  desc,
  img,
  text,
}: any) => {
  const before_line =
    'relative flex items-center justify-center flex-row gap-20 lg:before:via-primary dark:lg:before:via-junglegreen-400 lg:before:relative lg:before:items-start lg:before:left-0 lg:before:block lg:before:h-full lg:before:w-1 lg:before:bg-gradient-to-b lg:before:from-transparent lg:before:to-transparent after:to-transprent after:via-white dark:after:via-red max-w-xl after:relative after:-bottom-16 after:block after:h-1 after:w-full after:bg-gradient-to-l after:from-transparent lg:max-w-none lg:after:content-[none]';

  const after_line =
    'relative flex items-center justify-center flex-row gap-20 lg:after:via-primary dark:lg:after:via-junglegreen-400 lg:after:relative lg:after:right-0 lg:after:block lg:after:h-full lg:after:w-1 lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:to-transparent before:to-transprent before:via-white dark:before:via-red max-w-xl before:relative before:-bottom-16 before:block before:h-1 before:w-full before:bg-gradient-to-l before:from-transparent lg:max-w-none lg:before:content-[none]';

  const removePTags = (htmlString: string) => {
    return htmlString.replace(/<\/?p>/g, '');
  };

  const cleanText = removePTags(text);

  return (
    <>
      <div className="relative z-10 grid grid-cols-2 gap-20">
        <div
          className={`${
            order === 'left' ? 'order-1' : 'order-2'
          } flex flex-wrap`}
        >
          <div className="w-full px-4 ">
            {small && (
              <h5 className="text-sm font-inter font-semibold tracking-wide uppercase">
                <span className="shadow-lg border border-woodsmoke-400/50 bg-gradient-to-b from-white to-transparent dark:bg-gradient-to-b dark:from-woodsmoke-950 dark:to-transparent transition-shadow relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-5 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                  <span className="bg-flamingo-500 dark:bg-gradient-to-r dark:from-flamingo-500 dark:to-flamingo-200 bg-clip-text text-transparent">
                    {small}
                  </span>
                </span>
              </h5>
            )}

            <h1 className="mt-3 mb-4 block text-4xl text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
              {main}
            </h1>
            <p>{desc}</p>
            <div
              className="checkmark_li"
              dangerouslySetInnerHTML={{ __html: cleanText }}
            />
          </div>
        </div>
        <div
          className={`${
            order === 'left'
              ? `order-2 ${before_line}`
              : `order-1 ${after_line}`
          }`}
        >
          <div className="w-fit relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
            <div className="grid items-center p-4 gap-12 ring-ebony-400 dark:ring-white/10 ring-1 rounded-2xl bg-ebony-200 shadow-massive">
              <Image
                src={img}
                alt="Business Challenges"
                width={400}
                height={400}
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
