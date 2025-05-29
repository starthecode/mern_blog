import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import DropdownButton from '../../Tabs/DropdownButton';
import RemoveButton from '../../Tabs/RemoveButton';
import AddButton from '../../Tabs/AddButton';
import { threeboxesInputFields } from '../../../utils/fields';
import FormInput from '../../Inputs/FormInput';

const ThreeBoxes = forwardRef(({ threeBoxesData }, ref) => {
  const { register, control, setValue, getValues } = useForm({
    defaultValues: {
      threeboxes: threeBoxesData,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'threeboxes',
  });

  const [collapsedThreeBoxes, setCollapsedThreeBoxes] = useState([]);

  const toggleThreeBoxes = (index) => {
    setCollapsedThreeBoxes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  useImperativeHandle(ref, () => ({
    getThreeBoxesData: () => getValues('threeboxes'),
  }));

  React.useEffect(() => {
    setValue('threeboxes', threeBoxesData);
  }, [threeBoxesData, setValue]);

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Three Boxes</h2>

      {fields.map((item, index) => {
        const isCollapsed = collapsedThreeBoxes.includes(index);

        return (
          <div
            key={item.id}
            className="border rounded shadow-sm bg-gray-50 mb-4"
          >
            <div className="flex justify-between items-center p-2 bg-flamingo-500/30 rounded-t">
              <span className="font-medium">Three Boxes {index + 1}</span>

              <DropdownButton
                isCollapsed={isCollapsed}
                toggleAction={toggleThreeBoxes}
                index={index}
              />
            </div>

            {!isCollapsed && (
              <div className="w-full">
                <div className="grid grid-cols-4 gap-2 p-4">
                  {threeboxesInputFields.map(({ name, placeholder }) => (
                    <FormInput
                      key={name}
                      placeholder={placeholder}
                      name={`threeboxes.${index}.${name}`}
                      register={register}
                    />
                  ))}
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
          threeboxesIcon: '',
          threeboxesName: '',
          threeboxesSubtext: '',
        }}
      />
    </>
  );
});

export default ThreeBoxes;
