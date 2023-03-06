import Head from 'next/head'

function AccessStatement() {
  return (
    <>
      <Head>
        <title>Accessibility Statement</title>
      </Head>
      <main className="mt-[74px] mx-8 flex flex-col gap-[73px] mb-[57px] lg:max-w-4xl lg:mx-auto">
        <div>
          <h1 className="font-[500] text-[25px] leading-[35px] mb-[10px]">
            Employment Transformation Collective Accessibility Statement
          </h1>
          <p className="body-copy">
            The Employment Transformation Collective (ETC), part of Northwest
            Center, strives to ensure that its services and platforms are
            accessible to everyone. We invest time and resources to help ensure
            our website is easier to use and more accessible for persons with
            disabilities. This belief is integral to our mission of disability
            inclusion: All experiences and interactions, such as websites,
            should be accessible to and benefit all users. Every person has the
            right to live with dignity, equity, comfort, and independence based
            on their needs. On [www.Placeholder.com] we strive for WCAG 2.1 AA
            compliance as we work on ongoing design and back-end accessibility
            best-practice applications.
          </p>
        </div>
        <div>
          <h1 className="font-[500] text-[25px] leading-[35px] mb-[10px]">
            Disclaimer
          </h1>
          <p className="body-copy">
            The Employment Transformation Collective continues its ongoing
            efforts to improve the accessibility of its sites and services.
            Across all our services, programs, businesses, and platforms, we
            strive to follow our mission of disability inclusion, creating
            experiences that are accessible to people of all abilities, so
            everyone can feel welcomed and respected.
          </p>
        </div>
        <div>
          <h1 className="font-[500] text-[25px] leading-[35px] mb-[10px]">
            Questions? Contact Us
          </h1>
          <p className="body-copy">
            If you wish to report an accessibility issue on our site, have any
            questions, or need assistance, please contact us at, Email:
            WebAccessibility@nwcenter.org
          </p>
        </div>
      </main>
    </>
  )
}

export default AccessStatement
