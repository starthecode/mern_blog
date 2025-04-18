import React, { useState } from 'react';
import { formatDate } from '../../utils/utils';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function PublishPanel({ postid, pageDate }) {
  const [status, setStatus] = useState('Draft');
  const [editing, setEditing] = useState(false);
  const [tempStatus, setTempStatus] = useState(status);

  const navigate = useNavigate();

  const handleOk = () => {
    setStatus(tempStatus);
    setEditing(false);
  };

  const handleCancel = () => {
    setTempStatus(status);
    setEditing(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this page? This action cannot be undone.'
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/page/delete/${postid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await res.json();

      console.log('data', data);

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      if (data.success) {
        toast.success('Page Deleted');
        navigate(`/dashboard/pages`);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  React.useEffect(() => {
    if (postid) {
      setStatus('Published');
      setTempStatus('Published');
    }
  }, [postid]);

  return (
    <div className="w-full max-w-sm p-4 border rounded shadow-sm bg-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Publish</h3>
        <div className="text-xl cursor-pointer">▾</div>
      </div>

      <div className="mb-3">
        <p className="text-sm">
          <strong>Status:</strong>{' '}
          {!editing ? (
            <>
              {status}{' '}
              <button
                onClick={() => setEditing(true)}
                className="text-blue-600 underline text-xs ml-1"
              >
                Edit
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2 mt-2">
              <select
                value={tempStatus}
                onChange={(e) => setTempStatus(e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option>Published</option>
                <option>Pending Review</option>
                <option>Draft</option>
              </select>
              <div className="flex gap-2 text-sm">
                <button
                  onClick={handleOk}
                  className="text-blue-600 border border-blue-600 px-2 py-1 rounded"
                >
                  OK
                </button>
                <button
                  onClick={handleCancel}
                  className="text-blue-600 underline"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </p>
      </div>

      <div className="text-sm mb-3">
        <span className="text-gray-700">Publish on:</span>{' '}
        {pageDate ? formatDate(pageDate) : 'immediately '}{' '}
        <button className="text-blue-600 underline text-xs ml-1">Edit</button>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white font-medium px-4 py-2 rounded w-full hover:bg-blue-700 transition mt-4"
      >
        {postid ? 'Update' : 'Publish'}
      </button>

      {pageDate && postid && (
        <button
          type="button"
          onClick={handleDelete}
          className="text-red-500 font-medium px-4 py-2 rounded w-full hover:text-red-800 transition"
        >
          Move to Trash
        </button>
      )}
    </div>
  );
}
