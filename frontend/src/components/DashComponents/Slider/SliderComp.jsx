import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const SliderForm = forwardRef(({ slidersData }, ref) => {
  const { register, control, watch, setValue, getValues } = useForm({
    defaultValues: {
      sliders: slidersData,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sliders',
  });

  const watchAll = watch();

  const [collapsedSliders, setCollapsedSliders] = useState([]);

  const toggleSlider = (index) => {
    setCollapsedSliders((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  useImperativeHandle(ref, () => ({
    getSlidersData: () => getValues('sliders'),
  }));

  React.useEffect(() => {
    setValue('sliders', slidersData);
  }, [slidersData, setValue]);

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

      setValue(`sliders.${index}.sliderImage`, uploadedUrl);
    } catch (err) {
      alert('Upload error: ' + err.message);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Sliders</h2>

      {fields.map((item, index) => {
        const isCollapsed = collapsedSliders.includes(index);

        return (
          <div
            key={item.id}
            className="border rounded shadow-sm bg-gray-50 mb-4"
          >
            <div className="flex justify-between items-center p-2 bg-gray-200 rounded-t">
              <span className="font-medium">Slider {index + 1}</span>
              <button
                type="button"
                className="text-blue-600 text-sm underline"
                onClick={() => toggleSlider(index)}
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
                  {watchAll?.sliders?.[index]?.sliderImage && (
                    <img
                      src={`/${watchAll.sliders[index].sliderImage}`}
                      alt="preview"
                      className="w-20 mt-2"
                    />
                  )}
                </div>
                <input
                  className="py-0"
                  placeholder="Small Text"
                  {...register(`sliders.${index}.smallText`)}
                />
                <input
                  placeholder="Title"
                  {...register(`sliders.${index}.titleText`)}
                />
                <input
                  placeholder="Sub Text"
                  {...register(`sliders.${index}.subText`)}
                />
                <input
                  placeholder="Sub Text Two"
                  {...register(`sliders.${index}.subTextTwo`)}
                />
                <input
                  placeholder="Sub Text Three"
                  {...register(`sliders.${index}.subTextThree`)}
                />
                <input
                  placeholder="Button Text"
                  {...register(`sliders.${index}.buttonText`)}
                />
                <input
                  placeholder="Button URL"
                  {...register(`sliders.${index}.buttonUrl`)}
                />
                <input
                  placeholder="Button Text Two"
                  {...register(`sliders.${index}.buttonTextTwo`)}
                />
                <input
                  placeholder="Button URL Two"
                  {...register(`sliders.${index}.buttonUrlTwo`)}
                />
                <input
                  placeholder="Custom Class"
                  {...register(`sliders.${index}.customClass`)}
                />
                <input
                  placeholder="Custom Class 2"
                  {...register(`sliders.${index}.customClassTwo`)}
                />
                <input
                  placeholder="Is Custom"
                  {...register(`sliders.${index}.isCustom`)}
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
            sliderImage: '',
            smallText: '',
            titleText: '',
            subText: '',
            subTextTwo: '',
            subTextThree: '',
            buttonText: '',
            buttonUrl: '',
            buttonTextTwo: '',
            buttonUrlTwo: '',
            customClass: '',
            customClassTwo: '',
            isCustom: '',
          })
        }
      >
        Add Row
      </button>
    </>
  );
});

export default SliderForm;
