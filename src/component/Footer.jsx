import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin   // ✅ correct spelling
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedin size={24} />   {/* ✅ must match import */}
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <p className="text-sm">
              &copy; 2026 Your Company. All rights reserved.
            </p>
            <p className="text-sm">
              Supportive Partner ❤️ Saurabh
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
