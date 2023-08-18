import { Formik, Form, Field } from 'formik';

export const Filter = () => {
  return (
    <Formik
      initialValues={{
        filter: '',
      }}
    >
      <Form>
        <label>
          Find contacts by name
          <Field name="filter"></Field>
        </label>
      </Form>
    </Formik>
  );
};
