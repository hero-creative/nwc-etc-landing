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
      <header className="relative mt-[47px] md:flex md:mt-[87px]">
        <img
          className="absolute md:relative bottom-36 md:bottom-12 h-[369px]"
          alt="Employee in a wheelchair working at desk"
          src="/img/employee-in-a-wheelchair-working.png"
        />
        <div className="mx-8 lg:max-w-lg">
          <div className="max-w-[33%] mt-1 mb-3">
            <h2 className="bg-[#F2DB64] inline font-[400] text-xl leading-6 py-1">
              Employment Transformation Collective
            </h2>
          </div>
          <h1 className="heading mb-3">
            Building and Supporting Truly Inclusive Workplaces and Businesses
          </h1>
          <p className="leading-6 mb-[3px]">
            Services and solutions that remove workplace barriers to
            accessibility. Support so all employees, disabled or not, can do
            their best work.
          </p>
          <div className="flex justify-center pt-[370px] md:pt-10 md:justify-start mb-24 z-20">
            <Link href="/contact">
              <a className="btn-lg px-[18px] py-[10px]">Contact Us</a>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="m-8 flex flex-col lg:justify-around items-center">
          <h2 className="heading text-center mx-8 mb-10 lg:max-w-lg">
            Explore Our Services and Solutions
          </h2>
          <section className="flex flex-col gap-16 lg:margin-auto lg:max-w-3xl xl:max-w-6xl lg:flex-row lg:flex-wrap lg:justify-around lg:items-center xl:flex-nowrap">
            <article className="flex flex-col items-center lg:w-full xl:w-[100%]">
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
                <Link href="/contact">
                  <a className="btn-dark">Get Started</a>
                </Link>
                <Link href="/about">
                  <a className="btn-light">Learn More</a>
                </Link>
              </div>
            </article>

            <span className="lg:hidden border-b border-solid border-black block"></span>

            <article className="flex flex-col items-center lg:w-[45%] xl:w-[100%]">
              <div className="pb-5">
                <img src="/img/circle.jpg" alt="" />
              </div>
              <h3 className="subheading pb-2">Customized Options</h3>
              <p className="text-lg leading-5 mb-8 text-center">
                Providing disabled employees with the tools they need to
                succeed.
              </p>
              <Link href="/contact">
                <a className="btn-dark">Get Started</a>
              </Link>
            </article>

            <span className="lg:hidden border-b border-solid border-black block"></span>

            <article className="flex flex-col items-center lg:w-[45%] xl:w-[100%]">
              <div className="pb-5">
                <img src="/img/circle.jpg" alt="" />
              </div>
              <h3 className="subheading pb-2">Consulting Services</h3>
              <p className="text-lg leading-5 mb-8 text-center">
                Leading the way to inclusion by developing a culture of
                accommodation.
              </p>
              <Link href="/contact">
                <a className="btn-dark">Get Started</a>
              </Link>
            </article>

            <span className="lg:hidden border-b border-solid border-black block"></span>
          </section>
        </div>

        <section
          aria-label="contact us form"
          className="relative bg-theme-blue text-white pt-[126px] mt-52 lg:flex lg:flex-col lg:items-center"
        >
          <img
            className="absolute -top-[164px] right-0 h-[315px] z-50"
            src="/img/blind-employee-reading.png"
            alt="Blind employee reading"
          />
          <h2 className="heading mb-[21px] mx-8 text-white">Contact Us</h2>
          <ContactForm theme="dark" />
        </section>
        <section
          aria-label="News & Media Links"
          className="flex flex-col items-center py-[78px] lg:max-w-3xl lg:flex lg:flex-col lg:items-center lg:mx-auto"
        >
          <h2 className="heading text-center mb-7">News &amp; Media</h2>
          <ul className="mx-8 flex flex-col gap-8">
            <li className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-[78px] flex items-center justify-center">
                <img src="/img/kirologo.png" alt="Kiro7 News Logo" />
              </div>
              <p>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.kiro7.com/news/local/local-woman-shares-experiences-navigating-workforce-wheelchair-helps-others-understand-ableism/ALEB46BXVNGSVMKPKOX4RZX2BE/"
                >
                  <a className="border-b-[3px] border-gray-400 hover:border-none">
                    Local woman shares experiences navigating workforce in
                    wheelchair, helps others understand &apos;ableism&apos;
                  </a>
                </Link>
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-[78px] flex items-center justify-center">
                <img src="/img/usatodaylogo.png" alt="USA Today Logo" />
              </div>
              <p>
                <Link
                  href="https://www.usatoday.com/story/opinion/2022/11/22/american-job-market-needs-people-disabilities/8304760001/?https://opinion.usatoday.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <a className="border-b-[3px] border-gray-400 hover:border-none">
                    A reality check on the American workforce: Time to invest in
                    people with disabilities
                  </a>
                </Link>
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-[78px] flex items-center justify-center">
                <img src="/img/inclogo.png" alt="Inc. Logo" />
              </div>
              <p>
                <Link
                  href="https://www.inc.com/marcel-schwantes/5-ways-to-make-your-workplace-more-inclusive-for-what-is-now-largest-minority-population.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  <a className="border-b-[3px] border-gray-400 hover:border-none">
                    Want a More Inclusive Workplace? Great, but Don&apos;t
                    Overlook Disabled Individuals
                  </a>
                </Link>
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-[78px] flex items-center justify-center">
                <img src="/img/nytlogo.png" alt="New York Times Logo" />
              </div>
              <p>
                <Link
                  href="https://www.nytimes.com/2022/10/25/business/economy/labor-disabilities.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  <a className="border-b-[3px] border-gray-400 hover:border-none">
                    For Disabled Workers, a Tight Labor Market Opens New Doors
                  </a>
                </Link>
              </p>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
