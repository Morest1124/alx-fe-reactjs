import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

function App() {
  const [last, setLast] = useState(null)

  return (
    <div className="container">
      <header className="hero">
        <h1>Advanced Form Handling</h1>
        <p className="hero-sub">Controlled components and Formik examples with validation</p>
      </header>

      <main className="grid">
        <RegistrationForm onSubmit={setLast} />
        <FormikForm onSubmit={setLast} />
      </main>

      {last && (
        <section className="last-submitted">
          <h3>Last submitted</h3>
          <pre>{JSON.stringify(last, null, 2)}</pre>
        </section>
      )}
    </div>
  )
}

export default App
