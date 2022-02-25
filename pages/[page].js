import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export async function getStaticProps(arg) {
  console.log('getStaticProps', arg);
  return {
    props: {},
    revalidate: 1
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: 1 } }
    ],
    fallback: true // false or 'blocking'
  };
}


export default function Page(props) {
  return (
    <div className="container">
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
