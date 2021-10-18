import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ShopJp.app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="最贴心的纯日货拼邮" />
        <p className="description">
          最贴心的纯日货拼邮
        </p>
      </main>

      <Footer />
    </div>
  )
}
