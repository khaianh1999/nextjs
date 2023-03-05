import { useState } from "react";
import Link from "next/link";
function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function showPopupLogin() {
    props.showPopupLogin();
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => toggleMobileMenu()}
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjpAdJfrm4doQRgdWu8oQZ1YmBd80NvG1J5rrAnvfdXIQlzg7geRDijIPIVNsS02wNPFJn_ZIwUPkXIuVdMP7wC0LBJbHIgmsqOK524xmUxbSopfw_qLOfYxKFnmQtvNFCNpWPaiFCCGAScs_Qz0STv8AGY-lWEY6lySRB-NlfXBaO9R1IuSsnRIlUr6g"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjpAdJfrm4doQRgdWu8oQZ1YmBd80NvG1J5rrAnvfdXIQlzg7geRDijIPIVNsS02wNPFJn_ZIwUPkXIuVdMP7wC0LBJbHIgmsqOK524xmUxbSopfw_qLOfYxKFnmQtvNFCNpWPaiFCCGAScs_Qz0STv8AGY-lWEY6lySRB-NlfXBaO9R1IuSsnRIlUr6g"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div>
            <span className="text-white cursor-pointer hidden md:inline-block" onClick={() => showPopupLogin()}>Đăng nhập</span>
          </div>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
