import CourseRating from "../utilities/CourseRating";

const CourseBanner = () => {
  return (
    <div className="bg-designDark flex flex-col lg:flex-row p-10 mt-4 rounded-md mx-6 lg:mx-0 items-center">
      {/* Left side (img) */}
      <div className="">
        <img src="courses/pythonBig.png" alt="" className="w-full max-w-xl h-auto mx-auto"/>
      </div>
      {/* Right side (details) */}
      <div className="flex flex-col px-0 mt-6 lg:pr-24 lg:pl-10 lg:w-3/5 lg:mt-0">
        <h3 className="text-xl lg:text-4xl">
          Learn Python - Full Course for Beginners (2021)
        </h3>
        <p className="mt-6 mb-1 text-sm lg:text-base">
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
