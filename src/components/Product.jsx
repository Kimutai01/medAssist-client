import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => (
  <div key={product.id} className="bg-[#161616] rounded-lg">
    <Link to={`/product/${product._id}`}>
      <img
        src={`https://api.lipiangoma.co.ke/${product.image}`}
        alt={product.name}
        className="h-72 w-full rounded-t-lg"
      />
      <div className="p-6">
        <h2 className="text-white text-3xl font-bold uppercase">
          {product.name}
        </h2>

        <div>
          <p className="text-[#ff4d23] font-bold text-2xl">
            {" "}
            {product.price} ksh
          </p>
        </div>
        <p className="mt-5 text-[grey] font-medium">{product.description}</p>
      </div>
    </Link>
  </div>
);

export default Product;
