import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import PopupContainer from "./PopupContainer"; 


const FormContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 12rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.theme === "light" &&
    css`
      background-color: #fffdfa;
      color: #333;
      border-color: #ccc;
    `}

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea,
  select {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #555;
    border-radius: 4px;
    background-color: #444;
    color: #fff;

    ${(props) =>
      props.theme === "light" &&
      css`
        background-color: #fffdfa;
        color: #333;
        border-color: #ccc;
      `}
  }

  .error-message {
    color: #ff3333;
    font-size: 0.8rem;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }

  button[type="submit"],
  button[type="button"] {
    background-color: #fdfdfde6;
    color: #24211d;
    border: none;
    padding: 0.75rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }
  ${(props) =>
    props.theme === "light" &&
    css`
      button[type="submit"],
      button[type="button"] {
        background-color: #24211d;
        color: #fdfdfde6;
      }
    `}

  button[type="button"]:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 14rem 2rem;
  }
`;

const FileInputLabel = styled.label`
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
  display: inline-block;
`;

const initialValues = {
  name: "",
  email: "",
  address: "",
  dob: "",
  bio: "",
  profileImage: null,
  bannerImage: null,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  address: Yup.string().required("Address is required"),
  dob: Yup.date().nullable().required("Date of Birth is required"),
  bio: Yup.string().required("Bio is required"),
  profileImage: Yup.mixed().required("Profile image is required"),
  bannerImage: Yup.mixed().required("Banner image is required"),
});

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [bannerImageUrl, setBannerImageUrl] = useState(null);
  
  const theme = useSelector((state) => state.theme.mode);

  const handleFormSubmit = (values, { resetForm, setFieldValue }) => {
    setFormData(values);
    setProfileImageUrl(URL.createObjectURL(values.profileImage));
    setBannerImageUrl(URL.createObjectURL(values.bannerImage));
    setShowPopup(true);
    
    setFieldValue("profileImage", null);
    setFieldValue("bannerImage", null);
    
    resetForm(); 
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData(null);
    setProfileImageUrl(null);
    setBannerImageUrl(null);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formikProps) => (
          <FormContainer theme={theme} as={Form}>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <Field type="text" id="address" name="address" />
              <ErrorMessage
                name="address"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label htmlFor="dob">Date of Birth</label>
              <Field type="date" id="dob" name="dob" />
              <ErrorMessage
                name="dob"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label htmlFor="bio">Bio</label>
              <Field as="textarea" id="bio" name="bio" />
              <ErrorMessage
                name="bio"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <FileInputLabel htmlFor="profileImage">
                Select Profile Image
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  accept="image/*"
                  onChange={(event) => {
                    formikProps.setFieldValue("profileImage", event.currentTarget.files[0]);
                  }}
                />
              </FileInputLabel>
              <ErrorMessage
                name="profileImage"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <FileInputLabel htmlFor="bannerImage">
                Select Banner Image
                <input
                  type="file"
                  id="bannerImage"
                  name="bannerImage"
                  accept="image/*"
                  onChange={(event) => {
                    formikProps.setFieldValue("bannerImage", event.currentTarget.files[0]);
                  }}
                />
              </FileInputLabel>
              <ErrorMessage
                name="bannerImage"
                component="div"
                className="error-message"
              />
            </div>

            <button type="submit">Submit</button>
            <button type="button" onClick={formikProps.handleReset}>
              Reset
            </button>
          </FormContainer>
        )}
      </Formik>

      {showPopup && (
        <PopupContainer
          formData={formData}
          profileImageUrl={profileImageUrl}
          bannerImageUrl={bannerImageUrl}
          handleClosePopup={handleClosePopup}
          theme={theme}
        />
      )}
    </>
  );
};

export default ContactForm;
