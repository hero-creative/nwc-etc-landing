import Link from 'next/link'

function Navbar() {
  return (
    <nav className="mx-8 my-8 flex items-center justify-between">
      <Link href="/">
        <a>
          <img src="/img/nwc_logo.png" alt="Northwest Center Logo" />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/contact">
            <a className="hover:underline">
              Contact Us
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
