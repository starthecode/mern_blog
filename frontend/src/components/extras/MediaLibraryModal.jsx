import React, { useState, useEffect } from 'react';

const MediaLibraryModal = ({ isOpen, onSelect, onClose }) => {
  const [mediaList, setMediaList] = useState([]);
  const [tab, setTab] = useState('library'); // 'library' or 'upload'

  useEffect(() => {
    if (tab === 'library') {
      fetch('/api/file/media')
        .then((res) => res.json())
        .then(setMediaList);
    }
  }, [tab]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/file/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    onSelect(data.fileUrl); // or filePath based on what your server sends
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-[90%] max-w-2xl shadow-md">
        <div className="flex justify-between mb-4">
          <button type='button' onClick={() => setTab('library')}>Media Library</button>
          <button type='button' onClick={() => setTab('upload')}>Upload</button>
          <button type='button' onClick={onClose} className="text-red-500">
            ✕
          </button>
        </div>

        {tab === 'upload' && <input type="file" onChange={handleUpload} />}

        {tab === 'library' && (
          <div className="grid grid-cols-4 gap-4 max-h-[400px] overflow-y-auto">
            {mediaList.map((img) => (
              <img
                key={img.name}
                src={img.url}
                className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80"
                onClick={() => {
                  onSelect(img.url);
                  onClose();
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default MediaLibraryModal;
