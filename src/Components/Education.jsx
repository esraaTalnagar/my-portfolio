import { TypeAnimation } from "react-type-animation";

const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f1e6e3] shadow-inner shadow-slate-300 px-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-[#9F6A69] mb-4 font-serif p-4 sm:p-6 text-center">
        Education
      </h2>

      <div className="w-full max-w-3xl font-serif">
        <div className="text-center mb-6">
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
            className="text-[#5f403f] text-lg sm:text-2xl font-bold"
            cursor={true}
            speed={50}
          />

          <p className="font-bold text-[#d69693] text-base sm:text-xl mt-4">
            Mansoura University, Egypt
          </p>
          <p className="font-bold text-[#d69693] text-sm sm:text-lg mt-2">
            2016 - 2021
          </p>
        </div>

        <div className="text-left px-2 sm:px-4">
          <ul className="text-sm sm:text-lg leading-relaxed">
            <li className="text-[#5f403f] mb-4">
              Built a strong foundation in problem-solving, system design, and
              programming logic.
            </li>
            <li className="text-[#ac7976] mb-4">
              Gained experience with C/C++ and embedded systems, reinforcing a
              structured and analytical approach to coding.
            </li>
            <li className="text-[#5f403f] mb-4">
              Final year project focused on automation system design.
            </li>
            <li className="text-[#ac7976] mb-4">
              Developed transferable technical skills that support modern web
              development practices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
