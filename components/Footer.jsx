import Link from 'next/link'

function Footer() {
  return (
    <footer className="p-8 flex flex-col font-[300] gap-[152px] leading-[24px] mt-auto justify-between bg-theme-blue text-white lg:py-12 lg:pt-14">
      <div className="lg:flex lg:py-16lg:gap-[100px] lg:w-full lg:flex-row lg:mx-auto lg:max-w-7xl">
        <div className="w-full">
          <nav className="w-full">
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/contact">
                  <a className="underline hover:no-underline">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="underline hover:no-underline">
                    Accessibility Partners Service
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/accessibility-statement">
                  <a className="underline hover:no-underline">
                    Accessibility Statement
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-[38px] flex gap-[10px]">
            <Link href="https://www.facebook.com/nwcenter">
              <a
                rel="noreferer"
                target="_blank"
                className="inline-block"
                title="Opens in a new window"
                aria-label="Visit the NW Center facebook profile. Opens in a new window."
              >
                <img
                  alt="facebook profile for NW Center"
                  src="/img/facebook.png"
                />
              </a>
            </Link>
            <Link href="https://twitter.com/nwcenter">
              <a
                rel="noreferer"
                target="_blank"
                className="inline-block"
                title="Opens in a new window"
                aria-label="Visit the NW Center Twitter profile. Opens in a new window."
              >
                <img
                  alt="Twitter profile for NW Center"
                  src="/img/twitter.png"
                />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/northwest-center">
              <a
                rel="noreferer"
                target="_blank"
                className="inline-block"
                title="Opens in a new window"
                aria-label="Visit the NW Center LinkedIn profile. Opens in a new window."
              >
                <img
                  alt="LinkedIn profile for NW Center"
                  src="/img/linkedin.png"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/northwestcenter/">
              <a
                rel="noreferer"
                target="_blank"
                className="inline-block"
                title="Opens in a new window"
                aria-label="Visit the NW Center instagram profile. Opens in a new window."
              >
                <img
                  alt="instagram profile for NW Center"
                  src="/img/instagram.png"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full mt-[50px] mb-[60px] lg:mt-0">
          <h3 className="font-medium leading-6 mb-1">Office</h3>
          <p className="leading-[26.82px]">
            1119 SW 7th Street <br />
            Renton, WA 98057
          </p>
        </div>
        <div className="w-full mt-6 lg:mt-0 flex flex-col gap-6 leading-[22px]">
          <p>
            &copy;2023 Northwest Center Employment Transformation Collective
          </p>
          <p>
            Northwest Center is a 501(c)(3) Nonprofit Organization. Tax ID
            91-0786790
          </p>
          <p>
            Certain employment services and programs and social enterprise
            activities are offered through Northwest Center Services, the sister
            organization of Northwest Center.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
