import FooterLogo from "../assets/my-logo-colored.jpg";
import Email from "../assets/email-svgrepo-com.svg";

const ContactMe = () => {
  return (
    <footer className="bg-[#f1e6e3] font-serif mt-10 py-8 rounded-lg shadow-md">
      <div className="container mx-auto px-4">
        {/* Logo & Links */}
        <div className="flex flex-col items-center mb-8">
          <img src={FooterLogo} alt="Logo" className="size-24 mb-4" />
          <nav className="flex flex-wrap justify-center gap-4 lg:gap-10 text-[#5f403f] text-base font-semibold mb-6">
            <a href="#about-me" className="hover:text-[#9F6A69] transition">
              About Me
            </a>
            <a href="#education" className="hover:text-[#9F6A69] transition">
              Education
            </a>
            <a href="#experience" className="hover:text-[#9F6A69] transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#9F6A69] transition">
              Projects
            </a>
            <a href="#services" className="hover:text-[#9F6A69] transition">
              Services
            </a>
          </nav>

          <h3 className="text-2xl text-[#744d4c] font-bold mb-4">
            Keep in touch
          </h3>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.github.com/esraaTalnagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:text-[#444] transition"
            >
              <svg
                width="36"
                height="36"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* GitHub SVG path */}
                <path d="M12 3C7.03 3 3 7.13 3 12.23c0 4.08 2.58 7.54 6.15 8.76.45.09.6-.2.6-.44v-1.56c-2.5.55-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.57.06-.56.06-.56.91.06 1.39.95 1.39.95.81 1.38 2.12.98 2.64.75.08-.59.32-.98.58-1.21-2-.23-4.1-1-4.1-4.41 0-.97.34-1.77.9-2.4-.09-.23-.4-1.17.09-2.44 0 0 .75-.24 2.45.92A8.5 8.5 0 0 1 12 7.46c.76 0 1.53.1 2.24.28 1.7-1.16 2.45-.92 2.45-.92.49 1.27.18 2.21.09 2.44.56.63.9 1.43.9 2.4 0 3.42-2.1 4.18-4.11 4.41.33.29.63.85.63 1.72v2.54c0 .24.15.53.6.44A9.25 9.25 0 0 0 21 12.23C21 7.13 16.97 3 12 3Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/esraa-alnaagr-3105b333a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] hover:text-[#0077b5] transition"
            >
              <svg
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z" />
              </svg>
            </a>

            <a
              href="mailto:esraa.alnagar988@outlook.com"
              className="text-[#4a4a4a] hover:text-[#684544] transition"
            >
              <img src={Email} alt="email icon" className="w-8 h-8" />
            </a>
          </div>

          <p className="text-sm text-gray-600">© 2025 All rights reserved.</p>
        </div>

        {/* Footer Bottom Note */}
        <div className="mt-6 text-center text-sm text-slate-500">
          Portfolio{" "}
          <a
            href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900"
          >
            Designed
          </a>{" "}
          by{" "}
          <a
            href="https://www.loopple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900"
          >
            Esraa Alnagar
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default ContactMe;
