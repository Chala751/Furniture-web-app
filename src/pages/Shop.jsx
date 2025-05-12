import React, { useEffect, useState } from 'react'

export default function Shop() {
  const [products, setProducts] = useState([])

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


  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#6B4F3C] mb-8 text-center">
        Explore Our Furniture Collection
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#6B4F3C]">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description.slice(0, 100)}...
                </p>
                <p className="font-bold text-[#6B4F3C] text-lg">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
