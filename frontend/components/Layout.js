import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style global jsx>{`
        body {
          font-size: 1.2rem;
          line-height: 1.6rem;
          font-family: 'Source Sans Pro', sans-serif;
          margin: 0px;
          color: #111;
          background-color: #fff !important;
        }
        img {
          max-width: 100%;
        }
        a {
          color: #111;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
      />
      <Header />
      {children}
      <Footer />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-117911945-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-117911945-1');
          `
        }}
      />
    </div>
  )
}
