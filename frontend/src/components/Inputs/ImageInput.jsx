import { BiPencil } from 'react-icons/bi';
import { useState } from 'react';
import MediaLibraryModal from '../extras/MediaLibraryModal';

const ImageInput = ({ index, watchAll, setValue, type, title }) => {
  const [showMediaModal, setShowMediaModal] = useState(false);

  const handleSelectImage = (url) => {
    setValue(`${type}.${index}.${title}`, url);
  };

  const imageUrl = watchAll?.[type]?.[index]?.[title];

  return (
    <div className="relative w-24">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="preview"
          className="w-18 h-18 object-cover rounded"
        />
      ) : (
        <div className="w-18 h-18 bg-gray-200 flex items-center justify-center rounded">
          No Image
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowMediaModal(true)}
        className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer"
      >
        <BiPencil className="w-4 h-4 text-gray-600" />
      </button>

      <MediaLibraryModal
        isOpen={showMediaModal}
        onSelect={handleSelectImage}
        onClose={() => setShowMediaModal(false)}
      />
    </div>
  );
};

export default ImageInput;
