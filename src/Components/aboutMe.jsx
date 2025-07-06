const SkillsList = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "TypeScript",
  "Bootstrap",
  "Tailwind CSS",
  "sass",
  "Pugjs",
  "Webpack",
  "NPM",
  "Git",
  "GitHub",
  "VS Code",
  "Chrome DevTools",
];
const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-start gap-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#9F6A69] font-serif">
          My Biography
        </h2>

        <div className="w-full max-w-3xl font-serif text-base sm:text-lg leading-relaxed">
          <p className="mb-4">
            Hi, I’m <b className="text-[#684544]">Esraa Alnagar</b>, a Front-End
            Developer with a background in Mechatronics Engineering and a strong
            focus on building responsive, user-friendly web applications. I work
            with modern technologies like React, TypeScript, and Tailwind CSS,
            along with core tools like HTML5, CSS3, JavaScript (ES6+), and
            Bootstrap.
          </p>
          <p className="mb-4">
            I’ve built several real-world projects, including web apps and
            dynamic websites, where I implemented features like product
            filtering, form handling, and DOM manipulation. These projects
            reflect my ability to combine logic with creativity to build smooth,
            intuitive interfaces. What sets me apart is my focus on usability
            and visual clarity. I believe great websites aren’t just coded —
            they’re designed to engage. I’m continuously learning and evolving,
            driven by a love for turning ideas into impactful digital solutions.
          </p>

          <h3 className="text-2xl font-bold text-[#9F6A69] mt-10 mb-4">
            My Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {SkillsList.map((skill, index) => (
              <li
                key={index}
                className="border border-[#9F6A69] px-4 py-2 rounded hover:bg-[#9F6A69] hover:text-white transition-colors duration-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
