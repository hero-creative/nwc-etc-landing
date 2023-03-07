import Link from 'next/link'
import { useState } from 'react'
import { BiMenuAltRight, BiX } from 'react-icons/bi'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuClick(e) {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav
        title="Main Navigation"
        aria-label="Main Navigation"
        className="bg-white flex flex-wrap items-center justify-between lg:max-w-7xl lg:mx-auto w-full p-8 xl:px-0"
      >
        <Link href="/">
          <a className="max-w-[129px] lg:max-w-[225px] ring-offset-2">
            <img src="/img/nwc-logo-@4x.png" alt="Northwest Center Logo" />
          </a>
        </Link>
        <button
          className="
          md:hidden
          hover:bg-gray-700 hover:text-white
          focus:outline-none focus:ring-4 focus:ring-iet focus:ring-blue-300 ring-offset-2"
          type="button"
          onClick={handleMenuClick}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <BiX
              aria-hidden="true"
              id="menu-button"
              className="text-3xl cursor-pointer"
            />
          ) : (
            <BiMenuAltRight
              aria-hidden="true"
              id="menu-button"
              className="text-3xl cursor-pointer"
            />
          )}
        </button>
        <div
          id="menu"
          className={
            `mt-8 w-full md:flex md:items-center md:w-auto` +
            (isMenuOpen ? ' block' : ' hidden')
          }
        >
          <ul
            aria-label="site navigation"
            className="divide-y divide-gray-300 md:divide-y-0 text-base md:flex md:justify-between gap-12"
          >
            <li className="">
              <Link href="/contact">
                <a className="p-3 block hover:bg-gray-100">Contact Us</a>
              </Link>
            </li>
            <li className="">
              <Link href="/about">
                <a className="p-3 block hover:bg-gray-100">
                  About Accessibility Partners
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
