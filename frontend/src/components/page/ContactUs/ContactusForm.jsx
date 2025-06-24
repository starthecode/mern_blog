import React, { useState } from 'react';
import {
  HiOutlineBriefcase,
  HiOutlineDotsHorizontal,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

const ContactusForm = () => {
  const [selectedTab, setSelectedTab] = useState('Business Offerings');

  const tabs = [
    {
      label: 'Business Offerings',
      icon: <HiOutlineBriefcase className="w-5 h-5 mr-1" />,
    },
    {
      label: 'Career Opportunities',
      icon: <HiOutlineUserGroup className="w-5 h-5 mr-1" />,
    },
    {
      label: 'Other',
      icon: <HiOutlineDotsHorizontal className="w-5 h-5 mr-1" />,
    },
  ];
  return (
    <div className="container">
      <div className="max-w-xl p-6 bg-white rounded-lg shadow-md relative z-10 -mt-20">
        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setSelectedTab(tab.label)}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors border ${
                selectedTab === tab.label
                  ? 'bg-green-100 text-green-700 border-green-500'
                  : 'bg-gray-100 text-gray-500 border-transparent'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Title and Description */}
        {/* <p className="text-sm text-orange-500 font-medium mb-2">FILL DETAILS</p> */}
        <h2 className="text-2xl font-semibold mb-2">
          We’d Love to hear from you
        </h2>
        <p className="text-gray-500 mb-6 text-md">
          Have a question? Submit your details through our Contact Us form and
          we’ll get back to you soon.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-junglegreen-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flamingo-500"
              placeholder="Type Here"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Business Email *
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-junglegreen-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Type Here"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-junglegreen-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Type Here"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              rows="3"
              className="w-full px-4 py-2 border border-junglegreen-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type Your Message Here"
              required
            ></textarea>
          </div>

          {/* Checkbox Section */}
          <div>
            <label className="block text-sm font-medium mb-2">
              How did you hear about us? *
            </label>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
              {[
                'Social Media',
                'Google Search',
                'Billboard',
                'Third-Party Review',
                'Peer Referral',
                'Other',
              ].map((label) => (
                <label key={label} className="inline-flex items-center">
                  <input type="checkbox" className="mr-2 text-flamingo-500" />
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}

          <div className="w-full flex justify-center pt-5 pb-5">
            <PrimaryButton disabled={''} type={'submit'} title={'Submit Now'} />
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting your information in this form you are agreeing to the
            terms listed in our{' '}
            <a href="#" className="text-flamingo-500 underline text-xs">
              Privacy Policy
            </a>
            . Bitmetric will only use this information to contact you about the
            products and services you requested. We will be in touch with you
            shortly once we receive your details.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactusForm;
