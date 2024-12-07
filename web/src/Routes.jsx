import { Router, Route, Set } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={GlobalLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/signin" page={SigninPage} name="signin" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes