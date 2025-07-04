import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const WorkExperience = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-[#9F6A69] mb-10 font-serif text-center">
        Work Experience
      </h2>

      <div className="relative w-full h-auto min-h-[450px] rounded-3xl">
        {/* Controlled Radio Buttons */}
        <input
          type="radio"
          name="slider"
          id="slider1"
          className="hidden peer/slider1"
          checked={activeSlide === 1}
          readOnly
        />
        <input
          type="radio"
          name="slider"
          id="slider2"
          className="hidden peer/slider2"
          checked={activeSlide === 2}
          readOnly
        />

        {/* Slide 1 */}
        <div
          className="rounded-3xl absolute inset-0 opacity-0 z-10 bg-[#f1e6e3] px-6 py-8 transition-all duration-500
          peer-checked/slider1:opacity-100 peer-checked/slider1:z-20"
        >
          <div className="flex flex-col md:flex-row gap-6 flex-wrap">
            <div className="w-2/3 md:w-1/3">
              <h3 className="font-bold text-lg md:text-xl">
                Front-End Developer (Freelance / Personal Projects)
              </h3>
              <p className="text-sm md:text-base">
                Remote,{" "}
                <span className="text-[#9F6A69] italic">2024 - Present</span>
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <ul>
                {[
                  "Developed responsive and interactive apps using React, TypeScript, Tailwind CSS, and JS ES6+.",
                  "Built a CRUD system with validation, modals, and clean components.",
                  "Created a weather app using real-time APIs and async handling.",
                  "Developed a complete e-commerce site with cart, filter, and search.",
                  "Focused on performance, accessibility, and reusable code.",
                ].map((item, i) => (
                  <li key={i} className="mb-2 flex text-sm md:text-base">
                    <CheckCircleIcon className="w-5 h-5 text-[#9F6A69] mr-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="rounded-3xl absolute inset-0 opacity-0 z-10 bg-[#f1e6e3] px-6 py-8 transition-all duration-500
          peer-checked/slider2:opacity-100 peer-checked/slider2:z-20"
        >
          <div className="flex flex-col md:flex-row gap-6 flex-wrap">
            <div className="w-full md:w-1/3">
              <h3 className="font-bold text-lg md:text-xl">
                Programming Instructor (Be School)
              </h3>
              <p className="text-sm md:text-base text-[#9F6A69] italic">
                October 2022 – April 2023
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <ul>
                <li className="mb-2 flex text-sm md:text-base">
                  <CheckCircleIcon className="w-5 h-5 text-[#9F6A69] mr-2 shrink-0" />
                  Taught programming basics (Scratch, App Inventor, hardware) to
                  80+ students aged 9–16.
                </li>
                <li className="mb-2 flex text-sm md:text-base">
                  <CheckCircleIcon className="w-5 h-5 text-[#9F6A69] mr-2 shrink-0" />
                  Created interactive lessons tailored to different learning
                  styles.
                </li>
                <li className="mb-2 flex text-sm md:text-base">
                  <CheckCircleIcon className="w-5 h-5 text-[#9F6A69] mr-2 shrink-0" />
                  Guided students in building their first games, apps, and
                  hardware-controlled projects.
                </li>
                <li className="mb-2 flex text-sm md:text-base">
                  <CheckCircleIcon className="w-5 h-5 text-[#9F6A69] mr-2 shrink-0" />
                  Fostered an engaging, curiosity-driven learning environment.
                </li>
                <li className="mb-2 flex text-sm md:text-base">
                  <CheckCircleIcon className="w-5 h-5 text-[#9F6A69] mr-2 shrink-0" />
                  Received consistently positive feedback for clarity, patience,
                  and inspiration.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute w-full flex justify-center gap-2 bottom-4 mt-4 z-30">
          {["slider1", "slider2"].map((id, i) => (
            <label
              key={id}
              htmlFor={id}
              onClick={() => setActiveSlide(i + 1)}
              className={`block w-4 h-4 rounded-full bg-white cursor-pointer opacity-50 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-100
              peer-checked/${id}:opacity-100 peer-checked/${id}:w-8`}
            ></label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
