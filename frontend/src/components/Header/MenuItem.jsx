import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { useState } from 'react';

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    },
  },
};

const MenuItem = ({ item, scroll, children, ...props }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="px-4 relative cursor-pointer py-8"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <Link
        href={item?.url}
        className={`${
          scroll ? '!text-[12px] text-onyx-900 transition-all' : 'text-white'
        } ${
          item?.url == '#' && 'pointer-events-none'
        } relative sm:text-sm md:text-md 2xl:text-lg font-bold hover:text-flamingo-400`}
      >
        {item?.menuAcfFields?.menuLabel098 && (
          <label className="absolute -top-5 -right-6 bg-junglegreen-100/80 text-junglegreen-800 flex items-center text-[0.6rem] font-medium mr-2 px-2 py-0 rounded-full ml-4">
            <span>{item?.menuAcfFields?.menuLabel098}</span>
          </label>
        )}

        {item.title}
      </Link>
      {item?.children.length > 0 && isBeingHovered && (
        <div className="relative min-w-max top-5">
          <motion.div
            {...props}
            layoutId="menu"
            className="absolute shadow-lg bg-white rounded-lg -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default MenuItem;
