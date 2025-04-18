import { FaMagnifyingGlass } from 'react-icons/fa6';
import { HiXMark } from 'react-icons/hi2';

import { flatListToHierarchical } from '../../utils/flatListToHierarchical';
// import { Toggle } from './Toggle';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Search } from '../Search/Search';
import { MobileNav } from './MobileNav';
import { Logo } from '../Logo';
import { UserProfile } from './UserProfile';
// import PopupContext from '../Extras/Popups/PopupContext';

const Header = ({ menus }) => {
  const menuList = flatListToHierarchical(menus?.nodes);
  const [active] = useState(false);

  // const { openPopup } = useContext(PopupContext);

  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  const handleSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  const headerClasses = `rounded-xl relative z-20 transition-all ease-in-out duration-500 ${
    scroll
      ? 'w-[80%] bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950 shadow-lg'
      : 'w-full'
  }`;

  return (
    <>
      <header>
        <div
          className={`relative flex justify-center items-center w-full ${
            width < 1024 && active
              ? 'mobile-nav--active inset-0 z-30 fixed'
              : 'large-menu'
          } `}
        >
          <div
            className={`mobile-nav-btns lg:items-center flex lg:justify-start md:justify-between sm:justify-between ${headerClasses} px-4 lg:px-6 lg:xl:px-24`}
          >
            <div className="flex justify-between lg:w-full items-center">
              <Logo />

              <Navbar
                scroll={scroll}
                menuList={menuList}
                active={active}
                width={width}
              />

              <div className="flex relative items-center">
                {/* Menu Open-Close Button */}

                <div className="relative z-20">
                  <button
                    onClick={() => handleSearch()}
                    className="flex ml-2 h-7 w-7 items-center justify-center rounded-full border border-onyx-400/40"
                  >
                    {!showSearch ? (
                      <FaMagnifyingGlass className="h-4 w-4 fill-flamingo-600 dark:fill-[#00a59a]" />
                    ) : (
                      <HiXMark className="h-4 w-4 fill-flamingo-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${
                showSearch
                  ? 'opacity-100 bg-[#f7f9fc] dark:bg-gradient-to-t from-onyx-950 to-woodsmoke-950 w-[70%]'
                  : 'opacity-0 bg-transparent w-0'
              } absolute z-10 right-[130px] h-[60px] rounded-xl transition-all ease-out duration-700 border border-woodsmoke-200/10`}
            >
              <Search active={active} width={width} />
            </div>
            <div className="ml-4">
              <UserProfile />
            </div>
          </div>
        </div>
        <div
          className={`${
            width < 1024 && active
              ? 'block absolute z-20 inset-0 px-10 py-10'
              : 'hidden'
          } lg:relative h-fit lg:flex bg-[#f7f9fc] dark:bg-gradient-to-t from-onyx-950 to-woodsmoke-950`}
        >
          {/* Mobile Menu */}
          <MobileNav menuList={menuList} />
        </div>
      </header>
    </>
  );
};

export default Header;
