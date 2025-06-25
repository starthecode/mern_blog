import React from 'react';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import BackgroundSection from '../../BackgroundSection';
import { Heading } from '../../Heading/Heading';

export default function SolutionForm() {
  const [formData, setFormData] = React.useState({
    fullName: 'Walter Hartwell',
    email: 'xyz@bizmetric.com',
    company: 'xyz company',
    country: 'United States',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic
  };

  return (
    <BackgroundSection>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col items-center gap-10"
        >
          {/* Heading */}
          <Heading
          classes={'items-center'}
            smallTitle={'Contact Us'}
            title={'Explore Our Azure Offers'}
            subText={'Unlock Insights. Submit to Discover.'}
          />

          {/* Fields */}
          <div className="flex flex-col gap-8 w-full max-w-3xl">
            <div className="flex flex-wrap gap-8">
              <div className="flex-1 min-w-[260px]">
                <label className="block text-white mb-2 font-semibold">
                  Full Name *
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white text-woodsmoke-500 border border-white rounded-md focus:outline-none"
                />
              </div>
              <div className="flex-1 min-w-[260px]">
                <label className="block text-white mb-2 font-semibold">
                  Business Email *
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-white text-woodsmoke-500 border border-white rounded-md focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex-1 min-w-[260px]">
                <label className="block text-white mb-2 font-semibold">
                  Company
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-woodsmoke-500 border border-white rounded-md focus:outline-none"
                />
              </div>
              <div className="flex-1 min-w-[260px]">
                <label className="block text-white mb-2 font-semibold">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-woodsmoke-500 border border-white rounded-md focus:outline-none"
                >
                  <option className="text-black" value="United States">
                    United States
                  </option>
                  <option className="text-black" value="India">
                    India
                  </option>
                  <option className="text-black" value="United Kingdom">
                    United Kingdom
                  </option>
                  <option className="text-black" value="Australia">
                    Australia
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <PrimaryButton title={'Submit & Check'} type="submit" />
          </div>

          {/* Disclaimer */}
          <div className="max-w-[1058px] text-center text-sm text-[#eaeaea] mt-4">
            By submitting your information in this form you are agreeing to the
            terms listed in our
            <span className="text-flamingo-500 font-semibold ml-1">
              Privacy Policy
            </span>
            . Bizmetric will only use this information to contact you about the
            products and services you requested.
          </div>
        </form>
      </div>
    </BackgroundSection>
  );
}
