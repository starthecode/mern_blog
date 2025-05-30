import React from 'react';

const Tags = () => {
  return (
    <div className="flex items-center gap-2">
      <p>Tags:</p>
      <div className="flex flex-wrap items-center gap-2">
        <a
          href="#"
          className="bg-flamingo-500/10 text-flamingo-600 border border-flamingo-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
        >
          Business
        </a>
        <a
          href="#"
          className="bg-flamingo-500/10 text-flamingo-600 border border-flamingo-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
        >
          Community
        </a>
        <a
          href="#"
          className="bg-flamingo-500/10 text-flamingo-600 border border-flamingo-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
        >
          Announcement
        </a>
        <a
          href="#"
          className="bg-flamingo-500/10 text-flamingo-600 border border-flamingo-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
        >
          Tutorials
        </a>
        <a
          href="#"
          className="bg-flamingo-500/10 text-flamingo-600 border border-flamingo-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
        >
          Resources
        </a>
        <a
          href="#"
          className="bg-flamingo-500/10 text-flamingo-600 border border-flamingo-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
        >
          Interview
        </a>
      </div>
    </div>
  );
};

export default Tags;
