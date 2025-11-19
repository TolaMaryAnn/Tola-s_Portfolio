import ThankYouIllustration from "../assets/1763054854683-removebg-preview.png";

function Footer() {
  return (
    <footer className="border-t border-[#C79A7D] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left text-sm sm:text-sm font-medium">
          MaryAnn Omotola | &copy; 2025
        </div>

        <div className="flex items-center gap-2 justify-center sm:justify-end text-sm sm:text-sm font-medium">
          <span>Thank you!</span>
          <img
            src={ThankYouIllustration}
            alt="Thank You"
            className="w-12 h-auto sm:w-12"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
