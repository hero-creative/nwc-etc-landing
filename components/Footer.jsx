import Link from 'next/link'

function Footer() {
  return (
    <footer className="text-lg leading-[26.82px] bg-theme-blue text-white p-8 pt-11 pb-14 flex flex-col gap-[52px]">
      <div>
        <h3 className="font-medium leading-6 mb-1">Get connected</h3>
        <p>Call Us</p>
        <p className="mb-2">206-285-9140</p>
        <Link href="https://linkedin.com" rel='noreferer' target='_blank'>
          <a
            className="inline-block"
            title="Opens in a new window"
            aria-label="Visit the NW Center LinkedIn profile. Opens in a new window."
          >
            <img alt="LinkedIn profile for NW Center" src="/img/linkedin.png" />
          </a>
        </Link>
      </div>

      <div>
        <h3 className="font-medium leading-6 mb-1">Office</h3>
        <p className="leading-[26.82px]">
          1119 SW 7th Street <br />
          Renton, WA 98057
        </p>
      </div>

      <nav>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="/contact">
              <a className="hover:underline">Contact Us</a>
            </Link>
          </li>
          <li className="">
            <Link href="/accessibility-statement">
              <a className="hover:underline">Accessibility Statement</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
