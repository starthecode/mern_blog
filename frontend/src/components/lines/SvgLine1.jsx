import React from 'react';

import { motion } from 'framer-motion';

export default function SvgLine1() {
  return (
    <div className="relative px-10 -mt-[300px] hidden xl:block">
      <svg
        fill="none"
        viewBox="0 0 1723 774"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="paint0_linear_1_1005"
            gradientUnits="userSpaceOnUse"
            x1="39.8455"
            x2="39.8455"
            y1="3"
            y2="771"
          >
            <stop stopColor="#04c89e" />
            <stop offset="0.0314417" stopColor="#04c89e" />
            <stop offset="0.959393" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <motion.path
          d="M76.6911 771H49C23.5949 771 3 750.405 3 725V350C3 324.595 23.5949 304 49 304H1674C1699.41 304 1720 283.405 1720 258V49C1720 23.5949 1699.41 3 1674 3H1636.26"
          stroke="url(#paint0_linear_1_1005)"
          strokeWidth="5"
          opacity="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
