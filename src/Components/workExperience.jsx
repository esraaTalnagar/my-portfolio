import { CheckCircleIcon } from "@heroicons/react/24/solid";

const WorkExperience = () => {
  return (
    <section className="min-h-screen container m-10">
      <div className="header">
        <h2 className="text-5xl font-bold text-[#9F6A69] mb-10 font-serif text-center ">
          Work Experience
        </h2>
      </div>
      <div className="flex font-serif flex-col text-start">
        <div className="exp1 flex flex-row">
          <div className="head w-[33%]">
            <h3>Front-End Developer (Freelance / Personal Projects)</h3>
            <p>
              Remote,{" "}
              <span className="text-[#9F6A69] italic "> 2024 - Present </span>
            </p>
          </div>
          <div className="role w-[66%]">
            <ul>
              <li className="mb-2 flex flex-row ">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                Developed multiple responsive and interactive web applications
                using React, TypeScript, Tailwind CSS, and JavaScript ES6+.
              </li>
              <li className="mb-2 flex flex-row">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                Built a CRUD system for managing users and data, implementing
                form validation, modal control, and clean UI components.
              </li>
              <li className="mb-2 flex flex-row">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                Designed and coded a weather app that consumes real-time APIs,
                handling asynchronous data fetching and dynamic rendering.
              </li>
              <li className="mb-2 flex flex-row">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                Created a full E-commerce website with product listings,
                filtering, search functionality, and cart logic,all crafted from
                scratch. Focused on
              </li>
              <li className="mb-2 flex flex-row">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                performance, accessibility, and code reusability while ensuring
                cross-browser compatibility.
              </li>
            </ul>
          </div>
        </div>
        <div className="exp2 flex flex-row mt-8">
          <div className="head w-[33%]">
            <h3>Programming Instructor (Be School)</h3>
            <p>
              <span className="text-[#9F6A69] italic ">
                October 2022 – April 2023
              </span>
            </p>
          </div>
          <div className="role w-[66%]">
            <ul>
              <li className="mb-2 flex flex-row">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                Taught programming fundamentals (Scratch, App Inventor, basic
                hardware) to students aged 9–16 across 80+ workshops.
              </li>
              <li className="mb-2 flex flex-row">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                Simplified technical concepts through interactive lessons,
                adapting to diverse learning styles — building strong
                communication and instructional design skills.
              </li>
            </ul>
          </div>
        </div>
        <div className="exp3 flex flex-row mt-8">
          <div className="head w-[33%]">
            <h3>Abstractor (Akhdar)</h3>
            <p>
              <span className="text-[#9F6A69] italic">
                June 2022 – March 2025
              </span>
            </p>
          </div>
          <div className="role w-[66%]">
            <ul>
              <li className="mb-2 flex flex-row">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                Summarized over 25 books by condensing complex ideas into
                engaging, concise formats (average 70% reduction), maintaining
                key insights and clarity.
              </li>
              <li className="mb-2 flex flex-row">
                <CheckCircleIcon className="w-6 h-6 text-[#9F6A69]" />
                Delivered high-quality content on a weekly basis with 100%
                deadline adherence and editorial precision — sharpening
                attention to detail, structure, and user understanding.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience
