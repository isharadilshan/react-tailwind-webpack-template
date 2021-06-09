import React from 'react';
import {FaTwitter, FaFacebook, FaDribbble, FaGithub} from 'react-icons/fa';

const AppFooter = () => {
  return (
    <footer className='relative bg-blueGray-200 pt-8 pb-6'>
      <div className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'></div>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-center lg:text-left'>
          <div className='w-full lg:w-6/12 px-4'>
            <h4 className='text-3xl font-semibold'>{"Let's keep in touch!"}</h4>
            <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className='mt-6 lg:mb-0 mb-6'>
              <button
                className='bg-white text-blue-300 shadow-lg font-normal h-10 w-10 items-center px-2 rounded-full outline-none focus:outline-none mr-2'
                type='button'
              >
                <FaTwitter size={20} />
              </button>
              <button
                className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center px-2 rounded-full outline-none focus:outline-none mr-2'
                type='button'
              >
                <FaFacebook size={20} />
              </button>
              <button
                className='bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center px-2 rounded-full outline-none focus:outline-none mr-2'
                type='button'
              >
                <FaDribbble size={20} />
              </button>
              <button
                className='bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center px-2 rounded-full outline-none focus:outline-none mr-2'
                type='button'
              >
                <FaGithub size={20} />
              </button>
            </div>
          </div>

          <div className='w-full lg:w-6/12 px-4'>
            <div className='flex flex-wrap items-top mb-6'>
              <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                  Media
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Media 1
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Media 2
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Media 3
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Media 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                  Useful Links
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                  Other Resources
                </span>
                <ul className='list-unstyled'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-gray-400 font-semibold block pb-2 text-sm'
                      href='#'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 border-blueGray-300' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-sm text-blueGray-500 font-semibold py-1'>
              Copyright © {new Date().getFullYear()}{' '}
              <a href='#' className='text-blueGray-500 hover:text-gray-400'>
                Copyright
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
