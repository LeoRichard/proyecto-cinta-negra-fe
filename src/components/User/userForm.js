import React from 'react';
import { Formik } from 'formik';

import DropZone from '../Dropzone';

class UserForm extends React.Component {
  state = {
    profileImage: null,
    previewImage: '',
  }

  handleOnDrop = (acceptedFiles) => {
    acceptedFiles.forEach(element => {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryString = reader.result;
        this.setState({ previewImage: binaryString, profileImage: element })
      }
      reader.onabort = () => console.log('Tarea abortada');
      reader.onerror = () => console.log('algo salio mal al cargar la imagen');
      reader.readAsDataURL(element);
    });
  }

  render() {
    const { error, loading, addUserMutation } = this.props;

    return (
      <div className="limiter">
        <div className="container-login100">
          <Formik
            initialValues={{
              name: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validate={values => {
              const errors = {};
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const dataSignup = {
                  ...values,
                  profileImage: this.state.profileImage,
                }
                addUserMutation({
                  variables: {
                    data: {
                      ...dataSignup,
                    }
                  }
                })
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
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
                  <h1 className="display-4">New User</h1>
                  <hr className="my-4" />
                  <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleSubmit}>
                    <div className="wrap-input100 validate-input m-b-16">

                      <input
                        type="text"
                        name="name"
                        id="signupNameId"
                        placeholder="Enter name"
                        className="input100"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input m-b-16">
                      <input
                        type="text"
                        id="signupLastNameId"
                        name="lastName"
                        className="input100"
                        placeholder="Enter Last name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                      <span className="focus-input100"></span>
                    </div>


                    <div className="wrap-input100 validate-input m-b-16">
                      <input
                        type="email"
                        id="signupEmailId"
                        className="input100"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input m-b-16">
                      <input
                        type="text"
                        name="password"
                        className="input100"
                        id="signupPasswordId"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <span className="focus-input100"></span>
                    </div>

                    <div className="form-group">
                      <label>Profile Image</label>
                      <DropZone onDropCallback={this.handleOnDrop} />
                      <img src={this.state.previewImage} alt="" className="img-fluid" />
                    </div>

                    <div className="container-login100-form-btn m-t-17">
                      <button type="submit" disabled={isSubmitting} className="login100-form-btn">
                        Register
                      </button>
                    </div>

                    <hr />
                    {error && <p>{error}</p>}
                    {loading && <p>Registrando</p>}
                  </form>
                </div>
              )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default UserForm;
