import React from 'react';
import { motion } from 'framer-motion';

export default function SvgLine3() {
  return (
    <div className="absolute w-full left-[22rem] mt-[70px]">
      <svg
        width={1300}
        fill="none"
        viewBox="0 0 1784 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="paint0_linear_1_824"
            gradientUnits="userSpaceOnUse"
            x1="1334.97"
            x2="1334.97"
            y1="3"
            y2="1299"
          >
            <stop stopColor="#04c89e" />
            <stop offset="0.019868" stopColor="#04c89e" />
            <stop offset="0.983867" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <motion.path
          d="M1337 1033L1340.05 1034.05C1369.91 1044.31 1401 1022.12 1401 990.546V818.718V577.882C1401 552.477 1380.41 531.882 1355 531.882H49C23.5949 531.882 3 511.287 3 485.882V49C3 23.5949 23.5949 3 49 3H76.9626"
          stroke="url(#paint0_linear_1_824)"
          strokeWidth="5"
          opacity="0.8"
          fill="none"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
