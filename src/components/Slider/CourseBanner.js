import CourseRating from "../utilities/CourseRating";

const CourseBanner = () => {
  return (
    <div className="bg-designDark flex p-10 mt-4 rounded-md md:flex-wrap sm:mx-28 lg:mx-0">
      {/* Left side (img) */}
      <div className="lg:flex-1">
        <img src="courses/pythonBig.png" alt="" className="sm:w-1/2 lg:w-full sm:mx-auto lg:mx-0"/>
      </div>
      {/* Right side (details) */}
      <div className="flex-shrink-0 w-3/5 pr-24 pl-10 flex flex-col justify-center sm:flex-grow sm:mt-6 lg:flex-grow-0 lg:mt-0">
        <h3>
          Learn Python - Full Course for Beginners (2021)
        </h3>
        <p className="mt-6 mb-1">
          คอร์สการเรียน Python เบื้องต้นจะเป็นการปูพื้นฐานของผู้ที่ไม่มีประสบการณ์การเขียนโปรแกรมมาก่อน โดยเริ่มต้นจากการสอนขั้นพื้นฐานภาษา Python แล้วไปจนถึงการลองเขียน Desktop App สำหรับคำนวณสูตรคูณ
        </p>
        <CourseRating />
        <h5 className="mt-1">
          0 THB
        </h5>
      </div>
    </div>
  )
}



export default CourseBanner
