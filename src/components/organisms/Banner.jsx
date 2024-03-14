const Banner = () => {
  return (
    <section className="bg-gray-900 relative pt-20 pb-20 px-8">
      <div className="max-w-256 mx-auto grid grid-cols-3 items-center px-8 lg:px-0">
        <div className="col-span-2 text-white">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">
            <span className="block mb-1">Welcome to</span>
            <span className="text-cyan-500 text-4xl lg:text-6xl">
              Online shop
            </span>
          </h1>
          <p className="text-lg">Find your favorite products</p>
        </div>
        <div className="max-w-xs">
          <img
            src="https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-find-favorite-product-png-image_11470344.png"
            alt="add to cart"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
