import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { addItemsToCart } from '../features/cartSlice';
import {
  getProductsStatus,
  getProductsError,
  selectAllProducts,
  fetchProducts,
} from '../features/productsSlice';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState('S');

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const error = useSelector(getProductsError);
  const status = useSelector(getProductsStatus);
  const { id } = useParams();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }

    if (status === 'failed') {
      toast.error(error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  }, [status, dispatch]);

  const product = products.find((product) => product._id === parseInt(id));

  const addToCartHandler = () => {
    console.log(id, qty, size);
    dispatch(addItemsToCart(id, qty, size));
    navigate(`/cart/${id}?qty=${qty}`);
  };

  if (status === 'loading' || !product) {
    return (
      <div className="flex justify-center items-center pt-28 bg-black">
        <div className="w-20 h-20 rounded-full animate-spin border-2 border-solid border-[red] border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      <div className="pt-28 bg-black ">
        <ToastContainer />
        <button
          className="bg-[#ff4d23] ml-40 mb-10 text-white font-bold text-2xl px-5 py-2 rounded-lg"
          type="button"
        >
          <Link to="/">Go Back</Link>
        </button>
        <div className="bg-[#000] px-40 pb-20 flex">
          <div className="mr-20 w-[50%]">
            <img
              src={`http://127.0.0.1:8000/${product.image}`}
              alt={product.name}
              className=" w-full rounded-t-lg"
            />
          </div>
          <div className="bg-[#161616] w-[50%] rounded-lg p-8">
            <h1 className="text-white text-3xl font-bold uppercase">
              {product.name}
            </h1>

            <div>
              <p className="text-[#ff4d23] font-bold text-2xl">
                {' '}
                {product.price}
                {' '}
                ksh
              </p>
            </div>

            <p className="mt-5 text-[grey] font-medium">
              {product.description}
            </p>
            <div className="flex border-[#ff4d23] border-2 justify-between px-3  mt-5 w-3/4">
              <p className="text-[grey] font-bold text-2xl">Status :</p>
              <p className="text-[grey] font-bold text-2xl">
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
            <div className="flex border-[#ff4d23] border-2 justify-between px-3 mt-5 w-3/4">
              <p className="text-[grey] font-bold text-2xl">Size :</p>
              <p className="text-[grey] font-bold text-2xl">
                <select
                  className="bg-[#161616] text-[#ff4d23] font-bold text-2xl outline-none focus:outline-none"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </p>
            </div>
            {product.countInStock > 0 && (
              <div className="flex border-[#ff4d23] border-2 justify-between px-3 mt-5 w-3/4">
                <p className="text-[grey] font-bold text-2xl">Qty :</p>
                <p className="text-[grey] font-bold text-2xl">
                  <select
                    className="bg-[#161616] text-[#ff4d23] font-bold text-2xl outline-none focus:outline-none"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
            )}
            <div className="flex justify-center mt-5">
              <button
                onClick={addToCartHandler}
                type="button"
                className="bg-[#ff4d23] text-[#161616] font-bold text-2xl px-10 py-3 rounded-lg uppercase"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
