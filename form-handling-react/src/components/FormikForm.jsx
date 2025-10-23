import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required')
})

export default function FormikForm({ onSubmit }) {
  return (
    <div className="card form-card">
      <h2>Formik Registration</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          if (onSubmit) onSubmit(values)
          alert('Registered (Formik): ' + JSON.stringify(values))
          resetForm()
        }}
      >
        {() => (
          <Form className="form">
            <div className="form-row">
              <label className="form-label">Username</label>
              <Field className="form-input" name="username" />
              <ErrorMessage name="username" component="div" className="form-error" />
            </div>
            <div className="form-row">
              <label className="form-label">Email</label>
              <Field className="form-input" name="email" />
              <ErrorMessage name="email" component="div" className="form-error" />
            </div>
            <div className="form-row">
              <label className="form-label">Password</label>
              <Field className="form-input" name="password" type="password" />
              <ErrorMessage name="password" component="div" className="form-error" />
            </div>

            <div className="form-actions">
              <button className="btn" type="submit">Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
