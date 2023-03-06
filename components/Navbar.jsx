import Link from 'next/link'

function Navbar() {
  return (
    <nav
      title="Main Navigation"
      aria-label="Main Navigation"
      className="bg-white p-8 xl:px-0 flex items-center justify-between lg:max-w-7xl lg:mx-auto w-full"
    >
      <Link href="/">
        <a className="max-w-[129px] lg:max-w-[225px]">
          <img src="/img/nwc-logo-@4x.png" alt="Northwest Center Logo" />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/contact">
            <a className="hover:underline">Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
