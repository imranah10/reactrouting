import React from 'react'
import { Header } from '../common/Header'
import { useLocation } from 'react-router-dom'
import { Data } from '../blogs/Blogs'

const Blogdetails = () => {
    let useloca=useLocation();
    let currentid=(useloca.pathname.split('/')[2])
    let currentdata=Data.filter((v)=>v.id==currentid)[0]
    console.log(currentdata)


  return (
    <div>
    <Header />
    <h1>{currentdata.title}</h1>
    </div>
  )
}

export default Blogdetails
