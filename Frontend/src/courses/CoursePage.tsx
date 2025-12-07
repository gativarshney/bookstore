import React from 'react'
import list from '../../public/list.json'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const CoursePage = () => {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 text-center'>
            <h1 className='text-3xl p-5 '>We are delighted to have you on <span className='text-pink-500'> BookStore :)</span></h1>
            <p className='flex justify-center p-5 md:text-xl md:mx-10'>Expand your horizons with our carefully curated courses designed for readers, writers, and lifelong learners. From creative writing and literature appreciation to professional skill-building, each course blends knowledge with inspiration.</p>
            
            <Link to={'/'}>
              <button className='bg-pink-500 px-3 py-2 rounded font-bold my-3 cursor-pointer mb-10'>Back</button>
            </Link>
        </div>
        <div className='nt-10 grid grid-cols-1 md:grid-cols-4 '>
          {list.map((item, id)=>{
            return <Card key={id} item={item}/>
          })}
        </div>
    </>
  )
}

export default CoursePage
