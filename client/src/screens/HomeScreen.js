import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Course from '../components/Course'

import courses from '../data/courses'
import Banner from '../components/Banner'
import Partner from '../components/Partner'
import Footer from '../components/Footer/Footer'

const HomeScreen = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <Hero />
                <Banner />

                <div className="courses-list">
                    {courses.map(course => (
                        <Course key={course._id} course={course} />
                    ))}
                </div>
            </div>

            <Partner />
            <Footer />
        </>

    )
}

export default HomeScreen
