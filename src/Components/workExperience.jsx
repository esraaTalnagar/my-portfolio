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
            <h3 className="font-bold text-xl">
              Front-End Developer (Freelance / Personal Projects)
            </h3>
            <p>
              Remote,{" "}
              <span className="text-[#9F6A69] italic "> 2024 - Present </span>
            </p>
          </div>
          <div className="role w-[66%]">
            <ul>
              <li className="mb-2 flex flex-row ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Developed multiple responsive and interactive web applications
                using React, TypeScript, Tailwind CSS, and JavaScript ES6+.
              </li>
              <li className="mb-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Built a CRUD system for managing users and data, implementing
                form validation, modal control, and clean UI components.
              </li>
              <li className="mb-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Designed and coded a weather app that consumes real-time APIs,
                handling asynchronous data fetching and dynamic rendering.
              </li>
              <li className="mb-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Created a full E-commerce website with product listings,
                filtering, search functionality, and cart logic,all crafted from
                scratch. Focused on
              </li>
              <li className="mb-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                performance, accessibility, and code reusability while ensuring
                cross-browser compatibility.
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-10 shadow" />
        <div className="exp2 flex flex-row mt-8">
          <div className="head w-[33%]">
            <h3 className="font-bold text-xl">
              Programming Instructor (Be School)
            </h3>
            <p>
              <span className="text-[#9F6A69] italic ">
                October 2022 – April 2023
              </span>
            </p>
          </div>
          <div className="role w-[66%]">
            <ul>
              <li className="mb-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Taught programming fundamentals (Scratch, App Inventor, basic
                hardware) to students aged 9–16 across 80+ workshops.
              </li>
              <li className="mb-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Simplified technical concepts through interactive lessons,
                adapting to diverse learning styles — building strong
                communication and instructional design skills.
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-10 shadow" />
        <div className="exp3 flex flex-row mt-8">
          <div className="head w-[33%]">
            <h3 className="font-bold text-xl">Abstractor (Akhdar)</h3>
            <p>
              <span className="text-[#9F6A69] italic">
                June 2022 – March 2025
              </span>
            </p>
          </div>
          <div className="role w-[66%]">
            <ul>
              <li className="mb-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Summarized over 25 books by condensing complex ideas into
                engaging, concise formats (average 70% reduction), maintaining
                key insights and clarity.
              </li>
              <li className="mb-2 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="#9F6A69"
                  className="mr-2"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
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
