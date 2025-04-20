import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHead({ title, setTitle, postId }) {
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const safeTitle = String(title || 'home');
  const permalink = `https://www.bizmetric.com/${safeTitle
    .toLowerCase()
    .replace(/\s+/g, '-')}`;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          {postId ? 'Edit Page' : 'Create Page'}
        </h2>
        <Link
          to="/dashboard/page-new"
          className="text-flamingo-500 border border-flamingo-600/30 px-3 py-1 rounded hover:bg-blue-50"
        >
          Add New Page
        </Link>
      </div>

      <input
        type="text"
        className="form__input py-2"
        value={title}
        onChange={handleTitleChange}
      />

      <div className="text-sm text-gray-700">
        Permalink:{' '}
        <a href={permalink} className="text-blue-600 underline" target="_blank">
          {permalink}
        </a>
      </div>
    </div>
  );
}
