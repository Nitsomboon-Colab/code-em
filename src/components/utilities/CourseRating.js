import {MdStar, MdStarHalf, MdStarBorder} from "react-icons/md";

const CourseRating = () => {
  return (
    <div className="text-starGold space-x-2 flex items-center text-xs">
      <p className="md:text-base">
        4.5
      </p>
      <div className="flex md:text-lg">
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStarHalf />
      </div>
      <p className="md:text-base text-gray-500">
        (199)
      </p>
    </div>
  )
}

export default CourseRating
