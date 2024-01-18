import React from 'react';
import BannerImg from 'Components/Layout/BannerImg';
import { CustomButton, InputCustom } from 'Components';

const SignIn = () => {
  return (
    <div className="w-full h-[700px] min-h-screen">
      <div className="user-login-left">
        <div className="bg-white">
          <div className="max-w-[400px]  mx-auto pt-16 pb-6">
            <header className="text-center">
              <h4 className="font-semibold text-25 mb-2">Welcome</h4>
              <p className="text-primary-gray text-14">
                orem Ipsum is simply dummy text of the printing
              </p>
            </header>
            <form className="flex flex-col gap-3 my-4">
              <div className="my-4 text-center flex flex-col gap-4">
                <InputCustom
                  type="text"
                  label="Email"
                  labelClassName={'label'}
                  name={'email'}
                  className=""
                  placeholder={'Enter your email'}
                />
                <InputCustom
                  type="password"
                  label="Password"
                  labelClassName={'label'}
                  name={'password'}
                  className=""
                  placeholder={'Enter your password'}
                />
                <CustomButton className={'btn-black'} type={'submit'}>
                  Submit
                </CustomButton>
                <p className="text-primary-gray text-13">
                  If you are a customer wishing to book a service
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BannerImg />
    </div>
  );
};

export default SignIn;
