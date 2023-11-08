import { useForm } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}
interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  options?: Option[];
  register: ReturnType<typeof useForm>["register"];
  errors: Record<string, any>;
  validationSchema: {};
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  options,
  register,
  errors,
  validationSchema,
}) => {
  if (type === "select" && options) {
    return (
      <div className="w-full">
        <label>{label}</label>
        <select {...register(name, validationSchema)}>
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors[name] && <p>{errors[name].message}</p>}
      </div>
    );
  }

  return (
    <div className="w-full">
      <label>{label}</label>
      <input type={type} {...register(name, validationSchema)} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};
