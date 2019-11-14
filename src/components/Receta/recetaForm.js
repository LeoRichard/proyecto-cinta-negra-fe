import React from 'react';
import { Formik } from 'formik';
import IngredientsSelectQuery from '../Ingredient/ingredientSelectQuery';

const RecetaForm = ({addRecetaMutation, history}) => (
  <div className="limiter">
    <div className="container-login100">
      <Formik
        initialValues={{ name: '', difficulty: '', content: '', ingredientID: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }

          if(!values.difficulty) {
            errors.difficulty = "Required"
          }

          if(!values.content) {
            errors.content = "Required"
          }

          if(!values.ingredientID) {
            errors.ingredientID = "Required"
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            addRecetaMutation({
              variables: {
                data: {
                  name: values.name,
                  difficulty: values.difficulty,
                  content: values.content
                },
                ingredientID: values.ingredientID
              }
            })
            setSubmitting(false);
          }, 4000);
          history.push('/mis-recetas');
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
              <span className="login100-form-title p-b-51">Create Receta</span>

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

              {errors.difficulty && touched.difficulty && <span style={{color: "red"}}>{errors.difficulty}</span>}

              <div className="wrap-input100 validate-input m-b-16">
                <select className="form-control select-grey" name="difficulty" onChange={handleChange} onBlur={handleBlur} value={values.difficulty}>
                  <option value=''>Select Difficulty</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Difficult</option>
                </select>
              </div>

              {errors.ingredientID && touched.ingredientID && <span style={{color: "red"}}>{errors.ingredientID}</span>}

              <IngredientsSelectQuery name="ingredientID" onChange={handleChange} onBlur={handleBlur} value={values.ingredientID} />

              {errors.content && touched.content && <span style={{color: "red"}}>{errors.content}</span>}

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="text"
                  name="content"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.content}
                  className="input100"
                  placeholder="Content"
                />
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

export default RecetaForm;
