import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from 'src/auth'
import { routes, navigate } from '@redwoodjs/router'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = async (data) => {
    setError(null)
    try {
      const response = await client.auth.signUp({
        email: data.email,
        password: data.password
      })
      response?.error?.message ? setError(response.error.message) : navigate(routes.home())
    } catch(error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign Up</Submit>
      </Form>
    </>
  )
}
export default SignupPage