import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewsItem = ({ newsItem }: any) => {
    return (
        <article className=' rounded overflow-hidden w-80 m-2 relative bg-white dark:bg-slate-900 text-black dark:text-white'>

            <Image width="320px" height="200px" objectFit="cover" src={newsItem.image} alt="" />

            <div className="px-6 mt-4 mb-12 ">
                <h3 className="font-bold text-xl mb-2">{newsItem.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-base">{newsItem.content}</p>
            </div>

            <div className="absolute px-6 bottom-2 flex justify-between w-full">
                <p>{newsItem.author}</p>
                <Link href=""><a className='underline underline-offset-4' href={newsItem.readMore} target="_blank" rel="noopener noreferrer">Read More</a></Link>
            </div>

        </article>
    )
}

export default NewsItem