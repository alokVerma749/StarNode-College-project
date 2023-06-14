import React, { useState } from 'react'
import { useEffect, useState } from 'react'

import { BLOGS_API } from '../../utils/api'
import Card from './Card'
import Pagination from './Pagination'

const CardsContainer = () => {
    const [postList, setPostList] = useState([]);
    const [page, setPage] = useState(5);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(`${BLOGS_API}&page=${page}`)
        console.log(`${BLOGS_API}&page=${page}`)
        const json = await data.json()
        setPostList(json?.posts)
        console.log(json)
    }
    return (
        <>
            <div className="container flex  flex-row justify-evenly flex-wrap">
                {postList.length === 0 ? <h1>Rendering</h1> : (
                    postList.map((post) => (
                        <Card name={post.author.name} brief={post.brief} coverImage={post.coverImage} />
                    ))
                )}
            </div>
            <Pagination />
        </>
    )
}

export default CardsContainer