import classNames from "classnames";
import { HiChevronRight } from "react-icons/hi";

const Box = classNames(
  'h-96',
  'w-full',
  'rounded-xl',
  'mt-12',
  'mb-8',
  'bg-designDarker',
  'flex',
  'box-border',
  'mx-2'
);

const smallBox = classNames(
  'flex-1',
  'flex',
  'flex-col',
  'pt-12',
  'px-4',
  'space-y-6',
  'rounded-xl',
  'box-border',
  'bg-designDarker',
);

const CatalogueBanner = () => {
  return (
    <div className="flex flex-col items-center">
      <div className={Box}>
        {/* Left side (details) */}
        <div className="flex-1 p-10 my-auto">
          <h2 className="mb-6">
            คอร์สแนะนำ
          </h2>
          <p className="mb-6">
            เราเข้าใจว่าการเริ่มเขียนโปรแกรมไม่ใช่เรื่องง่าย ลองเข้ามาเช็คดูคอร์สบนแพลตฟอร์มเราดูก่อน ทุกคอร์สที่เราสอนมีการปรับปรุงอยู่ตอลดเพื่อให้อัพเดททันกับเวลา และเรารับ feedback จาก community บนแพลตฟอร์มเราเพื่อนำไปพัฒนาให้ดียิ่งขึ้น
          </p>
          <a href="#">
            สมัครเพื่อเริ่มเรียนเลย <HiChevronRight  className="text-primary inline text-lg"/>
          </a>
        </div>
        {/* Right side (pic) */}
        <img src="featuredTempPic.png" alt="" className="flex-1 max-h-full"/>
      </div>

      <div className="h-96 w-full flex justify-between space-x-4 mb-10 mx-auto">
        <div className={smallBox}>
          <h3 className="text-center">Learn</h3>
          <p>
            เรียนการเขียนโปรแกรมที่สอนอย่างครอบคลุม เริ่มตั้งแต่หัวข้อที่เบสิคที่สุดไปจนถึงหัวข้อระดับสูงเลือกที่จะเรียนกับเรา <br />
            หรือซื้อคอร์สกับผู้สอนที่ทำงานร่วมกับเรา
          </p>
          <a href="#">
            Learn more <HiChevronRight  className="text-primary inline text-lg"/>
          </a>
        </div>
        <div className={smallBox}>
          <h3 className="text-center">Practice</h3>
          <p>
            ฝึกทักษะการเขียนโปรแกรม ไปกับโจทย์ที่สมจริงทั้งการทำ Quiz ท้ายบทเรียน หรือ Challenge ที่มีการอัพเดทใหม่ทุกเดือน
          </p>
          <a href="#">
            Learn more <HiChevronRight  className="text-primary inline text-lg"/>
          </a>
        </div>
        <div className={smallBox}>
          <h3 className="text-center">Community</h3>
          <p>
          เข้าร่วมสังคมนักเขียนโค้ดเพื่อหาเพื่อนเรียนไปด้วยกัน หรือจะเข้ามาสอบถามปัญหาเกี่ยวกับเรื่องโค้ดที่คุณมี <br />
          พร้อมแลกเปลี่ยน อัพเดทข่าวสารความรู้ในวงการไปกับเราได้เลย
          </p>
          <a href="#">
            Learn more <HiChevronRight  className="text-primary inline text-lg"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CatalogueBanner
