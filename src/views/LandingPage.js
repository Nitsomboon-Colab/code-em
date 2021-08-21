import classNames from 'classnames';
import CatalogueBanner from '../components/CatalogueBanner';

const signUpBtn = classNames(
  'text-primary',
  'text-xl',
  'font-bold',
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
          {/* Left side (img) */}
          <div className="flex flex-1 relative">
            <img src="landingImage.jpg" alt="" className="max-w-sm ml-auto mt-8 mb-10 sm:mr-12 lg:mr-32 xl:mr-52 z-10"/>
            <div className="bg-primary absolute w-96 h-96 top-0"></div>
            <div className="bg-secondary absolute w-96 h-96 bottom-0 left-20"></div>
          </div>
          {/* Right side (details) */}
          <div className="flex-1 flex flex-col space-y-12 my-auto">
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
          {/* Catalogue banner */}
          <CatalogueBanner />
        </div>
      </div>
    </>
  );
}

export default Landing