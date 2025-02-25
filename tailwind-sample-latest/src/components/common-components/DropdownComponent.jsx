/* eslint-disable react/prop-types */
import { statusOptions } from "../../utils/static";

function DropdownComponent({ fieldLabel, fieldName, fieldValue, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={fieldLabel} className="text-left block text-md font-bold">
        {fieldLabel}
      </label>
      <select
        id={fieldName}
        name={fieldName}
        value={fieldValue}
        onChange={onChange}
        className="w-full p-2 border-2 border-black-300"
      >
        <option value="">Select {fieldLabel}</option>
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownComponent;
