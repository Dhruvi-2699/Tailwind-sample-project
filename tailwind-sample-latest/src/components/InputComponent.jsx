/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik'

function InputComponent({fieldLabel, fieldName}) {
  return (
    <div>
                <label htmlFor="senderName" className="block text-lg">{fieldLabel}</label>
                <Field
                  type="text"
                  id={fieldName}
                  name={fieldName}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name={fieldName}
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
  )
}

export default InputComponent