import Form from "../components/UI/Form/Form";
import useInput from "../hooks/useInput";

const FORM_FIELD_STATIC = {
  patientName: {
    label: "Patient Name",
    input: {
      type: "text",
      placeholder: "Patient Name",
    },
    errorMsg: "Enter Patient Name",
  },
  patientAge: {
    label: "Patient Age",
    input: {
      type: "number",
      min: "0",
      step: "1",
      placeholder: "Patient Age",
    },
    errorMsg: "Enter Patient Age",
  },
  doctorName:{
    label: "Doctor Name",
    input: {
      type: "text",
      placeholder: "Doctor Name",
    },
    errorMsg: "Enter Doctor Name",
  },
  bookingDate: {
    label: "Booking Date",
    input: {
      type: "date",
    },
    errorMsg: "Choose Booking Date",
  },
};

const AddBookingPage = () => {
  const patientNameInput = useInput((value) => value !== "");
  const patientAgeInput = useInput((value) => value !== "");
  const doctorNameInput = useInput((value) => value !== "");
  const bookingDateInput = useInput((value) => value !== "");

  const formFieldList = [
    {
      id: 1,
      static: FORM_FIELD_STATIC.patientName,
      action: patientNameInput,
    },
    {
      id: 2,
      static: FORM_FIELD_STATIC.patientAge,
      action: patientAgeInput,
    },
    {
      id: 3,
      static: FORM_FIELD_STATIC.doctorName,
      action: doctorNameInput,
    },
    {
      id: 4,
      static: FORM_FIELD_STATIC.bookingDate,
      action: bookingDateInput,
    },
  ];

  const isFormValid = formFieldList.reduce(
    (validity, field) => validity && field.action.isValidData,
    true
  );
  const submitFormHandler = (response) => {
    console.log(response);
    console.log(isFormValid);
  };
  return (
    <>
      <h4>Add Booking Page</h4>
      <Form fieldList={formFieldList} onSubmit={submitFormHandler} />
    </>
  );
};
export default AddBookingPage;
