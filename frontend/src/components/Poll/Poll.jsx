import React, { useState } from 'react';
import PollQuestion from './PollQuestion';

export const Poll = () => {
  const [activePoll, setActivePoll] = useState(false);

  const handlePoll = () => {
    setActivePoll((prevActive) => !prevActive);
  };

  return (
    <div
      className={`fixed right-0 bottom-16 h-auto z-20 overflow-hidden flex flex-col transition-transform duration-300 transform -rotate-90 ${
        activePoll ? '-translate-x-[15px]' : 'translate-x-[210px]'
      }`}
    >
      <div
        onClick={handlePoll}
        className={`flex right-0 rounded-tl-lg rounded-tr-lg justify-center text-center h-fit cursor-pointer shadow-lg shadow-junglegreen-200 border border-ebony-400/30 bg-woodsmoke-200/30 px-1 py-2`}
      >
        <p className="font-bold uppercase block text-white">Poll</p>
      </div>
      <div className={`w-[230px] shadow-lg flex flex-col`}>
        {' '}
        <PollQuestion />
      </div>
    </div>
  );
};
