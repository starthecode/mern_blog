import React from 'react';
import {
  FiHome,
  FiFileText,
  FiBookOpen,
  FiTag,
  FiUsers,
  FiMail,
  FiGlobe,
  FiBarChart,
  FiSettings,
  FiChevronRight,
  FiChevronDown,
} from 'react-icons/fi';
import { MdOutlineBrush } from 'react-icons/md';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const DashSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'Dashboard';

  const currentSub = searchParams.get('sub') || '';

  const [openPages, setOpenPages] = React.useState(false);

  const navigate = useNavigate();

  const menuItems1 = [
    { name: 'Dashboard', icon: <FiHome /> },
    { name: 'Posts', link: '/customlink', icon: <FiBookOpen /> },
    {
      name: 'Pages',
      icon: <FiFileText />,
      subpages: [
        { name: 'All Pages', link: '/dashboard/pages' },
        { name: 'Add New Page', link: '/dashboard/page-new' },
        { name: 'Categories', link: '/dashboard/pages/categories' },
        { name: 'Tags', link: '/dashboard/pages/tags' },
      ],
    },

    { name: 'Tags', icon: <FiTag /> },
    { name: 'Authors', icon: <FiUsers /> },
    { name: 'Members', icon: <FiMail /> },
  ];

  const menuItems2 = [
    { name: 'Domains', icon: <FiGlobe /> },
    { name: 'Analytics', icon: <FiBarChart /> },
    { name: 'Profile', icon: <MdOutlineBrush /> },
    { name: 'Settings', icon: <FiSettings /> },
  ];

  const handleTabClick = (tab, sub, customLink) => {
    if (!customLink && !sub) {
      // Only set tab in URL (no navigation)
      const params = { tab };
      const search = new URLSearchParams(params);
      navigate(`/dashboard?${search}`);
      return;
    }

    if (customLink) {
      navigate(customLink);
      return;
    }

    const params = { tab };
    if (sub) params.sub = sub;
    const search = new URLSearchParams(params);

    navigate(`/dashboard?${search}`);
  };

  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <nav className="mt-4">
        {menuItems1.map((item) => (
          <div key={item.name}>
            <button
              className={`flex items-start text-left w-full px-3 py-4 text-sm rounded-lg transition ${
                item.subpages
                  ? openPages && currentTab === item.name
                    ? 'bg-gray-100 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                  : currentTab === item.name
                  ? 'bg-gray-100 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => {
                if (item.subpages) {
                  setOpenPages((prev) => !prev); // Only toggle dropdown
                } else {
                  handleTabClick(item.name, null, item.link);
                }
              }}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="ml-3 flex-1">{item.name}</span>
              {item.subpages && (
                <span className="text-sm">
                  {openPages ? <FiChevronDown /> : <FiChevronRight />}
                </span>
              )}
            </button>

            {item.subpages && openPages && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subpages.map((sub) => (
                  <button
                    key={sub.name}
                    className={`flex items-center w-full px-2 py-2 text-sm rounded-lg transition ${
                      currentSub === sub.name
                        ? 'bg-gray-100 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() =>
                      handleTabClick(item.name, sub.name, sub.link)
                    }
                  >
                    <span className="ml-2">{sub.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <hr className="my-4" />
      <nav>
        {menuItems2.map((item) => (
          <button
            key={item.name}
            className={`flex items-center w-full px-3 py-4 text-sm rounded-lg transition ${
              currentTab === item.name
                ? 'bg-gray-100 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => handleTabClick(item.name)}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="ml-3">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
