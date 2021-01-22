import React from 'react'

const Course = ({ course }) => {
    return (
        <div className="course-item">
            <div className="course-image">
                <img src={course.image} alt={course.name} />
            </div>

            <div className="course-main-content">
                <div className="course-name">
                    <h4>{course.name}</h4>
                </div>
                <div className="course-instructor">
                    <small className="text-light">{course.instructor}</small>
                </div>
                <div className="course-rating">
                    <span>{course.rating}</span>
                    <span>({course.numReviews})</span>
                </div>
                <div className="course-price">
                    <h4>Rp{course.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default Course
