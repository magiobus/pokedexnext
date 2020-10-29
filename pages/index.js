import Head from 'next/head'
import Search from '../components/search'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <b> National Pokedex </b>
        </h1>

      <Search />

      </main>
    </div>
  )
}
