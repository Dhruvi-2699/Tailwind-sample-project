/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { useContext, useId } from "react";
import * as Yup from "yup";
import ButtonComponent from "../common-components/ButtonComponent";
import InputComponent from "../common-components/InputComponent";
import PackageContext from "../../context/PackageContext";

function AddPackageForm({ closeModal }) {
  const { addPackageData } = useContext(PackageContext);
  const validationSchema = Yup.object({
    senderName: Yup.string()
      .required("Sender name is required")
      .min(3, "Sender name must be at least 3 characters long"),
    receiverName: Yup.string()
      .required("Receiver name is required")
      .min(3, "Receiver name must be at least 3 characters long"),
    sourceLocation: Yup.string().required("Source Location is required"),
    destinationLocation: Yup.string().required(
      "Destination Location is required"
    ),
  });

  return (
    <div className="p-6 mx-auto">
      <Formik
        initialValues={{
          senderName: "",
          receiverName: "",
          sourceLocation: "",
          destinationLocation: "",
          uniqueId: useId(),
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          values = {
            ...values,
            currentLocation: values.sourceLocation,
            status: "Shipped",
          };
          addPackageData(values);
          closeModal();
          // Handle form submission
          console.log("Form submitted with values:", values);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form className="space-y-4">
            {/* Container for sender and receiver side by side */}
            <div className="grid grid-cols-2 gap-4">
              <InputComponent
                fieldLabel={"Sender Name"}
                fieldName={"senderName"}
                fieldValue={values.currentLocation}
                onChange={handleChange}
              />
              <InputComponent
                fieldLabel={"Receiver Name"}
                fieldName={"receiverName"}
                fieldValue={values.currentLocation}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputComponent
                fieldLabel={"Source Location"}
                fieldName={"sourceLocation"}
                fieldValue={values.currentLocation}
                onChange={handleChange}
              />
              <InputComponent
                fieldLabel={"Destination Location"}
                fieldName={"destinationLocation"}
                fieldValue={values.currentLocation}
                onChange={handleChange}
              />
            </div>
            <div>
              <ButtonComponent
                type="submit"
                isDisabled={isSubmitting}
                btnName={isSubmitting ? "Saving..." : "Save"}
                btnType={"Save"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddPackageForm;
