import { InputHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig, ErrorMessage } from 'formik';

type TextFieldProps = {
  label: string;
};

const Input = ({
  label,
  ...props
}: TextFieldProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        {...field}
        {...props}
        className={`${
          meta.error ? 'border-b-red-600 focus:border-b-red-600' : ''
        } block bg-transparent py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
      />
      <label
        htmlFor={props.name}
        className={`${meta.error ? 'text-red-600' : ''} ${
          meta.value?.length > 0 ? '-translate-y-6 scale-75' : ''
        } peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform top-3 -z10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
      >
        {label}
      </label>
      <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />
    </div>
  );
};

export default Input;
