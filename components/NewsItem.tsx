import React from 'react'

const NewsItem = ({ newsItem }: any) => {
    return (
        <article>
            <h3>{newsItem.title}</h3>
        </article>
    )
}

export default NewsItem