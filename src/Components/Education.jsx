
import { TypeAnimation } from "react-type-animation";
const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-[#f1e6e3] shadow-inner shadow-slate-300">
      <h2 className="text-5xl font-bold text-[#9F6A69] mb-4 font-serif p-6">
        Education
      </h2>
      <div className="content  font-serif">
        <div className="header text-center">
          <TypeAnimation
            sequence={[
              "Bachelor’s Degree in Mechatronics Engineering",
              1500,
              "",
              1000,
              "Bachelor’s Degree in Mechatronics Engineering",
            ]}
            wrapper="h3"
            repeat={Infinity}
            deletionSpeed={50}
            className="title text-[#5f403f] text-2xl font-bold"
            cursor={true}
            speed={50}
          />
          <p className="font-bold text-[#d69693] text-xl m-7">
            Mansoura University, Egypt
          </p>
          <p className="font-bold text-[#d69693] text-lg m-4">2016-2021</p>
        </div>
        <div className="Desc justify-start">
          <ul className="text-lg ">
            <li className="text-[#5f403f] mb-5">
              Built a strong foundation in problem-solving, system design, and
              programming logic.
            </li>
            <li className="text-[#ac7976] mb-5">
              Gained experience with C/C++ and embedded systems, reinforcing a
              structured and analytical approach to coding.
            </li>
            <li className="text-[#5f403f] mb-5">
              Final year project focused on automation system design.
            </li>
            <li className="text-[#ac7976] mb-5">
              Developed transferable technical skills that support modern web
              development practices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education
