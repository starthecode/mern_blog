import React from 'react';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

export default function SolutionForm() {
  const [formData, setFormData] = React.useState({
    fullName: 'Walter Hartwell',
    email: 'xyz@bizmetric.com',
    company: '',
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
    <section className="w-full bg-black py-10 px-4 mt-20">
      <div className="mx-auto max-w-[1250px] rounded-3xl bg-[url('https://c.animaapp.com/mbogi8vtaM1MUm/img/content.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-3xl z-0" />
        <form
          onSubmit={handleSubmit}
          className="relative z-10 p-10 flex flex-col items-center text-white gap-10"
        >
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-medium tracking-tight">
              Explore Our Azure Offers
            </h2>
            <p className="mt-4 text-lg font-semibold">
              Unlock Insights. Submit to Discover.
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-8 w-full max-w-[1100px]">
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
                  className="w-full px-4 py-2 bg-purple-500/30 text-white border border-white rounded-md focus:outline-none"
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
                  className="w-full px-4 py-2 bg-purple-500/30 text-white border border-white rounded-md focus:outline-none"
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
                  className="w-full px-4 py-2 bg-purple-500/30 text-white border border-white rounded-md focus:outline-none"
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
                  className="w-full px-4 py-2 bg-purple-500/30 text-white border border-white rounded-md focus:outline-none"
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
            <span className="text-[#1987fd] font-semibold ml-1">
              Privacy Policy
            </span>
            . Bizmetric will only use this information to contact you about the
            products and services you requested.
          </div>
        </form>
      </div>
    </section>
  );
}
