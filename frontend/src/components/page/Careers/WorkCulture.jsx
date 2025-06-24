import React from 'react';
import { CultureSlider } from './CultureSlider';
import { Heading } from '../../Heading/Heading';

export default function WorkCulture() {
  return (
    <div
      className="relative py-20 sm:py-24 md:py-24 lg:py-20 z-10 mt-40"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://bizsiteuploads.blob.core.windows.net/uploads/Background-Colour-Gradient-667564.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <Heading
                  type={''}
                  smallTitle={'#WeCare'}
                  title={'Our Work Fun Culture'}
                />

                <ul className="flex flex-col gap-4 mt-3">
                  <li className="text-2xl mb-2">
                    <h3 className="text-flamingo-500">Innovation</h3>
                    <p className="text-woodsmoke-200">
                      We drive innovative solutions, and that is why we regard
                      passionate candidates, who can bring positive changes with
                      their leading-edge capabilities.
                    </p>
                  </li>
                  <li className="text-2xl mb-2">
                    {' '}
                    <h3 className="text-flamingo-500">
                      Contribution Of Ideas, Strategy, &amp; Interest
                    </h3>
                    <p className="text-woodsmoke-200">
                      At Bizmetric, we give equal opportunity to all peers to
                      express their opinions, strategy, and ideas. We nurture
                      think-tanks, regardless of position or profile.
                    </p>
                  </li>
                  <li className="text-2xl mb-2">
                    {' '}
                    <h3 className="text-flamingo-500">Corporate Behavior</h3>
                    <p className="text-woodsmoke-200">
                      Maintaining professionalism is our standard. We pay
                      special attention to the corporate code of conduct and
                      ensure every individual abides by it. This helps maintain
                      the value of our organization.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <CultureSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
