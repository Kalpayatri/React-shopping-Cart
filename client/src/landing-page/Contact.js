import React, { useState } from "react";
import Nav from "./Nav";
import { Typography, Box, TextField, Button } from "@mui/material";
import { validationSchema } from "../utils/validationSchema";
import { Formik, Form, Field } from "formik";

const Contact = () => {
  const [fomrData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (values, { resetForm }) => {
    localStorage.setItem("formData", JSON.stringify(values));
    resetForm();
  };
  return (
    <div>
      <Nav />
      <Box marginTop={14}>
        <Typography variant="h2" component="h1" align="center">
          Contact Us
        </Typography>
        <Typography variant="body2" align="center">
          Thank you for reaching out to us. We'd love to hear from you!
        </Typography>
        <Typography variant="body1" align="center" pt={2}>
          Email: example@example.com
        </Typography>
        <Typography variant="body1" align="center">
          Phone: 123-456-7890
        </Typography>
        <Typography variant="h4" component="h2" align="center" p={5}>
          Feedback Form
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Formik
            initialValues={fomrData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, resetForm }) => (
              <Form>
                <Field
                  name="name"
                  as={TextField}
                  label="Enter Your Name"
                  type="text"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name && errors.name}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Enter Your Email"
                  type="email"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  name="phone"
                  label="Enter Your Phone No."
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  error={errors.phone && touched.phone}
                  helperText={errors.phone && touched.phone && errors.phone}
                />
                <Field
                  as={TextField}
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  error={errors.message && touched.message}
                  helperText={
                    errors.message && touched.message && errors.message
                  }
                />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
  );
};
export default Contact;
