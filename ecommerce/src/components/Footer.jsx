import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-6 flex flex-col items-center gap-4">
 
        <p className="text-lg font-bold text-gray-800">Chaithanya Kanipakam</p>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/chaithanya37"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/chaithanya_chaithuu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/chaithanya-kanipakam-3b5751280/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Chaithanya Kanipakam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
