import classNames from "classnames";
import SliderModel from "./SliderModel";

const Box = classNames(
  'h-64',
  'w-full',
  'mt-'
);

const FeaturedSlider = () => {
  return (
    <div className='h-96 w-full rounded-lg mt-12 mb-12 bg-gray-700 flex box-border'>
      {/* Left side (details) */}
      <div className="flex-1 p-10 my-auto">
        <h2 className="mb-6">
          คอร์สแนะนำ
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, exercitationem tempore laborum nisi adipisci, molestias, minus qui atque porro reprehenderit voluptatem corporis consectetur odit quod! Modi harum ab quia eaque.
        </p>
        <a href="#">สมัครเพื่อเริ่มเรียนเลย</a>
      </div>
      {/* Right side (pic) */}
      <img src="featuredTempPic.png" alt="" className="flex-1 max-h-full"/>
    </div>
  )
}

export default FeaturedSlider
