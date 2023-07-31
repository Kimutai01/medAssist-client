import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

import {
  fetchAdverts,
  deleteAdvertsById,
  createAdvertsReset,
  selectAllAdverts,
  getCreatedAdverts,
  getAdvertsError,
  getAdvertsStatus,
  createdNewAdverts,
} from '../features/advertsSlice';

const AdvertList = () => {
  const navigate = useNavigate();
  const adverts = useSelector(selectAllAdverts);
  console.log(adverts);
  const error = useSelector(getAdvertsError);
  const status = useSelector(getAdvertsStatus);
  const dispatch = useDispatch();
  const created = useSelector(getCreatedAdverts);
  console.log(created);

  const fetchAllAdverts = () => {
    dispatch(fetchAdverts());
  };

  useEffect(() => {
    fetchAllAdverts();
  }, []);

  useEffect(() => {
    if (status === 'failed') {
      toast.error(error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  }, [status, error]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteAdvertsById(id));
      toast.success('Product Deleted Successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  const createAdvertsHandler = () => {
    dispatch(createdNewAdverts());
  };

  useEffect(() => {
    if (created && created._id) {
      navigate(`/admin/adverts/${created._id}/edit`);

      dispatch(createAdvertsReset());
    }
  }, [created, navigate, dispatch]);

  return (
    <div className="bg-[#000] pt-20 px-20">
      <ToastContainer />
      <div className="flex justify-between">
        <h1 className="text-[#fff] text-3xl uppercase items-center font-bold mt-10">
          Adverts List
        </h1>
        <button
          className="why-btn ml-40  mt-10 mb-10 "
          type="button"
          onClick={createAdvertsHandler}
        >
          <h1 className="font-bold">Create Adverts</h1>
        </button>
      </div>
      {status === 'loading' && (
        <div className="flex justify-center items-center pt-28 bg-black">
          <div className="w-20 h-20 rounded-full animate-spin border-2 border-solid border-[red] border-t-transparent" />
        </div>
      )}
      <div className="w-full">
        <table className="table-fixed text-[#fff] w-full">
          <thead>
            <tr>
              <th className="w-1/12 ">ID</th>
              <th className="w-1/6">Title</th>
            </tr>
          </thead>
          <tbody>
            {adverts.map((product) => (
              <tr key={product._id} className="border-b border-[#555]">
                <td className="py-2">{product._id}</td>
                <td className="py-2">{product.title}</td>

                <td className="py-2">
                  <Link to={`/admin/adverts/${product._id}/edit`}>
                    <button
                      className="bg-[#ff4d24] text-white px-4 py-2 rounded-lg"
                      type="button"
                    >
                      <h1 className="font-bold">Edit</h1>
                    </button>
                  </Link>
                </td>
                <td className="py-2">
                  <button
                    className="bg-[#ff4d24] text-white px-4 py-2 rounded-lg"
                    type="button"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <h1 className="font-bold">Delete</h1>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvertList;
