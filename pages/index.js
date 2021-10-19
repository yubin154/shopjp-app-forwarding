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
          <a href="/buy">APP下单</a>
        </p>
        <p className="description">
          <a href="/browse">Browse Products (产品目录)</a>
        </p>
        <p className="description">
          <a href="/beauty">Browse Beauty Products (美妆)</a>
        </p>
        <p className="description">
          <a href="/health">Browse Health Products (药妆)</a>
        </p>
        <p className="description">
          <a href="/fashion">Browse Fashion Products (时尚，日用，小吃)</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
