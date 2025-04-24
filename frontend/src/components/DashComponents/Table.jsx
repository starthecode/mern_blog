import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;

export default function TableComp({ data = [] }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedPages = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            Add New Page
          </button>
          <span className="text-sm text-gray-600">
            All ({data.length}) {/* Can add count by status if needed */}
          </span>
          |
          <span className="text-sm text-gray-600">
            Trash 0 {/* Can add count by status if needed */}
          </span>
        </div>
        <input
          type="text"
          placeholder="Search Pages"
          className="border px-2 py-1 rounded text-sm"
        />
      </div>

      <table className="w-full border text-sm bg-white">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">
              <input type="checkbox" />
            </th>
            <th className="p-2">Title</th>
            <th className="p-2">Author</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPages.map((page) => (
            <tr key={page.id} className="border-t hover:bg-gray-50">
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(page.id)}
                  onChange={() => toggleSelect(page.id)}
                />
              </td>
              <td className="p-2">
                <div className="font-medium text-blue-700">{page.title}</div>
                <div className="text-xs text-gray-500 space-x-2 mt-2">
                  <Link
                    to={`/dashboard/page-new?page=${page.pageId}&action=edit`}
                    className="hover:underline"
                  >
                    Edit
                  </Link>{' '}
                  <button className="hover:underline text-[1.3em] text-red-500">
                    Trash
                  </button>
                  <Link
                    to={page.title === 'home' ? '/' : `/${page.slug}`}
                    className="hover:underline"
                  >
                    View
                  </Link>
                </div>
              </td>
              <td className="p-2">{page.author}</td>

              <td className="p-2">
                {page.status === 'Draft' ? (
                  <span className="italic text-gray-500">
                    Last Modified
                    <br />
                    {page.date}
                  </span>
                ) : (
                  <>
                    <span className="text-gray-700">Published</span>
                    <br />
                    {page.date}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-700">
        <span>{data.length} items</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-2 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            «
          </button>
          <span>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            className="px-2 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
