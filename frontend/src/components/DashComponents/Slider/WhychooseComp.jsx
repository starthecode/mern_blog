import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import InputLabel from '../../Form_Fields/InputLabel';

const WhychooseComp = forwardRef(
  ({ whychooseData, whychooseTitle, setWhychooseTitle }, ref) => {
    const { register, control, watch, setValue, getValues } = useForm({
      defaultValues: {
        whychoose: whychooseData,
      },
    });

    const { fields, append, remove } = useFieldArray({
      control,
      name: 'whychoose',
    });

    const watchAll = watch();

    const [collapsedWhychoose, setCollapsedWhychoose] = useState([]);

    const toggleWhychoose = (index) => {
      setCollapsedWhychoose((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    };

    useImperativeHandle(ref, () => ({
      getWhychooseData: () => getValues('whychoose'),
    }));

    React.useEffect(() => {
      setValue('whychoose', whychooseData);
    }, [whychooseData, setValue]);

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

        setValue(`whychoose.${index}.whychooseImage`, uploadedUrl);
      } catch (err) {
        alert('Upload error: ' + err.message);
      }
    };

    const handleWhychooseTitleChange = (e) => {
      setWhychooseTitle(e.target.value);
    };

    return (
      <>
        <h2 className="text-xl font-bold mb-4">Whychoose</h2>

        <InputLabel
          label="Whychoose Title"
          name="whychooseTitle"
          type="text"
          placeholder="Enter Text"
          value={whychooseTitle}
          onChange={handleWhychooseTitleChange}
          required
        />

        {fields.map((item, index) => {
          const isCollapsed = collapsedWhychoose.includes(index);

          return (
            <div
              key={item.id}
              className="border rounded shadow-sm bg-gray-50 mb-4"
            >
              <div className="flex justify-between items-center p-2 bg-gray-200 rounded-t">
                <span className="font-medium">Whychoose {index + 1}</span>
                <button
                  type="button"
                  className="text-blue-600 text-sm underline"
                  onClick={() => toggleWhychoose(index)}
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
                    {watchAll?.whychoose?.[index]?.whychooseImage && (
                      <img
                        src={`/${watchAll.whychoose[index].whychooseImage}`}
                        alt="preview"
                        className="w-20 mt-2"
                      />
                    )}
                  </div>
                  <input
                    placeholder="Icon"
                    {...register(`whychoose.${index}.whychooseIcon`)}
                  />
                  <input
                    placeholder="Name"
                    {...register(`whychoose.${index}.whychooseName`)}
                  />

                  <input
                    placeholder="Subname"
                    {...register(`whychoose.${index}.whychooseSubName`)}
                  />
                  <input
                    placeholder="button text"
                    {...register(`whychoose.${index}.whychooseBtnName`)}
                  />
                  <input
                    placeholder="button url"
                    {...register(`whychoose.${index}.whychooseBtnUrl`)}
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
              whychooseImage: '',
              whychooseIcon: '',
              whychooseName: '',
              whychooseSubName: '',
              whychooseBtnName: '',
              whychooseBtnUrl: '',
            })
          }
        >
          Add Row
        </button>
      </>
    );
  }
);

export default WhychooseComp;
