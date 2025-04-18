import { Link } from 'react-router';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { Search } from '../Search/Search';

import MenuItem from './MenuItem';
import SubItem from './SubItem';

import { motion } from 'framer-motion';

const Navbar = ({ scroll, menuList }) => {
  return (
    <>
      <div
        className="hidden invisible z-10
  items-center opacity-0 lg:visible lg:relative lg:flex lg:bg-transparent lg:opacity-100"
      >
        <motion.div className="flex justify-center gap-4">
          {menuList?.map((item, index) => (
            <MenuItem key={index} item={item} scroll={scroll}>
              <SubItem
                key={index}
                menuAcfFields={item.menuAcfFields}
                childrenItem={item.children}
                text="A bizmetric for e-company"
              />
              <div className="relative py-5 px-5 bottom-0 w-full shadow-md border-t-slate-50 bg-white dark:bg-woodsmoke-900/20">
                <span className="text-slate-500 dark:text-white text-xs px-4 flex gap-2 items-center">
                  <HiOutlineQuestionMarkCircle className="w-4 h-4" />
                  <b>Need Help?</b>{' '}
                  <Link
                    className="underline hover:text-flamingo-400"
                    href={'/contact'}
                  >
                    Contact our expert
                  </Link>
                </span>
              </div>
            </MenuItem>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
