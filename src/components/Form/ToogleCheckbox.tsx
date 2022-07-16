import { InputHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';

type TextFieldProps = {
  label: string;
  setFieldValue: (name: string, value: any) => void;
};

const ToogleCheckbox = ({
  label,
  setFieldValue,
  ...props
}: TextFieldProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field] = useField(props);

  return (
    <div
      role="button"
      onClick={() => {
        setFieldValue(props.name, !field.value);
      }}
    >
      <label htmlFor={props.name} className="relative inline-flex items-center mb-4 cursor-pointer">
        <input
          id={props.id}
          type="checkbox"
          className="sr-only peer"
          {...field}
          {...props}
          checked={Boolean(field.value)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
        <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
      </label>
    </div>
  );
};

export default ToogleCheckbox;
