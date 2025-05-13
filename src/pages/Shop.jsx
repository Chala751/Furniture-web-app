import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'


export default function Shop() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => {
        const furniture = data.products.filter(product =>
          product.category.toLowerCase().includes('furniture') ||
          ['sofa', 'chair', 'table', 'bed', 'couch', 'desk', 'bench'].some(keyword =>
            product.title.toLowerCase().includes(keyword)
          )
        )
        setProducts(furniture)
      })
  }, [])

  // Filtered products based on search input
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search)
  )

  return (
    <section className="bg-[#F1E0C6] min-h-screen max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#6B4F3C] mb-6 text-center">
        Explore Our Furniture Collection
      </h2>

      {/* Search Input */}
      <div className="relative max-w-md mx-auto mb-8">
  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B4F3C]" size={18} />
  <input
    type="text"
    placeholder="Search furniture..."
    className="w-full pl-10 pr-4 py-2 border border-[#6B4F3C] rounded focus:outline-none focus:ring-2 focus:ring-[#6B4F3C]"
    onChange={(e) => setSearch(e.target.value.toLowerCase())}
  />
</div>


      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.slice(0, visibleCount).map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover cursor-pointer"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#6B4F3C]">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description.slice(0, 50)}...
                </p>
                <p className="font-bold text-[#6B4F3C] text-lg">${product.price}</p>
                <p className="text-sm text-yellow-600 font-medium">⭐ {product.rating} / 5</p>
                <button className="mt-3 w-full bg-[#6B4F3C] text-white text-sm py-2 rounded hover:bg-[#5a3f30] transition cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <div className="text-center mt-10">
          <button
            className="bg-[#6B4F3C] text-white py-2 px-6 rounded hover:bg-[#5a3f30] transition"
            onClick={() => setVisibleCount(visibleCount + 6)}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}
