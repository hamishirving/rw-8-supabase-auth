import Navigation from 'src/components/Navigation/Navigation'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout