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
      <header className="relative bg-theme-blue pt-14">
        <div className="lg:flex lg:flex-col lg:items-start lg:mx-auto max-w-7xl">
          <h1 className="heading text-white mx-14 mb-6 lg:text-left lg:mx-0">
            Accessibility Partners Service
          </h1>
          <div className="mx-14 flex flex-col gap-6 lg:mx-0 lg:max-w-xl">
            <p className="body-copy text-white">
              Building and Supporting Truly Inclusive Workplaces and Businesses
            </p>
            <p className="body-copy text-white">
              Accessibility solutions for blind and low-vision employees
            </p>
            <p className="body-copy text-white pb-28">
              We support employees your way, using your technology and internal
              systems. By providing remote and virtual services over your secure
              video networks, for example, we keep services confidential and
              secure
            </p>
          </div>
        </div>
        <img
          src="/img/partner-translating@4x.png"
          alt="A Partner translating matertial into an accessible format for an employee"
          className="absolute -bottom-[150px] -right-[30px] h-[251px]"
        />
      </header>
      <main className="mt-32">
        <section className="mx-8 flex flex-col gap-[54px] lg:gap-[84px] lg:flex-row lg:flex-wrap lg:mb-36 xl:max-w-7xl lg:flex 2xl:mx-auto lg:items-center">
          {content.map(function (item, index) {
            return (
              <article
                key={index}
                className="flex flex-col gap-[14px] lg:w-1/4"
              >
                <div>
                  <img src={item.imgSrc} alt={item.imgAlt} />
                </div>
                <h2 className="subheading">{item.title}</h2>
                {item.description()}
              </article>
            )
          })}
        </section>
        <section
          aria-label="contact us form"
          className="bg-theme-blue text-white pt-[38px] mt-[60px] lg:flex lg:flex-col lg:items-center"
        >
          <h2 className="heading mb-[21px] mx-8 text-white">Contact Us</h2>
          <ContactForm theme="dark" />
        </section>
        <section className="mb-[52px] mt-[31px] sm:flex sm:flex-row sm:justify-center lg:max-w-7xl lg:mx-auto">
          <div className="w-[234px]">
            <img
              src="/img/nora-genster.jpg"
              alt="Nora Genster"
              className="flex-shrink-0"
              title="Nora Genster"
            />
          </div>
          <div className="mx-8 mt-[34px] sm:w-1/2 flex flex-col gap-3">
            <h2 className="subheading">Meet Nora Genster</h2>
            <p className="body-copy max-w-2xl">
              Nora Genster is Senior Director of the Employment Transformation
              Collective at Northwest Center. She joined Northwest Center in
              2022. Nora oversees a portfolio that creates workplaces where all
              employees can do their best work. Prior to Northwest Center, she
              worked in Washington, DC. She focused on the nexus of disability
              and employment in public and private sectors.
            </p>
            <Link
              href="https://www.linkedin.com/in/nora-genster-76153692"
              rel="noreferer"
              target="_blank"
            >
              <a
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
