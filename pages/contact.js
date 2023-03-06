import ContactForm from '@components/ContactForm'
import Head from 'next/head'

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className="mt-[74px] lg:flex lg:flex-col lg:items-center">
        <div className="mx-8">
          <h1 className="heading text-center lg:text-left mb-[23px] leading-10">
            Get started by connecting with us
          </h1>
        </div>
        <ContactForm theme="light" />
      </main>
    </>
  )
}

export default Contact
