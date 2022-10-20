import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import NewsItem from '../components/NewsItem'
// import { data } from '../data'


const Home: NextPage = (props: any) => {
  return (
    <div className='flex flex-col items-center bg-slate-100 dark:bg-slate-800 text-black dark:text-white'>
      <Head>
        <title>News In Short</title>
        <meta name="description" content="created by archis using nextjs, typescript, nodejs & expressjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />


      <main className=' my-28 flex flex-wrap max-w-5xl justify-center'>
        {props.data.data.map((newsItem: any) => {
          return (
            <NewsItem key={newsItem.image} newsItem={newsItem} />
          )
        })}
      </main>

    </div>
  )
}

export default Home

//Server Side Rendering

export const getServerSideProps: GetServerSideProps = async () => {

  const URL = `https://inshorts-news-api.onrender.com/?lang=en&category=world`

  const res = await fetch(URL)
  const data = await res.json()
  console.log(URL)
  
  return {
    props: { data }, // will be passed to the page component as props
  }
}
