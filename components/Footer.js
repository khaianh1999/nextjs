function Footer() {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold text-white mb-2">About Us</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ultrices blandit mi, vel commodo mi blandit eget. Nunc ac tellus
              eu nisi rhoncus fringilla.
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold text-white mb-2">Contact Us</h2>
            <p className="text-gray-400">
              123 Main Street
              <br />
              New York, NY 10001
              <br />
              (555) 555-5555
              <br />
              email@example.com
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="text-lg font-bold text-white mb-2">Follow Us</h2>
            <div className="flex items-center">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-square text-white text-2xl"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-twitter-square text-white text-2xl"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram-square text-white text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;