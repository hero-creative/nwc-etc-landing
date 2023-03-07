import ContactForm from '@components/ContactForm'
import Head from 'next/head'
import Link from 'next/link'

function About() {
  const content = [
    {
      title: 'Visual Assistance Help Desk',
      description: () => (
        <>
          <p>
            Our partners are experts in accessibility, trained to meet the
            diversified needs of blind, low-vision, and other employees who need
            visual assistance.
          </p>
          Today, many documents are not accessible. All your employees and teams
          can use our Help Desk to make their documents, events, and other work
          more accessible. The Help Desk, for example, can provide sighted-guide
          services at events and convert presentations to accessible formats.
          <Link href="/contact">
            <a className="underline hover:no-underline text-[#0016DB]">
              Contact us to schedule a demo &gt;
            </a>
          </Link>
        </>
      ),
      imgSrc: '/img/about/eye-headset.png',
      imgAlt: 'eye and headset icon',
    },
    {
      title: 'Visual Experience Support',
      description: () => (
        <p>
          Accessibility Partners are experts in real-time visual interpretation.
          This means they provide customized support that interprets visual
          information at events and meetings as they happen, converting them to
          accessible formats. For example, they can provide audio descriptions
          of visual presentations.
        </p>
      ),
      imgSrc: '/img/about/eye-over-hand.png',
      imgAlt: '',
    },
    {
      title: 'Managed Full-Time Staff',
      description: () => (
        <p>
          For employees who need one-to-one visual accessibility support, we
          provide personalized full-time assistance, with workplace
          accommodation plans. We offer in-person, remote, and hybrid support.
        </p>
      ),
      imgSrc: '/img/about/person-tracking-clock.png',
      imgAlt: '',
    },
    {
      title: 'Dynamic Solutions',
      description: () => (
        <p>
          We provide customized dynamic support that evolves with your career.
          We use current and emerging inclusive practices to communicate visual
          information. This ranges from interpreting complex data to integrating
          assistive technologies into an employee&apos;s workflow.
        </p>
      ),
      imgSrc: '/img/about/lightbulb.png',
      imgAlt: '',
    },
  ]

  return (
    <>
      <Head>
        <title>Accessibility Partners Service</title>
      </Head>
      <header className="relative bg-theme-blue pt-[49px] overflow-x-clip lg:pt-10 lg:pb-[2px] mb-16">
        <div className="max-w-6xl lg:flex lg:justify-between lg:items-center xl:mx-auto">
          <div className="lg:flex lg:flex-col lg:items-start mx-8">
            <h1 className="heading inter text-white lg:text-left mx-">
              Accessibility Partners Service
            </h1>
            <div className="flex flex-col gap-5 mt-[22px] lg:max-w-xl">
              <p className="text-[22px] leading-[33px] mb-[142px] lg:mb-0 text-white">
                Building and Supporting Truly Inclusive Workplaces and
                Businesses. Offering Accessibility solutions for blind and
                low-vision employees.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="partner-image-mobile lg:partner-image-desktop lg:top-[100px]">
              <img
                className="h-full"
                src="/img/partner-translating@4x.png"
                alt="A Partner translating matertial into an accessible format for an employee"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="mt-32 lg:mt-[94px]">
        <p className="mx-8 mb-9 lg:mb-[67px] lg:mx-auto lg:max-w-[549px] body-copy lg:text-center">
          We support employees your way, using your technology and internal
          systems. By providing remote and virtual services over your secure
          video networks, for example, we keep services confidential and secure.
        </p>
        <div className="max-w-5xl xl:mx-auto">
          <section className="mx-8 flex flex-col gap-[54px] lg:gap-[84px] lg:flex-row lg:flex-wrap lg:mb-36 lg:flex lg:items-center">
            {content.map(function (item, index, arr) {
              return (
                <article
                  key={index}
                  className="flex flex-col gap-[14px] lg:w-[45.55%] lg:self-start"
                >
                  <div>
                    <img src={item.imgSrc} alt={item.imgAlt} />
                  </div>
                  <h2 className="subheading">{item.title}</h2>

                  {item.description()}

                  {index !== arr.length - 1 && (
                    <span className="lg:hidden border-b border-solid border-black block pt-8"></span>
                  )}
                </article>
              )
            })}
          </section>
        </div>
        <aside className="flex relative bg-[#F2DB64] pl-[89px] pr-6 py-[36px] mt-[47px] lg:pt-[78px] lg:pb-[57px]">
          <p className="text-[22px] leading-[35px] lg:max-w-3xl lg:text-center lg:mx-auto">
            We can help you create a truly inclusive workplace and business. Our
            services empower employees to focus on their work, not workplace
            barriers.
          </p>
          <img
            src="/img/y-circle-sm.png"
            alt=""
            className="absolute left-0 lg:left-8 bottom-0"
          />
        </aside>
        <section
          aria-label="contact us form"
          className="bg-theme-blue text-white pt-[38px] lg:flex lg:flex-col lg:items-center"
        >
          <h2 className="subheading font-[600] leading-[30px] mb-[21px] mx-8 text-white">
            Contact Us
          </h2>
          <ContactForm theme="dark" />
        </section>
        <section className="mb-[84px] mt-[69px] sm:flex sm:flex-row sm:justify-center lg:max-w-6xl lg:mx-auto">
          <div className="w-[234px]">
            <img
              src="/img/nora-genster.jpg"
              alt="Nora Genster"
              className="flex-shrink-0"
              title="Nora Genster"
            />
          </div>
          <div className="mx-9 mt-[19px] sm:w-1/2 flex flex-col">
            <h2 className="subheading">Meet Nora Genster</h2>
            <p className="body-copy max-w-2xl mt-[12px] mb-[22px]">
              Nora Genster is Senior Director of the Employment Transformation
              Collective at Northwest Center. She joined Northwest Center in
              2022. Nora oversees a portfolio that creates workplaces where all
              employees can do their best work. Prior to Northwest Center, she
              worked in Washington, DC. She focused on the nexus of disability
              and employment in public and private sectors.
            </p>
            <Link href="https://www.linkedin.com/in/nora-genster-76153692">
              <a
                rel="noreferer"
                target="_blank"
                title="Opens in a new window"
                aria-label="Visit Nora Genster's LinkedIn profile. Opens in a new window."
              >
                <img
                  alt="LinkedIn profile for Nora Genster"
                  src="/img/linkedin-drk.png"
                />
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
