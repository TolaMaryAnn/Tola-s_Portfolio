import { FaEnvelope, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import ContactIllustration from "../assets/1763054783764-removebg-preview.png";

function Contact() {
  return (
    <section className="relative py-16 sm:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-[#C79A7D] mb-8 text-lg sm:text-xl">
            Got a project we could work on together?
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-12">
            <a
              href="mailto:your-email@example.com"
              className="bg-deepMocha hover:bg-primaryBrown p-6 sm:p-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: "#4E3629" }}
            >
              <FaEnvelope
                className="text-goldenBrown text-4xl sm:text-7xl"
                style={{ color: "#D9A066" }}
              />
            </a>

            <a
              href="https://twitter.com/yourprofile"
              className="bg-deepMocha hover:bg-primaryBrown p-6 sm:p-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: "#4E3629" }}
            >
              <FaTwitter
                className="text-goldenBrown text-4xl sm:text-7xl"
                style={{ color: "#D9A066" }}
              />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              className="bg-deepMocha hover:bg-primaryBrown p-6 sm:p-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: "#4E3629" }}
            >
              <FaLinkedinIn
                className="text-goldenBrown text-4xl sm:text-7xl"
                style={{ color: "#D9A066" }}
              />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end w-full lg:w-auto mb-10 lg:mb-0">
          <img
            src={ContactIllustration}
            alt="Contact Illustration"
            className="contact-shake w-3/4 sm:w-2/3 max-w-xs sm:max-w-sm lg:max-w-md h-auto"
            style={{ transformOrigin: "top left" }}
          />
        </div>
      </div>

      <style>
        {`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
        .contact-shake {
          animation: shake 1s infinite;
        }
        `}
      </style>
    </section>
  );
}

export default Contact;
