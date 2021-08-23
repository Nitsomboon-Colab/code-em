import { Disclosure } from "@headlessui/react";
import { HiChevronLeft } from "react-icons/hi";
import FeaturedCourses from "../components/Slider/FeaturedCourses"
import CourseCover from "../components/utilities/CourseCover";

const CataloguePage = () => {
  return (
    <div className="bg-designDarker pt-10 pb-14 mt-20">
      <div className="container mx-auto max-w-7xl flex flex-col text-gray-200">
        {/* Featured course */}
        <h4 className="text-center lg:text-left">
          หลักสูตรแนะนำ
        </h4>
        <FeaturedCourses />

        {/* Promo banner */}
        <img src="promoBanner.svg" alt="" className="mt-10 hidden md:block"/>
        
        {/* Catalogue */}
        <h3 className="mt-20 mb-2 text-xl text-center lg:text-left md:text-4xl">
          คอร์สทั้งหมด
        </h3>
        <hr className="w-1/4 hidden lg:block"/>
        <div className="mt-4 flex">
          {/* Side nav */}
          <div className="bg-designDark hidden lg:w-1/3  box-border lg:flex flex-col items-start">
            {/* Categories */}
            <Disclosure as="div" className="w-full bg-designLight">
              {({ open }) => (
                <>
                  <Disclosure.Button className="px-6 py-3">
                    <HiChevronLeft
                      className={`inline mr-2 ${open ? "transform -rotate-90 duration-75" : ""}`}
                    />
                    <span>Categories</span>
                  </Disclosure.Button>

                  <Disclosure.Panel className="bg-designDark px-6">
                    asd
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Rating */}
            <Disclosure as="div" className="w-full bg-designLight">
              {({ open }) => (
                <>
                  <Disclosure.Button className="px-6 py-3">
                    <HiChevronLeft
                      className={`inline mr-2 ${open ? "transform -rotate-90 duration-75" : ""}`}
                    />
                    <span>Rating</span>
                    {/*
                      Use the `open` render prop to rotate the icon when the panel is open
                    */}
                  </Disclosure.Button>

                  <Disclosure.Panel className="bg-designDark px-6">
                    asd
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* Price range */}
            <Disclosure as="div" className="w-full bg-designLight">
              {({ open }) => (
                <>
                  <Disclosure.Button className="px-6 py-3">
                    <HiChevronLeft
                      className={`inline mr-2 ${open ? "transform -rotate-90 duration-75" : ""}`}
                    />
                    <span>Price range</span>
                    {/*
                      Use the `open` render prop to rotate the icon when the panel is open
                    */}
                  </Disclosure.Button>

                  <Disclosure.Panel className="bg-designDark px-6">
                    asd
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          {/* Catalogue */}
          <div className="bg-designDark py-8 px-6 mx-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-5 gap-y-10">
            <CourseCover />
            <CourseCover />
            <CourseCover />
            <CourseCover />
            <CourseCover />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CataloguePage
