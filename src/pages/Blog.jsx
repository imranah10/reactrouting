import React from 'react'
import { Header } from '../common/Header'
import { Data } from '../blogs/Blogs'
import { Link } from 'react-router-dom'

const Blog = () => {
    let blogs=Data.map((v,i)=>{
        return(
            <div className="blogitems" key={i}>
                <h3> {v.title}</h3>
                <p>
                   
                    {v.body}
                </p>
                <button><Link to={`/blog/${v.id}`}>Read more</Link></button>
            </div>
        )
    })
  return (
    <div>
        <Header />
      <h1>Blog page</h1>
      <div className="container">
        {blogs}
      </div>
    </div>
  )
}

export default Blog
