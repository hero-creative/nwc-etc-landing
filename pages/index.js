import Head from 'next/head'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Employment Transformation Collective</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
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
          <Link href="/contact">
            <a className="btn-lg px-[18px] py-[10px]">Contact Us</a>
          </Link>
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
                <Link href="#">
                  <a className="btn-dark">Get Started</a>
                </Link>
                <Link href="/about">
                  <a className="btn-light">Learn More</a>
                </Link>
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
          <ContactForm theme="dark" />
        </div>
        <aside className="flex flex-col items-center py-[78px]">
          <h2 className="heading text-center">News &amp; Media</h2>
          <ul>
            <li>
              <a href="null">Northwest Center</a>
            </li>
            <li>
              <a href="null">Northwest Center</a>
            </li>
            <li>
              <a href="null">Northwest Center</a>
            </li>
          </ul>
        </aside>
      </main>
    </>
  )
}
