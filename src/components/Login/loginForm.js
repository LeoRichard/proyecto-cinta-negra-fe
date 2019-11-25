import React from 'react';
import { Formik } from 'formik';
import '../../Login.css';
import '../../Utils.css';

const Basic = ({doLogin, loading}) => (
  <div className="limiter">
    <div className="container-login100">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if(!values.password) {
            errors.password = "Required"
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            doLogin({
              variables: {
                userName: values.email,
                password: values.password
              }
            })
            setSubmitting(false);
          }, 400);
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
              <span className="login100-form-title p-b-51">Login</span>
              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="input100"
                  placeholder="Username"
                />
              <span className="focus-input100"></span>
              </div>

              {errors.email && touched.email && errors.email}

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="input100"
                  placeholder="Password"
                />
              </div>

              {errors.password && touched.password && errors.password}

              <div className="flex-sb-m w-full p-t-3 p-b-24">
    						<div className="contact100-form-checkbox">
    							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
    							<label className="label-checkbox100" htmlFor="ckb1">
    								Remember me
    							</label>
    						</div>

    						<div>
    							<a href="/" className="txt1">
    								Forgot?
    							</a>
    						</div>
    					</div>

              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" type="submit" disabled={isSubmitting}>
                  {loading &&
                    <span>Logging in...</span>
                  }
                  {!loading &&
                    <span>Log in</span>
                  }
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  </div>
);

export default Basic;
