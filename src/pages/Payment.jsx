import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate, redirect } from 'react-router-dom';

import {
  selectShippingAddress,
  savePaymentMethod,
} from '../features/cartSlice';

import CheckoutSteps from '../components/CheckoutSteps';

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shippingAddress = useSelector(selectShippingAddress);
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  if (!shippingAddress.address) {
    redirect('/shipping');
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };
  return (
    <div className="pt-28 bg-[#000]">
      <CheckoutSteps step1 step2 step3 />
      <div className="bg-[#161616] mx-auto w-[40%] px-10 rounded-lg pb-10">
        <h1 className="text-white text-3xl uppercase font-bold pt-10 pb-5 text-center">
          Payment Method
        </h1>
        <div className="items-center">
          <label
            className="text-white font-bold gap-5 text-2xl "
            htmlFor="method"
          >
            select Method
            <select
              name="method"
              id="method"
              className="bg-[#161616] ml-4  text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="PayPal">PayPal</option>
              <option value="Stripe">Stripe</option>
              <option value="Mpesa">Mpesa</option>
            </select>
          </label>
        </div>

        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <button
            className="why-btn  w-full mt-10 mb-10 "
            type="submit"
            onClick={(e) => submitHandler(e)}
          >
            <h1 className="font-bold">Continue</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
