/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import PackageContext from "../../context/PackageContext";
import InputComponent from "../common-components/InputComponent";
import ButtonComponent from "../common-components/ButtonComponent";
function UpdateLocationForm({ uniqueId, packageLocation, closeModal }) {
  const { updateLocationForm } = useContext(PackageContext);
  const validationSchema = Yup.object({
    currentLocation: Yup.string().required("Current Location is required"),
  });

  return (
    <div className="p-6 mx-auto">
      <Formik
        initialValues={{
          currentLocation: packageLocation,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          updateLocationForm(uniqueId, values.currentLocation);
          closeModal();
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form className="space-y-4">
            {/* Container for sender and receiver side by side */}
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

export default UpdateLocationForm;
