import ContactForm from '@components/ContactForm'
import Head from 'next/head'

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className="mt-[74px]">
        <div className="mx-8">
          <h1 className="heading text-center mx-12 mb-[52px] leading-10">
            Get started by connecting with us
          </h1>
          <h2 className="mb-3 text-[25px] leading-[35px] font-bold">Call Us</h2>
          <p className="text-[22px]">206-285-9140</p>

          <h2 className="mt-[53px] mb-5 text-[25px] leading-[35px] font-bold">
            Contact Us
          </h2>
        </div>
        <ContactForm theme="light" />
      </main>
    </>
  )
}

export default Contact
