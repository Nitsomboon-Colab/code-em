import CourseRating from "./CourseRating"

const CourseCover = () => {
  return (
    <div className="flex flex-col justify-evenly">
      <img src="courses/py1.jpg" alt="" className="w-full" />
      <h5>
        Python 101 ปูพรมพื้นฐานเริ่มจาก 0
      </h5>
      <p className="text-subtitle1">
        Wachirachai Nitsomboon
      </p>
      <CourseRating />
      <h5>
        0 THB
      </h5>
    </div>
  )
}

export default CourseCover
