'use client';
import React, { useState } from 'react';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import Link from 'next/link';
import ContactDetails from './ContactDetails';
import { SubmitButton } from '@/components/Buttons/SubmitButton';
import { sendMail } from '@/services/mailService';
import { usePathname } from 'next/navigation';

type ContactState = {
  state: 'loading' | 'error' | 'success' | string;
  message?: string;
  email: string;
  emailDesc: string;
};

export const Contact = () => {
  const [form, setForm] = useState<ContactState>({
    state: '',
    email: '',
    emailDesc: '', // Initialize emailDesc
  });

  const pathname = usePathname();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // Dynamically update the state based on the input field's name
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, emailDesc } = form; // Destructure values from form state

    const mailSubject = 'Test Subject';
    const content = emailDesc;
    const toEmail: any = email;

    if (email) {
      setForm((prevForm) => ({ ...prevForm, state: 'loading' }));
      try {
        const res = await sendMail({ mailSubject, toEmail, content, pathname });

        console.log('res', res);

        // const { error } = await res.json();

        // if (error) {
        //   // setForm({ state: 'error', message: error });
        //   return error;
        // }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
          email: '', // Clear email input
          emailDesc: '', // Clear emailDesc input
        });
      } catch (error) {
        return error;
        // setForm({
        //   state: 'error',
        //   message: 'Something went wrong',
        // });
      }
    }
  };

  return (
    <>
      <section className="w-full items-center grid justify-center mt-40">
        <div className="bg-[#f7f9fc] dark:bg-onyx-900 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-10 rounded-[58px]">
          <div className="mx-auto relative max-w-[1320px]">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">
                  Contact us
                </p>
                <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
                  Have an query in mind?
                </h2>
                <p className="text-text text-gray-600 mb-[30px] md:mb-[60px]">
                  The right move at the right time saves your work. live the
                  dream of expanding your business.
                </p>
                <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
                  <div>
                    <div className="flex gap-[13px] mb-[15px] md:mb-[25px]">
                      <HiBuildingOffice2
                        size={30}
                        className="fill-flamingo-600"
                      />
                      <p className="text-heading-6 font-bold font-chivo">
                        CORPORATE OFFICE
                      </p>
                    </div>
                    <p className="text-text text-gray-600">
                      Biz-Metric Partners Inc,
                    </p>
                    <p className="text-text text-gray-600 mb-[10px] md:mb-[16px]">
                      1650 Highway 6, Suite 130, Sugar Land, TX 77478
                    </p>

                    <div className="flex gap-2 items-center text-sm">
                      <Link
                        href="phoneto: 832742-9957"
                        className="text-md text-gray-600"
                      >
                        (832) 742-9957
                      </Link>
                      <span className="text-onyx-700/40 text">|</span>
                      <Link
                        href="mailto: marketing@bizmetric.com"
                        className="text-md text-gray-600"
                      >
                        marketing@bizmetric.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="flex-1" onSubmit={onSubmitForm}>
                  {/* <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Company (optional)"
                  />
                </div> */}
                  <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                    <input
                      className="outline-none
                    flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-3 px-[30px] relative z-10"
                      type="text"
                      placeholder="Your email"
                      name="email"
                      value={form.email || ''}
                      onChange={handleChange}
                    />
                    {/* <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Phone number"
                  /> */}
                  </div>
                  <textarea
                    className="w-full pt-5 resize-none outline-0 px-[30px] max-h-[150px] mb-10 relative z-10"
                    cols={100}
                    rows={10}
                    name="emailDesc"
                    value={form.emailDesc || ''}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                  ></textarea>
                  <div className="flex flex-col gap-5">
                    <div className="w-fit">
                      <SubmitButton disabled={undefined} title="Send Message" />
                    </div>
                    <p className="text-md text-gray-500">
                      By clicking contact us button, you agree our terms and
                      policy,
                    </p>
                  </div>
                  {form.state === 'loading' ? (
                    <div>Sending....</div>
                  ) : form.state === 'error' ? (
                    <div>{form.message}</div>
                  ) : (
                    form.state === 'success' && <div>Sent successfully</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <ContactDetails />
      </section>
    </>
  );
};
