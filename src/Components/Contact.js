//write a contact page with all the validations for the form
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.number().required("Required"),
  message: Yup.string().required("Required"),
});
function Contact() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" id="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field type="text" name="phone" id="phone" />
            <ErrorMessage name="phone" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" id="message" />
            <ErrorMessage name="message" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
export default Contact;