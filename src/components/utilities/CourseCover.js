import CourseRating from "./CourseRating"

const CourseCover = () => {
  return (
    <div className="flex flex-col justify-evenly">
      <img src="courses/py1.jpg" alt="" className="w-full" />
      <h5 className="text-base md:text-xl">
        Python 101 ปูพรมพื้นฐานเริ่มจาก 0
      </h5>
      <p className="text-subtitle2 md:text-subtitle1">
        Wachirachai Nitsomboon
      </p>
      <CourseRating />
      <h5 className="text-base lg:text-xl">
        0 THB
      </h5>
    </div>
  )
}

export default CourseCover
