import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
  selectShippingAddress,
  saveShippingAddress,
} from '../features/cartSlice';

import CheckoutSteps from '../components/CheckoutSteps';

const Shipping = () => {
  const dispatch = useDispatch();
  const shippingAddress = useSelector(selectShippingAddress);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        city,
        postalCode,
        country,
      }),
    );
    toast.success('Shipping Address Saved', {
      position: 'top-center',
      autoClose: 2000,
    });

    navigate('/payment');
  };
  return (
    <div className="bg-[#000] pt-28">
      <CheckoutSteps step1 step2 />
      <ToastContainer />
      <div className="bg-[#161616] mx-auto w-[30%] px-10 rounded-lg pb-10">
        <h1 className="text-white text-2xl font-bold pt-10 pb-5 text-center">
          Shipping
        </h1>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="address"
              className="text-white mb-3 uppercase font-bold"
              type="text"
            >
              Address
              <input
                type="text"
                id="address"
                required
                name="address"
                value={address || ''}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Your address.."
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="city"
              className="text-white mb-3 uppercase font-bold"
            >
              City
              <input
                type="text"
                required
                id="city"
                name="city"
                value={city || ''}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Your city.."
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="postalCode"
              className="text-white mb-3 uppercase font-bold"
            >
              Postal Code
              <input
                type="text"
                required
                id="postalCode"
                name="postalCode"
                value={postalCode || ''}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Your postal code.."
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="country"
              className="text-white mb-3 uppercase font-bold"
            >
              Country
              <input
                type="text"
                required
                id="country"
                name="country"
                value={country || ''}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Your country.."
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>

        <button
          className="why-btn  w-full mt-10 mb-10 "
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          <h1 className="font-bold">Continue</h1>
        </button>
      </div>
    </div>
  );
};

export default Shipping;
