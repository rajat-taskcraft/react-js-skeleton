import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-datepicker/dist/react-datepicker.css';
import 'react-circular-progressbar/dist/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignIn } from 'Containers/pageListAsync';
import { Dashboard, Home, NotFound } from 'Containers/pageListAsync';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <ToastContainer
        className={
          'lg:w-[500px] text-16 font-semibold w-[320px] p-0 !font-poppins'
        }
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={3}
      />
    </Fragment>
  );
};

export default App;
