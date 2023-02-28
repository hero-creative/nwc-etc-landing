import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Employment Transformation Collective</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <nav className="mx-8 mt-8 mb-[47px]">
        <img src="/img/nwc_logo.png" alt="Northwest Center Logo" />
        <ul>
          <li>Contact Us</li>
        </ul>
      </nav>

      <header>
        <div className="mx-8">
          <div className="max-w-[33%] mt-1 mb-3">
            <h2 className="bg-[#F2DB64] inline font-[400] text-xl leading-6 py-1">
              Employment Transformation Collective
            </h2>
          </div>
          <h1 className="heading mb-3">
            Building and Supporting Truly Inclusive Workplaces and Businesses
          </h1>
          <p className="leading-6 mb-4">
            Services and solutions that remove workplace barriers to
            accessibility. Support so all employees, disabled or not, can do
            their best work.
          </p>
        </div>
        <img
          className="h-[369px]"
          alt="Employee in a wheelchair working at desk"
          src="/img/employee-in-a-wheelchair-working.png"
        />
        <div className="flex justify-center mb-24">
          <button className="btn-lg px-[18px] py-[10px]">Contact Us</button>
        </div>
      </header>

      <main>
        <div className="m-8">
          <h2 className="heading text-center mx-8 mb-10">
            Explore Our Services and Solutions
          </h2>
          <div className="flex flex-col gap-16">
            <aside className="flex flex-col items-center">
              <div className="pb-5">
                <img src="/img/circle.jpg" alt="" />
              </div>
              <h3 className="subheading pb-2">
                Accessibility Partners Service
              </h3>
              <p className="text-lg leading-5 mb-8 text-center">
                Connecting blind and low-vision employees with partners to
                remove digital and physical barriers.
              </p>
              <div className="flex gap-2">
                <button className="btn-dark">Get Started</button>
                <button className="btn-light">Learn More</button>
              </div>
            </aside>

            <span className="border-b border-solid border-black block"></span>

            <aside className="flex flex-col items-center">
              <div className="pb-5">
                <img src="/img/circle.jpg" alt="" />
              </div>
              <h3 className="subheading pb-2">Customized Options</h3>
              <p className="text-lg leading-5 mb-8 text-center">
                Providing disabled employees with the tools they need to
                succeed.
              </p>
              <button className="btn-dark">Get Started</button>
            </aside>

            <span className="border-b border-solid border-black block"></span>

            <aside className="flex flex-col items-center">
              <div className="pb-5">
                <img src="/img/circle.jpg" alt="" />
              </div>
              <h3 className="subheading pb-2">Consulting Services</h3>
              <p className="text-lg leading-5 mb-8 text-center">
                Leading the way to inclusion by developing a culture of
                accommodation.
              </p>
              <button className="btn-dark">Get Started</button>
            </aside>

            <span className="border-b border-solid border-black block"></span>
          </div>
        </div>

        <div className="relative bg-theme-blue text-white pt-[126px] mt-52">
          <img
            className="absolute -top-[47%] translate-y-[100%] right-0 h-[315px] z-50"
            src="/img/blind-employee-reading.png"
            alt="Blind employee reading"
          />
          <h2 className="heading mb-[21px] mx-8 text-white">Contact Us</h2>
          <form
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
            className="mx-8 pb-[35px] flex flex-col gap-5"
          >
            <label className="input-label">
              First Name
              <input
                className="form-control"
                type="text"
                name="first_name"
                id="first_name"
              />
            </label>
            <label className="input-label">
              Last Name
              <input
                className="form-control"
                type="text"
                name="last_name"
                id="last_name"
              />
            </label>
            <label className="input-label">
              Email
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
              />
            </label>
            <fieldset className="text-lg flex flex-col gap-3">
              <legend className="font-bold pb-[7px]">
                I&apos;m interested in (click all that apply:)
              </legend>
              <input
                type="checkbox"
                className="css-checkbox"
                name="interest"
                id="acc_partner"
              />
              <label htmlFor="acc_partner">
                Accessibility Partners Service
              </label>
              <input
                className="css-checkbox"
                type="checkbox"
                name="interest"
                id="custom_option"
              />
              <label htmlFor="custom_option">Customized Options</label>
              <input
                className="css-checkbox"
                type="checkbox"
                name="interest"
                id="consult_serv"
              />
              <label htmlFor="consult_serv">Consulting Services</label>
            </fieldset>
            <label className="input-label">
              How did you learn about us?
              <input
                className="form-control"
                type="text"
                name="referral"
                id="referral"
              />
            </label>

            <label className="input-label">
              Comment/Message
              <textarea
                className="form-control h-full"
                name="message"
                id="message"
                rows="4"
              ></textarea>
            </label>
            <button
              className="mt-5 self-center btn-lg border-none max-w-[134px]"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <aside className="flex flex-col items-center py-[78px]">
          <h2 className="heading text-center">News &amp; Media</h2>
          <ul>
            <li>
              <a href="null">Northwest Center for Blind and Low Vision</a>
            </li>
            <li>
              <a href="null">Northwest Center for Blind and Low Vision</a>
            </li>
            <li>
              <a href="null">Northwest Center for Blind and Low Vision</a>
            </li>
          </ul>
        </aside>
      </main>
      <footer className="text-lg leading-[26.82px] bg-theme-blue text-white p-8 pt-11 pb-14 flex flex-col gap-[52px]">
        <div>
          <h3 className="font-boldleading-6">Get connected</h3>
          <p>Call Us 206-285-9140</p>
          <a
            className="bg-red-200 mt-2"
            href="https://apple.com"
            rel="noreferrer"
            target="_blank"
            title="Opens in a new window"
            aria-label="Visit the NW Center LinkedIn profile. Opens in a new window."
          >
            <img alt="LinkedIn profile for NW Center" src="/img/linkedin.png" />
          </a>
        </div>

        <div>
          <h3 className="font-bold leading-6">Office</h3>
          <p className="leading-[26.82px]">
            1119 SW 7th Street <br />
            Renton, WA 98057
          </p>
        </div>

        <nav>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li className="">
              <a href="#">Accessibility Statement</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}
