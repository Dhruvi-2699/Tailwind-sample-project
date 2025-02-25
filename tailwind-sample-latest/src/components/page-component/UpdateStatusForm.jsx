/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputComponent from "../common-components/InputComponent";
import { useContext } from "react";
import DropdownComponent from "../common-components/DropdownComponent";
import ButtonComponent from "../common-components/ButtonComponent";
import PackageContext from "../../context/PackageContext";
function UpdateStatusForm({
  uniqueId,
  packageLocation,
  packageStatus,
  closeModal,
}) {
  const { updateStatusForm } = useContext(PackageContext);
  const validationSchema = Yup.object({
    currentLocation: Yup.string().required("Current Location is required"),
  });

  return (
    <div className="p-6 mx-auto">
      <Formik
        initialValues={{
          currentLocation: packageLocation,
          status: packageStatus,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          updateStatusForm(uniqueId, values.status, values.currentLocation);
          closeModal();
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form className="space-y-4">
            {/* Container for sender and receiver side by side */}
            <div className="grid gap-4">
              <DropdownComponent
                fieldLabel={"Status"}
                fieldName={"status"}
                fieldValue={values.status}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-4">
              <InputComponent
                fieldLabel={"Location"}
                fieldName={"currentLocation"}
                fieldValue={values.currentLocation}
                onChange={handleChange}
              />
            </div>
            <div>
              <ButtonComponent
                type="submit"
                isDisabled={isSubmitting}
                btnName={isSubmitting ? "Saving..." : "Save"}
                btnType={"save"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateStatusForm;
