import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

import {
  fetchNews,
  deleteNewsById,
  createNewNews,
  createNewsReset,
  selectAllNews,
  getCreatedNews,
  getNewsError,
  getNewsStatus,
} from '../features/newsSlice';

const ProductList = () => {
  const navigate = useNavigate();
  const news = useSelector(selectAllNews);
  const error = useSelector(getNewsError);
  const status = useSelector(getNewsStatus);
  const dispatch = useDispatch();
  const created = useSelector(getCreatedNews);

  const fetchAllNews = () => {
    dispatch(fetchNews());
  };

  useEffect(() => {
    fetchAllNews();
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
      dispatch(deleteNewsById(id));
      toast.success('Product Deleted Successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  const createNewsHandler = () => {
    dispatch(createNewNews());
  };

  useEffect(() => {
    if (created && created._id) {
      navigate(`/admin/news/${created._id}/edit`);

      dispatch(createNewsReset());
    }
  }, [created, navigate, dispatch]);

  return (
    <div className="bg-[#000] pt-20 px-20">
      <ToastContainer />
      <div className="flex justify-between">
        <h1 className="text-[#fff] text-3xl uppercase items-center font-bold mt-10">
          News List
        </h1>
        <button
          className="why-btn ml-40  mt-10 mb-10 "
          type="button"
          onClick={createNewsHandler}
        >
          <h1 className="font-bold">Create News</h1>
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
            {news.map((product) => (
              <tr key={product._id} className="border-b border-[#555]">
                <td className="py-2">{product._id}</td>
                <td className="py-2">{product.title}</td>

                <td className="py-2">
                  <Link to={`/admin/news/${product._id}/edit`}>
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

export default ProductList;
