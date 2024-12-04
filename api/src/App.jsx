import React, { useState, useEffect } from "react";

const GET_PRODUCTS = "http://localhost:5000/products";

const SkeletonCard = () => (
  <div className="card p-6 border border-gray-300 rounded-lg w-full bg-white mb-6 flex flex-col h-[400px]">
    <div className="w-[80%] h-[30px] bg-gray-300 rounded mb-4" />
    <div className="w-[40%] h-[25px] bg-gray-300 rounded mb-4" />
    <div className="flex-grow bg-gray-300 rounded-lg mb-4" />
    <div className="w-[60%] h-[25px] bg-gray-300 rounded" />
  </div>
);

const ProductCard = ({ product }) => (
  <div className="card p-6 border border-gray-300 rounded-lg w-full bg-white mb-6 grid grid-cols-1">
    <h3 className="data__name text-black text-4xl font-semibold leading-[49px] m-0">
      <a href={`product.html?id=${product.id}`} className="hover:text-blue-500">
        {product.name}
      </a>
    </h3>
    <h3 className="data__price text-gray-500 text-xl font-semibold m-0">
      {product.price} y.e.
    </h3>
    <div className="flex-grow">
      <img
        className="data__img w-full h-[200px] object-cover rounded-lg p-2"
        src={product.image}
        alt={product.name}
      />
    </div>
    <div className="data__description mt-4">
      <h3 className="data__category text-black text-lg font-semibold leading-[49px] m-0">
        {product.description}
      </h3>
    </div>
  </div>
);

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(GET_PRODUCTS);
        const body = await res.json();
        if (body && body.data) {
          setProducts(body.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container w-full max-w-[1200px] mx-auto px-4 py-8">
      <div className="products__wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default App;
