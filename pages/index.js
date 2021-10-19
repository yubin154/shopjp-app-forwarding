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
          <a href="/browse">浏览产品目录</a>
        </p>
        <p className="description">
          <a href="/buy">去APP下单</a>
        </p>
      </main>
      <Footer />
    </div>
  )
}
