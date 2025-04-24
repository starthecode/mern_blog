import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import InputLabel from '../../Form_Fields/InputLabel';
import DropdownButton from '../../Tabs/DropdownButton';
import RemoveButton from '../../Tabs/RemoveButton';
import AddButton from '../../Tabs/AddButton';
import ImageInput from '../../Inputs/ImageInput';

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

                <DropdownButton
                  isCollapsed={isCollapsed}
                  toggleAction={togglePartner}
                  index={index}
                />
              </div>

              {!isCollapsed && (
                <div className="w-full">
                  <div className="grid grid-cols-4 gap-2 p-4">
                    <ImageInput
                      type="partners"
                      title="partnersImage"
                      index={index}
                      watchAll={watchAll}
                      setValue={setValue}
                    />
                    <input
                      placeholder="Small Text"
                      {...register(`partners.${index}.caseStudyUrl`)}
                    />
                  </div>
                  <RemoveButton removeAction={remove} index={index} />
                </div>
              )}
            </div>
          );
        })}

        <AddButton
          append={append}
          defaultValues={{
            partnersImage: '',
            caseStudyUrl: '',
          }}
        />
      </>
    );
  }
);

export default PartnerComp;
