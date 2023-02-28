import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col justify-start min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
