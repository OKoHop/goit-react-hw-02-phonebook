import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import React from 'react';
import { StyledForm } from './AddContact.styled';

const addContactSchema = Yup.object().shape({
  name: Yup.string()

    .min(3, 'Too Short!')

    .max(50, 'Too Long!')

    .required('Required'),
});

export const AddContact = ({ onAdd }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(values, actions) => {
          onAdd({ ...values, id: nanoid() });
          actions.resetForm();
        }}
        validationSchema={addContactSchema}
      >
        <StyledForm>
          <label>
            Name
            <Field name="name" placeholder="Enter name"></Field>
            <ErrorMessage name="name" />
          </label>
          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    </>
  );
};
