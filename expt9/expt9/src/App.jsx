import { useState } from 'react'
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [registered, setRegistered] = useState(null)
  const [error, setError] = useState('')
  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setRegistered({ name, email })
    setSubmitted(true)
    setName('')
    setEmail('')
  }
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Registration Form</h2>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button style={styles.button} onClick={handleRegister}>
          Register
        </button>
        {submitted && (
          <>
            <p style={styles.success}>Registration Successful!</p>
            <div style={styles.userBox}>
              <h3 style={styles.userTitle}>Registered User</h3>
              <p style={styles.userInfo}><strong>Name:</strong> {registered.name}</p>
              <p style={styles.userInfo}><strong>Email:</strong> {registered.email}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
const styles = {
  page: {
    minHeight: '100vh',
    background: '#dce6f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    background: '#fff',
    border: '1px solid #ccc',
    padding: '28px 24px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '16px',
    marginBottom: '16px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '12px',
    border: '1px solid #ccc',
    fontSize: '13px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '8px 20px',
    background: '#555',
    color: '#fff',
    border: 'none',
    fontSize: '13px',
    cursor: 'pointer',
    marginTop: '4px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginBottom: '8px',
  },
  success: {
    color: 'green',
    fontSize: '13px',
    marginTop: '12px',
  },
  userBox: {
    background: '#e8e8e8',
    width: '100%',
    padding: '12px',
    marginTop: '12px',
    boxSizing: 'border-box',
  },
  userTitle: {
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '8px',
  },
  userInfo: {
    fontSize: '13px',
    margin: '4px 0',
  },
}
export default App