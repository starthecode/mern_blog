import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router';
import React from 'react';

export const SubmitButton = ({ title, disabled }) => {
  return (
    <div>
      <button
        disabled={disabled}
        type="submit"
        className="items-center shadow-flamingo-500/10 dark:shadow-junglegreen-500/10 group relative z-[1] flex w-full gap-1.5 rounded-md border border-flamingo-600 dark:border-junglegreen-500 bg-flamingo-500 dark:bg-junglegreen-500 px-2 py-2 shadow-md before:absolute before:inset-0 before:rounded-md before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 dark:before:border-junglegreen-700 dark:before:bg-gradient-to-b dark:before:from-junglegreen-500"
      >
        <span className="relative z-[2] flex items-center font-bold text-white text-xs ">
          {title}
        </span>
      </button>
    </div>
  );
};
