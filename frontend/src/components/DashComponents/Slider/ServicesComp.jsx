import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import InputLabel from '../../Form_Fields/InputLabel';

const ServicesComp = forwardRef(
  ({ servicesData, servicesTitle, setServicesTitle }, ref) => {
    const { register, control, watch, setValue, getValues } = useForm({
      defaultValues: {
        services: servicesData,
      },
    });

    const { fields, append, remove } = useFieldArray({
      control,
      name: 'services',
    });

    const watchAll = watch();

    const [collapsedServices, setCollapsedServices] = useState([]);

    const toggleServices = (index) => {
      setCollapsedServices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    };

    useImperativeHandle(ref, () => ({
      getServicesData: () => getValues('services'),
    }));

    React.useEffect(() => {
      setValue('services', servicesData);
    }, [servicesData, setValue]);

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

        setValue(`services.${index}.servicesImage`, uploadedUrl);
      } catch (err) {
        alert('Upload error: ' + err.message);
      }
    };

    const handleServicesTitleChange = (e) => {
      setServicesTitle(e.target.value);
    };

    return (
      <>
        <h2 className="text-xl font-bold mb-4">Services</h2>

        <InputLabel
          label="Services Title"
          name="servicesTitle"
          type="text"
          placeholder="Enter Text"
          value={servicesTitle}
          onChange={handleServicesTitleChange}
          required
        />

        {fields.map((item, index) => {
          const isCollapsed = collapsedServices.includes(index);

          return (
            <div
              key={item.id}
              className="border rounded shadow-sm bg-gray-50 mb-4"
            >
              <div className="flex justify-between items-center p-2 bg-gray-200 rounded-t">
                <span className="font-medium">Services {index + 1}</span>
                <button
                  type="button"
                  className="text-blue-600 text-sm underline"
                  onClick={() => toggleServices(index)}
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
                    {watchAll?.services?.[index]?.servicesImage && (
                      <img
                        src={`/${watchAll.services[index].servicesImage}`}
                        alt="preview"
                        className="w-20 mt-2"
                      />
                    )}
                  </div>
                  <input
                    placeholder="Small Text"
                    {...register(`services.${index}.servicesName`)}
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
              servicesImage: '',
              servicesName: '',
            })
          }
        >
          Add Row
        </button>
      </>
    );
  }
);

export default ServicesComp;
