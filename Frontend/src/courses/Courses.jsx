import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CoursePage from '../courses/CoursePage'

const Courses = () => {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
            <CoursePage/>
        </div>
        <Footer/>
    </>
  )
}

export default Courses
