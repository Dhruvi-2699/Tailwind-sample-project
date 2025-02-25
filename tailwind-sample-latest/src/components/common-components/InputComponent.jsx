/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from "formik";

function InputComponent({ fieldLabel, fieldName, fieldValue, onChange }) {
  return (
    <div>
      <label htmlFor={fieldLabel} className="text-left block text-md font-bold">
        {fieldLabel}:
      </label>
      <Field
        type="text"
        id={fieldName}
        value={fieldValue}
        name={fieldName}
        onChange={onChange}
        className="w-full p-2 border-2 border-black"
      />
      <ErrorMessage
        name={fieldName}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}

export default InputComponent;
