import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import NewsItem from '../components/NewsItem'
import { data } from '../data'


const Home: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className=' my-16'>
        {props.data.data.map((newsItem: any) => {
          return (
            <NewsItem newsItem={newsItem} />
          )
        })}


      </main>



    </div>
  )
}

export default Home

//Server Side Rendering

export const getServerSideProps: GetServerSideProps = async () => {

  // const URL = `https://inshorts-news-api.onrender.com/?lang=en&category=world`

  // console.log(URL)
  // const res = await fetch(URL)
  // const data = await res.json()
  
  return {
    props: { data }, // will be passed to the page component as props
  }
}
