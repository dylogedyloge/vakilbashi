import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  keywords: Yup.string().required("Keywords is required"),
  tone: Yup.string().required("Tone is required"),
  email: Yup.string()
    .required("Choose one"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  keywords: "",
  tone: "",
  choosedIntro: "",
  faqs: "",
  headings: "",

};

const StepIndicator = ({ currentStep }) => (
  <div>
    <span>{currentStep === 1 ? "Step 1" : "Step 2"}</span>
  </div>
);

const StepContent = ({ currentStep, formikProps }) => {
  const { errors, touched } = formikProps;

  switch (currentStep) {
    case 1:
      return (
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" />
          {errors.firstName && touched.firstName && (
            <div>{errors.firstName}</div>
          )}
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" />
          {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
        </div>
      );
    case 2:
      return (
        <div>
          <label htmlFor="email">Email Address</label>
          <Field id="email" name="email" />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
      );
    default:
      return null;
  }
};

const StepperForm = () => {
  const [step, setStep] = React.useState(1);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form>
          <StepIndicator currentStep={step} />
          <StepContent currentStep={step} formikProps={formik} />
          {step === 1 && (
            <button
              type="button"
              onClick={() => {
                setStep(2);
                formik.setTouched({ firstName: true, lastName: true });
              }}
              disabled={
                (formik.errors.firstName || formik.errors.lastName) &&
                (formik.touched.firstName || formik.touched.lastName)
              }
            >
              Next
            </button>
          )}
          {step === 2 && (
            <>
              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
              <button type="button" onClick={() => setStep(1)}>
                Back
              </button>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default StepperForm;
