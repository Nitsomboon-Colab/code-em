import CatalogueBanner from '../components/CatalogueBanner';
import classNames from '../utilities/classnames';

const Landing = () => {
  return (
    <>
      <div className="bg-designDarker pt-14 pb-24 mt-20">
        {/* SignUp */}
        <div className="container mx-auto max-w-7xl flex flex-wrap text-gray-200">
          {/* Left side (img) */}
          <div className="flex md:flex-1 relative">
            <img src="landingImage.jpg" alt="" className="max-w-sm mx-auto sm:ml-auto mt-8 mb-10 w-4/5 sm:mr-12 lg:mr-32 xl:mr-52 z-10"/>
            <div className="bg-primary absolute w-72 h-72 md:w-96 md:h-96 top-0 left-4 md:left-0"></div>
            <div className="bg-secondary absolute w-72 h-72 md:w-96 md:h-96 bottom-0 right-4 md:right-0 md:left-20"></div>
          </div>
          {/* Right side (details) */}
          <div className="md:flex-1 flex flex-col mt-6 space-y-6 text-center md:text-left md:space-y-12 md:my-auto">
            <h1 className="text-4xl">เขียนโปรแกรมกับเราเลย</h1>
            <h5 className="text-sm">
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

//* Style
const signUpBtn = classNames(
  'text-primary',
  'text-xl',
  'font-bold',
  'border-2',
  'border-primary',
  'py-2',
  'px-6',
  'rounded',
  'w-2/5',
  'lg:w-1/4',
  'hover:bg-primary',
  'hover:text-white',
  'mx-auto',
  'md:mx-0'
);

export default Landing