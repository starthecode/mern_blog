import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import InputLabel from '../../Form_Fields/InputLabel';

const PartnerComp = forwardRef(
  ({ partnersData, partnerTitle, setPartnerTitle }, ref) => {
    const { register, control, watch, setValue, getValues } = useForm({
      defaultValues: {
        partners: partnersData,
      },
    });

    const { fields, append, remove } = useFieldArray({
      control,
      name: 'partners',
    });

    const watchAll = watch();

    const [collapsedPartners, setCollapsedPartners] = useState([]);

    const togglePartner = (index) => {
      setCollapsedPartners((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    };

    useImperativeHandle(ref, () => ({
      getPartnersData: () => getValues('partners'),
    }));

    React.useEffect(() => {
      setValue('partners', partnersData);
    }, [partnersData, setValue]);

    const handleImageUpload = async (e, index) => {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/file/upload', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          const err = await res.text();
          alert(`Upload failed: ${err}`);
          return;
        }

        const data = await res.json();
        const uploadedUrl = data.filePath;

        setValue(`partners.${index}.partnersImage`, uploadedUrl);
      } catch (err) {
        alert('Upload error: ' + err.message);
      }
    };

    const handlePartnerTitleChange = (e) => {
      setPartnerTitle(e.target.value);
    };

    return (
      <>
        <h2 className="text-xl font-bold mb-4">Partners</h2>

        <InputLabel
          label="Partner Title"
          name="partnerTitle"
          type="text"
          placeholder="Enter Text"
          value={partnerTitle}
          onChange={handlePartnerTitleChange}
          required
        />

        {fields.map((item, index) => {
          const isCollapsed = collapsedPartners.includes(index);

          return (
            <div
              key={item.id}
              className="border rounded shadow-sm bg-gray-50 mb-4"
            >
              <div className="flex justify-between items-center p-2 bg-gray-200 rounded-t">
                <span className="font-medium">Partner {index + 1}</span>
                <button
                  type="button"
                  className="text-blue-600 text-sm underline"
                  onClick={() => togglePartner(index)}
                >
                  {isCollapsed ? 'Expand' : 'Collapse'}
                </button>
              </div>

              {!isCollapsed && (
                <div className="grid grid-cols-4 gap-2 p-4">
                  <div>
                    <input
                      type="file"
                      onChange={(e) => handleImageUpload(e, index)}
                    />
                    {watchAll?.partners?.[index]?.partnersImage && (
                      <img
                        src={`${watchAll.partners[index].partnersImage}`}
                        alt="preview"
                        className="w-20 mt-2"
                      />
                    )}
                  </div>
                  <input
                    placeholder="Small Text"
                    {...register(`partners.${index}.caseStudyUrl`)}
                  />
                  <button
                    type="button"
                    className="text-red-500 mt-2"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          );
        })}

        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() =>
            append({
              partnersImage: '',
              caseStudyUrl: '',
            })
          }
        >
          Add Row
        </button>
      </>
    );
  }
);

export default PartnerComp;
