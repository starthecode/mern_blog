import React from 'react';
import { BiDownArrow, BiLogOut } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { PrimaryButton } from '../Buttons/PrimaryButton';

import { useSelector } from 'react-redux';

export const UserProfile = () => {
  // const { data: session, status } = useSession();

  const { currentUser } = useSelector((state) => state.user);

  const [active, setActive] = React.useState(false);

  const handleDropdown = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <>
      {currentUser ? (
        <div className="relative block">
          <button
            onClick={handleDropdown}
            type="button"
            className="relative w-[120px] z-10 py-1 ps-1 pe-3 flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-flamingo-500 text-gray-800 shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-junglegreen-500 dark:border-junglegreen-500 dark:text-white dark:focus:bg-none"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <img
              width={20}
              height={20}
              className="w-8 h-auto rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Avatar"
            />
            <span className="font-medium truncate max-w-[7.5rem] text-white">
              {currentUser?.userName}
            </span>
            <BiDownArrow color="white" />
          </button>

          <div
            className={`${
              active ? 'flex flex-col opacity-100' : 'hidden opacity-0'
            } absolute right-0 w-[120px] transition-opacity duration min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-custom-trigger"
          >
            <ul>
              <li className="border-b">
                <p className="p-2 flex flex-col">
                  <span className="text-sm">Signed in as</span>
                  <span className="text-sm">{currentUser?.email}</span>
                </p>
              </li>
              {/* <li className="mt-2">
                {session?.user?.role === 'administrator' ? (
                  <Link
                    className="flex gap-1 items-center py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="/dashboard"
                  >
                    <MdDashboard /> Dashboard
                  </Link>
                ) : (
                  <Link
                    className="flex gap-1 items-center py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="/write"
                  >
                    <MdDashboard /> Write Article
                  </Link>
                )}
              </li> */}

              <li>
                <button
                  className="flex w-full gap-1 items-center py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                  onClick={() => null}
                >
                  <BiLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        // <Link href={'/login'} className="relative z-10">
        //   Signin
        // </Link>
        <PrimaryButton title="Contact Us" link="/contact-us" />
      )}
    </>
  );
};
