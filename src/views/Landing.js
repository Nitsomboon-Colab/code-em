import classNames from 'classnames';
import FeaturedSlider from '../components/Slider/FeaturedSlider';

const signUpBtn = classNames(
  'text-primary',
  'text-xl',
  'border-2',
  'border-primary',
  'py-2',
  'px-6',
  'rounded',
  'lg:w-1/4',
  'sm:w-2/5',
  'hover:bg-primary',
  'hover:text-white'
);

const Landing = () => {
  return (
    <>
      <div className="bg-designDarker pt-14 pb-24 mt-20">
        {/* SignUp */}
        <div className="container mx-auto max-w-7xl flex flex-wrap text-gray-200">
          <div className="flex-1">
            <img src="landingImage.jpg" alt="" className="max-w-sm ml-auto md:mr-16"/>
          </div>
          <div className="flex-1 flex flex-col justify-evenly">
            <h1>เขียนโปรแกรมกับเราเลย</h1>
            <h5>
              การเเขียนโปรแกรมเป็นหัวข้อที่ซับซ้อนและเข้าใจได้ยาก <br />
              เราจึงคิดสร้างแพลตฟอร์มเพื่อทำให้การเขียนโปรแกรมนั้นง่าย และเร็วขึ้น
            </h5>
            <button className={signUpBtn}>
              สมัครเลย
            </button>
          </div>
        </div>
      </div>

      {/* Featured courses */}
      <div className="bg-designDark">
        <div className="container mx-auto max-w-7xl flex text-gray-200">
          {/* Featured slider */}
          <FeaturedSlider />
        </div>
      </div>
    </>
  );
}

export default Landing