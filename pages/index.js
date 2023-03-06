import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Employment Transformation Collective</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="relative mt-[12px] lg:flex lg:mt-[87px] lg:max-w-6xl lg:mx-auto">
        <div className="absolute -bottom-[157px] -left-[86px] max-w-[491px] lg:max-w-[608px] lg:relative lg:-bottom-0 lg:-left-0">
          <img
            alt="A smiling woman using a wheelchair and holding a tablet"
            src="/img/woman-holding-a-tablet@4x.png"
          />
        </div>
        <div className="mx-8 lg:max-w-lg lg:self-center">
          <div className="max-w-[33%] mt-1 mb-3">
            <h2 className="bg-[#F2DB64] inline font-[400] text-xl leading-[30px] inter">
              Employment Transformation Collective
            </h2>
          </div>
          <h1 className="heading mb-3 inter font-[600] leading-[42px]">
            We Work with You to Build and Support Truly Inclusive Workplaces and
            Businesses
          </h1>
          <p className="body-copy mb-[3px]">
            We offer services, solutions, and support that remove workplace
            barriers to accessibility, so all employees, with and without
            disabilities, can do their best work.
          </p>
          <div className="flex pt-[26px] pb-[229px] md:pt-10 md:justify-start mb-24 z-20 lg:mb-0 lg:pb-0">
            <Link href="/contact">
              <a className="btn-lg px-[18px] py-[10px]">Contact Us</a>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="m-8 pt-[170px] flex flex-col lg:justify-around items-center">
          <h2 className="heading leading-[35px] text-[25px] text-center mx-8 mb-10 lg:max-w-lg">
            Explore Our Services and Solutions
          </h2>
          <section className="flex flex-col gap-10 lg:margin-auto lg:max-w-4xl lg:gap-20 xl:max-w-7xl lg:flex-row lg:flex-wrap lg:justify-around lg:items-center xl:flex-nowrap">
            <article className="xl:order-2 flex h-full flex-col items-center lg:w-full xl:w-[100%]">
              <div className="pb-5">
                <img
                  src="/img/home/impaired-eye.png"
                  alt="Visually impaired eye icon"
                />
              </div>
              <h3 className="subheading pb-4">
                Accessibility Partners Service
              </h3>
              <p className="body-copy mb-[26px] text-center">
                We provide blind and low-vision employees with one-to-one
                support in the workplace. Our services remove digital and
                physical barriers to make meetings, events, data, and documents
                more accessible for low-vision and blind employees. All
                employees can use our Help Desk to make documents, events, and
                other work more accessible.
              </p>
              <div className="flex gap-2">
                <Link href="/contact">
                  <a className="btn-dark">Get Started</a>
                </Link>
                <Link href="/about">
                  <a className="btn-dark">Learn More</a>
                </Link>
              </div>
            </article>

            <span className="lg:hidden border-b border-solid border-black block"></span>

            <article className="xl:order-1 flex h-full self-start flex-col items-center lg:w-[45%] xl:w-[100%]">
              <div className="pb-5">
                <img
                  src="/img/home/person-chatting.png"
                  alt="Person chatting icon"
                />
              </div>
              <h3 className="subheading pb-2">
                Training & Consulting Services
              </h3>
              <p className="body-copy mb-[26px] text-center">
                We work with businesses to develop cultures of accommodation,
                training managers and executives to create inclusive workplaces
                for people with and without disabilities.
              </p>
              <Link href="/contact">
                <a className="btn-dark">Get Started</a>
              </Link>
            </article>

            <span className="lg:hidden border-b border-solid border-black block"></span>

            <article className="xl:order-3 flex flex-col self-start items-center lg:w-[45%] xl:w-[100%]">
              <div className="pb-5">
                <img
                  src="img/home/hand-gear.png"
                  alt="hand holding a gear symbol icon"
                />
              </div>
              <h3 className="subheading pb-2">Customized Options</h3>
              <p className="body-copy mb-8 text-center">
                We work with disabled employees and with employers to customize
                solutions. Disabled employees get the tools they need to succeed
                and employers the support to create inclusive and accessible
                workplaces.
              </p>
              <Link href="/contact">
                <a className="btn-dark">Get Started</a>
              </Link>
            </article>

            <span className="lg:hidden border-b border-solid border-black block"></span>
          </section>
        </div>

        <section className="relative text-white pt-[126px] mt-52 lg:mt-28 lg:flex lg:flex-col lg:items-center">
          <img
            className="absolute -top-[164px] lg:-top-[40px] right-0 h-[315px] z-50"
            src="/img/blind-employee-reading@4x.png"
            alt="A seated employee reading Braille"
          />
        </section>
        <section
          aria-label="News & Media Links"
          className="flex flex-col items-center py-[55px] lg:pb-[80px] lg:max-w-3xl lg:flex lg:flex-col lg:items-center lg:mx-auto"
        >
          <h2 className="heading leading-[35px] text-[25px] text-center mb-9">
            News &amp; Media
          </h2>
          <ul className="mx-8 flex flex-col gap-8 lg:gap-12 text-center">
            <li className="flex flex-col gap-3 items-center">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/img/kirologo.png" width={82} alt="Kiro7 News Logo" />
              </div>
              <Link
                rel="noreferrer"
                target="_blank"
                href="https://www.kiro7.com/news/local/local-woman-shares-experiences-navigating-workforce-wheelchair-helps-others-understand-ableism/ALEB46BXVNGSVMKPKOX4RZX2BE/"
              >
                <a className="underline hover:no-underline">
                  Local woman shares experiences navigating workforce in
                  wheelchair, helps others understand &apos;ableism&apos;
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Link>
            </li>
            <li className="flex flex-col gap-3 items-center ">
              <div className="flex-grow flex items-center justify-center">
                <img
                  src="/img/usatodaylogo.png"
                  width={115}
                  alt="USA Today Logo"
                />
              </div>
              <Link
                href="https://www.usatoday.com/story/opinion/2022/11/22/american-job-market-needs-people-disabilities/8304760001/?https://opinion.usatoday.com"
                rel="noreferrer"
                target="_blank"
              >
                <a className="underline hover:no-underline">
                  A reality check on the American workforce: Time to invest in
                  people with disabilities
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Link>
            </li>
            <li className="flex flex-col gap-3 items-center">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/img/inclogo.png" width={67} alt="Inc. Logo" />
              </div>
              <Link
                href="https://www.inc.com/marcel-schwantes/5-ways-to-make-your-workplace-more-inclusive-for-what-is-now-largest-minority-population.html"
                rel="noreferrer"
                target="_blank"
              >
                <a className="underline hover:no-underline">
                  Want a More Inclusive Workplace? Great, but Don&apos;t
                  Overlook Disabled Individuals{' '}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Link>
            </li>
            <li className="flex flex-col gap-3 items-center">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src="/img/nytlogo.png"
                  width={158}
                  alt="New York Times Logo"
                />
              </div>
              <Link
                href="https://www.nytimes.com/2022/10/25/business/economy/labor-disabilities.html"
                rel="noreferrer"
                target="_blank"
              >
                <a className="underline hover:no-underline">
                  For Disabled Workers, a Tight Labor Market Opens New Doors
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Link>
            </li>
            <li className="flex flex-col gap-3 items-center">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/img/forbeslogo.png" width={103} alt="Forbes Logo" />
              </div>
              <Link
                href="https://www.forbes.com/sites/rodberger/2023/02/14/paving-the-way-for-diversity-in-americas-evolving-employment-market/?sh=55dfad2e5879"
                rel="noreferrer"
                target="_blank"
              >
                <a className="underline hover:no-underline">
                  Paving The Way For Diversity In America’s Evolving Employment
                  Market
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
