import React from 'react';
import { Formik } from 'formik';
import IngredientsSelectQuery from '../Ingredient/ingredientSelectQuery';

const IngredientForm = ({addIngredientMutation, history}) => (
  <div className="limiter">
    <div className="container-login100">
      <Formik
        initialValues={{ name: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addIngredientMutation({
              variables: {
                data: {
                  name: values.name
                }
              }
            })
            setSubmitting(false);
          }, 4000);
          history.push('/ingredients');
        }}
      >
        {
          ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="wrap-login100 p-t-50 p-b-90">
            <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleSubmit}>
              <span className="login100-form-title p-b-51">Create Ingredient</span>

              {errors.name && touched.name && <span style={{color: "red"}}>{errors.name}</span>}

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="input100"
                  placeholder="Name"
                />
              <span className="focus-input100"></span>
              </div>

              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" type="submit" disabled={isSubmitting}>
                  Create
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  </div>
);

export default IngredientForm;
