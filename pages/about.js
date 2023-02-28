import ContactForm from '@components/ContactForm'
import Link from 'next/link'

function About() {
  const content = [
    {
      title: 'Visual Assistance Help Desk',
      description:
        'Accessibility Partners are trusted specialists for blind and low-vision employees. We solve accessibility issues over secure video within your network.',
      imgSrc: '/img/circle-sm.png',
      imgAlt: '',
    },
    {
      title: 'Accessible Groups',
      description:
        'All employees can use the Help Desk to make documents and events more accessible. Supplements accessibility efforts by supporting visually impaired employees more efficiently.',
      imgSrc: '/img/circle-sm.png',
      imgAlt: '',
    },
    {
      title: 'Visual Experience Support',
      description:
        'Accessibility Partners are experts in visual interpretation for real-time meetings and live events. \n\nWe also provide sighted guide services for end-to-end accessibility.',
      imgSrc: '/img/circle-sm.png',
      imgAlt: '',
    },
    {
      title: 'Managed Full-Time Staff',
      description:
        'Employees who need one-to-one visual accessibility support: We provide personalized full-time assistance, with workplace accommodation plans. \n\nWe offer in-person, remote, and hybrid support.',
      imgSrc: '/img/circle-sm.png',
      imgAlt: '',
    },
    {
      title: 'Dynamic Solutions',
      description:
        'Our Accessibility Partners provide customized support that adjusts to meet your changing needs. We support the best existing and new ways communicate visual information. This ranges from interpreting complex data to integrating assistive technologies.',
      imgSrc: '/img/circle-sm.png',
      imgAlt: '',
    },
  ]

  return (
    <>
      <header className="relative bg-theme-blue pt-14">
        <h1 className="heading text-white mx-14 mb-6">
          Accessibility Partners Service
        </h1>
        <div className="mx-14 flex flex-col gap-6">
          <p className="body-copy text-white">
            Building and Supporting Inclusive Work and Businesses
          </p>
          <p className="body-copy text-white">
            Accessibility solutions for blind and low-vision employees
          </p>
          <p className="body-copy text-white pb-28">
            We work within your systems to deliver fast and secure help. Our
            service helps your business raise productivity, performance, and job
            satisfaction.
          </p>
        </div>
        <img
          src="/img/woman-working-with-friend.png"
          alt="Woman working with friend"
          className="absolute -bottom-[27%] right-0 h-[251px]"
        />
      </header>
      <main className="mt-32">
        <div className="mx-8 flex flex-col gap-[54px]">
          {content.map(function (item, index) {
            const desc = item.description.split('\n\n')
            return (
              <div key={index} className="flex flex-col gap-[14px]">
                <div>
                  <img src={item.imgSrc} alt={item.imgAlt} />
                </div>
                <h2 className="subheading">{item.title}</h2>
                {desc.map(function (item, index) {
                  return (
                    <p key={index} className="body-copy">
                      {item}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="bg-theme-blue text-white pt-[38px] mt-[60px]">
          <h2 className="heading mb-[21px] mx-8 text-white">Contact Us</h2>
          <ContactForm theme="dark" />
        </div>
        <aside className="mb-[52px] mt-[31px]">
          <div className="w-[234px]">
            <img
              src="/img/nora-genster.jpg"
              alt="Nora Genster"
              title="Nora Genster"
            />
          </div>
          <div className="mx-8 mt-[34px] flex flex-col gap-3">
            <h2 className="subheading">Meet Nora Genster</h2>
            <p className="body-copy">
              Nora Genster is Senior Director of the Employment Transformation
              Collective at Northwest Center. She joined Northwest Center in
              2022. Nora oversees a portfolio that creates workplaces where all
              employees can do their best work. Prior to Northwest Center, she
              worked in Washington, DC. She focused on the nexus of disability
              and employment in the public and private sectors.
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
        </aside>
      </main>
    </>
  )
}

export default About
