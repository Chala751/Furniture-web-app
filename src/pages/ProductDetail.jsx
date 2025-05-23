import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../componentes/ui/button'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
   const { addToCart } = useCart()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

   const handleAddToCart = (product) => {
    addToCart(product)
    toast.success(`${product.title} added to cart!`) // Optional toast
  }

  if (!product) {
    return (
      <section className="bg-[#F1E0C6] min-h-screen flex items-center justify-center">
        <p className="text-center text-gray-600 text-lg">Loading product details...</p>
      </section>
    )
  }

  return (
    <section className="bg-[#F1E0C6] min-h-screen  mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-[50%] rounded-lg shadow-lg object-cover"
        />

        {/* Product Details */}
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-[#6B4F3C]">{product.title}</h2>
          <p className="text-gray-700 text-lg">{product.description}</p>

          <div className="space-y-2 pt-2">
            <p className="text-xl text-[#6B4F3C] font-semibold">Price: ${product.price}</p>
            <p className="text-yellow-600 font-medium">⭐ {product.rating} / 5</p>
            <p className="text-sm text-gray-600">Category: <span className="font-medium capitalize">{product.category}</span></p>
            <p className="text-sm text-gray-600">Brand: <span className="font-medium">{product.brand}</span></p>
            <p className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
            </p>
          </div>

          <button onClick={() => handleAddToCart(product)} className="mt-4 bg-[#6B4F3C] text-white py-2 px-6 rounded hover:bg-[#5a3f30] transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>

      {/* More Images */}
      {product.images?.length > 1 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#6B4F3C] mb-4">More Images</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index + 1}`}
                className="w-full h-40 object-cover rounded shadow hover:scale-[1.02] transition"
              />
            ))}
          </div>
        </div>
      )}
      <Link to="/shop">
        <Button className="bg-[#6B4F3C] text-white hover:bg-[#5A3F30] px-6 py-2 cursor-pointer mr-0 mt-5">
           Shop Now
        </Button>
      </Link>
    </section>
  )
}
