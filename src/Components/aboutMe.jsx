
const AboutMe = () => {
  return (
    <>
      <section className="container">
        <div className="flex justify-center items-center">
          <h2 className="text-5xl font-bold text-[#9F6A69] mb-4 font-serif p-6">
            My Biography
          </h2>
          <div className="p-6 w-2/3 font-serif text-lg">
            <p>
              Hi, I’m <b className="text-[#684544]">Esraa Alnagar</b>, a
              Front-End Developer with a background in Mechatronics Engineering
              and a strong focus on building responsive, user-friendly web
              applications. I work with modern technologies like React,
              TypeScript, and Tailwind CSS, along with core tools like HTML5,
              CSS3, JavaScript (ES6+), and Bootstrap.
            </p>
            <br />
            <p>
              I’ve built several real-world projects, including web apps and a
              dynamic websites, where I implemented features like product
              filtering, form handling, and DOM manipulation. These projects
              reflect my ability to combine logic with creativity to build
              smooth, intuitive interfaces. What sets me apart is my focus on
              usability and visual clarity. I believe great websites aren’t just
              coded they’re designed to engage. I’m continuously learning and
              evolving, driven by a love for turning ideas into impactful
              digital solutions.
            </p>
            <div>
              <h3 className="text-2xl font-bold text-[#9F6A69] mb-4 font-serif pt-10">My skills</h3>
              <ul className="flex flex-wrap justify-between mr-2">
                <li className="mb-2 border border-[#9F6A69] px-4 py-2 rounded hover:bg-[#9F6A69]">HTML5</li>
                <li className="mb-2 border border-[#9F6A69] px-4 py-2 rounded hover:bg-[#9F6A69]">CSS3</li>
                <li className="mb-2 border border-[#9F6A69] px-4 py-2 rounded hover:bg-[#9F6A69]">JavaScript (ES6+)</li>
                <li className="mb-2 border border-[#9F6A69] px-4 py-2 rounded hover:bg-[#9F6A69]">React</li>
                <li className="mb-2 border border-[#9F6A69] px-4 py-2 rounded hover:bg-[#9F6A69]">TypeScript</li>
                <li className="mb-2 border border-[#9F6A69] px-4 py-2 rounded hover:bg-[#9F6A69]">Bootstrap</li>
                <li className="mb-2 border border-[#9F6A69] px-4 py-2 rounded hover:bg-[#9F6A69]">Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe
