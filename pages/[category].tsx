import React from 'react'
import { GetServerSideProps } from 'next';
import Navbar from '../components/Navbar';
import NewsItem from '../components/NewsItem';
import { data } from '../data';

const Category = (props:any) => {
    return (
        <>
            <Navbar />
            <main className=''>
                {props.data.data.map((newsItem: any) => {
                    return (
                        <NewsItem newsItem={newsItem} />
                    )
                })}
            </main>

        </>
    )
}

export default Category;


//Server Side Rendering

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {

    // const URL = `https://inshorts-news-api.onrender.com/?lang=en&category=${params.category}`

    // const res = await fetch(URL)
    // const data = await res.json()

    return {
        props: { data }, // will be passed to the page component as props
    }
}
