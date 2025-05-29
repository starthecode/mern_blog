import { Heading2 } from '@/components/Headings/Heading2';
import Image from 'next/image';
import React from 'react';

const Team = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24 relative">
        <div className="max-w-2xl mx-auto text-center">
          <Heading2
            small={'Our Team'}
            main={'Meet Our Global Experts'}
            desc={
              'Our team comprises of dynamic leaders who are driven to shape and define the future.'
            }
          />
        </div>
        <ol
          role="list"
          className="grid grid-cols-1 gap-3 lg:gap-12 mt-12 text-center md:grid-cols-3 lg:mt-24"
        >
          <li>
            {' '}
            <div className="flex flex-col justify-between h-full">
              {' '}
              <div className="flex flex-col items-center">
                <div className="flex justify-center relative overflow-hidden rounded-full lg:w-32 lg:h-32 ring-1 ring-onyx-800 shrink-0">
                  <Image
                    width={28}
                    height={28}
                    className="absolute top-5 lg:w-28 lg:h-28"
                    src="/images/office-man-2334564.svg"
                    alt=""
                  />{' '}
                </div>
                <div className="mt-4">
                  {' '}
                  <p className="text-sm font-display text-white">
                    {' '}
                    Roberto Johnson{' '}
                  </p>{' '}
                  <p className="    text-vanta-300">Digital Marketing</p>
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </li>{' '}
          <li>
            <div className="flex flex-col justify-between h-full">
              {' '}
              <div className="flex flex-col items-center">
                <div className="flex justify-center relative overflow-hidden rounded-full lg:w-32 lg:h-32 ring-1 ring-onyx-800 shrink-0">
                  <Image
                    width={28}
                    height={28}
                    className="absolute top-5 lg:w-28 lg:h-28"
                    src="/images/office-man-2334564.svg"
                    alt=""
                  />{' '}
                </div>{' '}
                <div className="mt-4">
                  {' '}
                  <p className="text-sm font-display text-white">
                    {' '}
                    Emilia Pirelli{' '}
                  </p>
                  <p className="text-vanta-300">Data Science</p>{' '}
                </div>{' '}
              </div>
            </div>{' '}
          </li>{' '}
          <li>
            {' '}
            <div className="flex flex-col justify-between h-full">
              {' '}
              <div className="flex flex-col items-center">
                {' '}
                <div className="flex justify-center relative overflow-hidden rounded-full lg:w-32 lg:h-32 ring-1 ring-onyx-800 shrink-0">
                  <Image
                    width={28}
                    height={28}
                    className="absolute top-5 lg:w-28 lg:h-28"
                    src="/images/office-man-2334564.svg"
                    alt=""
                  />{' '}
                </div>
                <div className="mt-4">
                  {' '}
                  <p className="text-sm font-display text-white">
                    {' '}
                    Fino Como{' '}
                  </p>{' '}
                  <p className="    text-vanta-300">Creative Writing</p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </li>{' '}
        </ol>
        <ol
          role="list"
          className="grid grid-cols-1 gap-3 lg:gap-12 mt-12 text-center md:grid-cols-3 lg:mt-24"
        >
          <li>
            {' '}
            <div className="flex flex-col justify-between h-full">
              {' '}
              <div className="flex flex-col items-center">
                <div className="flex justify-center relative overflow-hidden rounded-full lg:w-32 lg:h-32 ring-1 ring-onyx-800 shrink-0">
                  <Image
                    width={28}
                    height={28}
                    className="absolute top-5 lg:w-28 lg:h-28"
                    src="/images/office-man-2334564.svg"
                    alt=""
                  />{' '}
                </div>
                <div className="mt-4">
                  {' '}
                  <p className="text-sm font-display text-white">
                    {' '}
                    Roberto Johnson{' '}
                  </p>{' '}
                  <p className="    text-vanta-300">Digital Marketing</p>
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </li>{' '}
          <li>
            <div className="flex flex-col justify-between h-full">
              {' '}
              <div className="flex flex-col items-center">
                <div className="flex justify-center relative overflow-hidden rounded-full lg:w-32 lg:h-32 ring-1 ring-onyx-800 shrink-0">
                  <Image
                    width={28}
                    height={28}
                    className="absolute top-5 lg:w-28 lg:h-28"
                    src="/images/office-man-2334564.svg"
                    alt=""
                  />{' '}
                </div>{' '}
                <div className="mt-4">
                  {' '}
                  <p className="text-sm font-display text-white">
                    {' '}
                    Emilia Pirelli{' '}
                  </p>
                  <p className="text-vanta-300">Data Science</p>{' '}
                </div>{' '}
              </div>
            </div>{' '}
          </li>{' '}
          <li>
            {' '}
            <div className="flex flex-col justify-between h-full">
              {' '}
              <div className="flex flex-col items-center">
                {' '}
                <div className="flex justify-center relative overflow-hidden rounded-full lg:w-32 lg:h-32 ring-1 ring-onyx-800 shrink-0">
                  <Image
                    width={28}
                    height={28}
                    className="absolute top-5 lg:w-28 lg:h-28"
                    src="/images/office-man-2334564.svg"
                    alt=""
                  />{' '}
                </div>
                <div className="mt-4">
                  {' '}
                  <p className="text-sm font-display text-white">
                    {' '}
                    Fino Como{' '}
                  </p>{' '}
                  <p className="    text-vanta-300">Creative Writing</p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </li>{' '}
        </ol>{' '}
      </div>{' '}
    </section>
  );
};

export default Team;
