import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="px-4">
      <img
          src="https://i.pinimg.com/564x/a4/c9/ff/a4c9ff7cd3d80fdb6f77024f2e316b8e.jpg"
          alt="Product 1"
          className="w-full h-64 object-cover"
        />
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="px-4">
      <img
          src="https://i.pinimg.com/564x/a4/4d/92/a44d92b5a25ba5dcf8a91df4530ca13f.jpg"
          alt="Product 1"
          className="w-full h-64 object-cover"
        />
        <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="px-4">
      <img
          src="https://i.pinimg.com/564x/82/bb/bf/82bbbffb0ee24320a2d8c4e7a35e9ea3.jpg"
          alt="Product 1"
          className="w-full h-64 object-cover"
        />
        <p className="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="px-4">
      <img
          src="https://i.pinimg.com/564x/24/f5/1d/24f51dd5fd67bbba02c175f0f9d2ff4f.jpg"
          alt="Product 1"
          className="w-full h-64 object-cover"
        />
        <p className="text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="px-4">
      <img
          src="https://i.pinimg.com/564x/fd/0b/59/fd0b599c31a67c56b0cdfa672904f360.jpg"
          alt="Product 1"
          className="w-full h-64 object-cover"
        />
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="px-4">
      <img
          src="https://i.pinimg.com/564x/7a/da/0c/7ada0c2f7ab0ed68cfd5b9e934a11db5.jpg"
          alt="Product 1"
          className="w-full h-64 object-cover"
        />
        <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </Slider>
  );
}


export default MySlider;