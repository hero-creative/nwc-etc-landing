const { default: Head } = require('next/head')

function Success() {
  return (
    <>
      <Head>
        <title>Contact form Successfully Sent</title>
        <style>
          {`
            body {
              background-color: #120D2D;
            }
          `}
        </style>
      </Head>
      <main className="relative overflow-hidden w-full h-full pt-[54px] pb-[36px] bg-theme-blue">
        <h1 className="heading text-white pb-14 px-8">
          Thank You! We will respond soon via the email you provided.
        </h1>

        <div className="w-[290px]">
          <img
            className="w-full"
            src="/img/circle-half.png"
            alt="Colorful circle decoration"
          />
        </div>
      </main>
    </>
  )
}

export default Success
