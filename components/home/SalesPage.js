function SalesPage() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-10">Winter Sale</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/e0/8b/ee/e08beeff55dee8d60eb54ed1c45484bc.jpg"
                alt="Product 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Product 1</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between">
                  <span className="text-lg font-bold">$49.99</span>
                  <button className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/5b/31/93/5b31935acba0de84e3725e657bc36997.jpg"
                alt="Product 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Product 2</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between">
                  <span className="text-lg font-bold">$79.99</span>
                  <button className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/f6/3c/5f/f63c5f3e4c13ff55c42123cfe46ba9cb.jpg"
                alt="Product 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Product 3</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between">
                  <span className="text-lg font-bold">$99.99</span>
                  <button className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPage;
