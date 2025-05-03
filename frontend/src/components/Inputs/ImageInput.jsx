import { BiPencil } from 'react-icons/bi';
import { useState } from 'react';
import MediaLibraryModal from '../extras/MediaLibraryModal';

const ImageInput = ({ index, watchAll, setValue, type, title }) => {
  const [showMediaModal, setShowMediaModal] = useState(false);

  const handleSelectImage = (url) => {
    setValue(`${type}.${index}.${title}`, url); // This sends URL to parent
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(`${type}.${index}.${title}`, e); // This sends event to parent
    }
  };

  const imageUrl = watchAll?.[type]?.[index]?.[title];

  return (
    <div className="relative w-24 flex flex-col items-center gap-2">
      {imageUrl ? (
        <img
          src={typeof imageUrl === 'string' ? imageUrl : ''}
          alt="preview"
          className="w-18 h-18 object-cover rounded"
        />
      ) : (
        <div className="w-18 h-18 bg-gray-200 flex items-center justify-center rounded">
          No Image
        </div>
      )}

      <div className="flex gap-2">
        <label className="text-xs text-blue-600 cursor-pointer">
          Upload
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        <button
          type="button"
          onClick={() => setShowMediaModal(true)}
          className="text-xs text-gray-700 underline"
        >
          Choose
        </button>
      </div>

      <MediaLibraryModal
        isOpen={showMediaModal}
        onSelect={handleSelectImage}
        onClose={() => setShowMediaModal(false)}
      />
    </div>
  );
};

export default ImageInput;
