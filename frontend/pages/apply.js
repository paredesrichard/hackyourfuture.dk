import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Apply from '../components/Apply'

let content = `
# Apply to be a student

Every 2 months we start a new class with talented refugees who want to start their career in web-development. We’re looking for people who are very motivated and are willing to put in a lot of hours in order to become great at coding. You will need to have an intermediate level in English and you will need to study for around 25 hours per week, with a physical class every Sunday. (and occasional masterclasses during the week) We accept people living all over the Denmark, and we pay for transportation costs (traintickets).

Want to apply? Please fill in your details below and we will contact you about the further steps in the application process.

`
export default () => (
  <Layout>
    <style jsx>
      {`
        .image {
          position: relative;
          left: -20px;
          right: -20px;
          width: calc(100% + 40px);
          max-width: none;
        }
      `}
    </style>
    <Head>
      <title>Apply - HackYourFuture Copenhagen</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <img className="image" src="https://i.imgur.com/ukKK09t.jpg" />
      <h2>Fill out and apply</h2>
      <Apply email={'cph@hackyourfuture.net'} />
    </Content>
  </Layout>
)
