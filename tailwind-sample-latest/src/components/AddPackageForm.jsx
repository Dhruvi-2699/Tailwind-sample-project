import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';

function AddPackageForm() {
    const validationSchema = Yup.object({
        senderName: Yup.string()
          .required('Sender name is required')
          .min(3, 'Sender name must be at least 3 characters long'),
        receiverName: Yup.string()
          .required('Receiver name is required')
          .min(3, 'Receiver name must be at least 3 characters long'),
        sourceLocation: Yup.string()
          .required('Source Location is required'),
        destinationLocation: Yup.string()
          .required('Destination Location is required')
      });
      
  return (
    <div className="p-6 mx-auto">
    <Formik
      initialValues={{
        senderName: '',
        receiverName: '',
        sourceLocation: '',
        destinationLocation: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // setPackageData(values)
        // Handle form submission
        console.log('Form submitted with values:', values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
        {/* Container for sender and receiver side by side */}
        <div className="grid grid-cols-2 gap-4">
          <InputComponent fieldLabel={'Sender Name'} fieldName={'senderName'}/>
          <InputComponent fieldLabel={'Receiver Name'} fieldName={'receiverName'}/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputComponent fieldLabel={'Source Location'} fieldName={'sourceLocation'}/>
          <InputComponent fieldLabel={'Destination Location'} fieldName={'destinationLocation'}/>
        </div>
        <div>
        <ButtonComponent
        type="submit"
        isDisabled={isSubmitting} 
        btnName={isSubmitting ? 'Submitting...' : 'Submit'}
        btnType={"submit"}/>
        </div>
      </Form>
      )}
    </Formik>
  </div>
  )
}

export default AddPackageForm