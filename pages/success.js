const { default: Head } = require('next/head')

function Success() {
  return (
    <>
      <Head>
        <title>Contact form Successfully Sent</title>
      </Head>
      <main className="w-full h-full px-8 mt-[74px] pb-[188px]">
        <h1 className="heading">Thank you for connecting!</h1>
      </main>
    </>
  )
}

export default Success
