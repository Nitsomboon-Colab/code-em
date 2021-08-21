import {MdStar, MdStarHalf, MdStarBorder} from "react-icons/md";

const CourseRating = () => {
  return (
    <div className="text-starGold space-x-2 flex items-center">
      <p className="inline-block">
        4.5
      </p>
      <div className="inline-block text-lg">
        <MdStar className="inline"/>
        <MdStar className="inline"/>
        <MdStar className="inline"/>
        <MdStar className="inline"/>
        <MdStarHalf className="inline"/>
      </div>
      <p className="inline-block text-gray-500">
        (199)
      </p>
    </div>
  )
}

export default CourseRating
