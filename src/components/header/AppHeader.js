import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaGlobe} from 'react-icons/fa';

const AppHeader = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            to='/'
            className='text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
          >
            Brand Name
          </Link>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-gray-400 rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars size={22} color={'gray'} />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-transparent lg:bg-opacity-0 lg:shadow-none' +
            (navbarOpen ? ' block' : ' hidden')
          }
        >
          <ul className='flex flex-col lg:flex-row list-none mr-auto'>
            <li className='flex items-center hover:bg-blueGray-400 cursor-pointer rounded-md'>
              <Link
                className='hover:text-blueGray-700 text-blueGray-300 px-5 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                to='/'
              >
                Link 1
              </Link>
            </li>
            <li className='flex items-center hover:bg-blueGray-400 cursor-pointer rounded-md'>
              <Link
                className='hover:text-blueGray-700 text-blueGray-300 px-5 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                to='/'
              >
                Link 2
              </Link>
            </li>
            <li className='flex items-center hover:bg-blueGray-400 cursor-pointer rounded-md'>
              <Link
                className='hover:text-blueGray-700 text-blueGray-300 px-5 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                to='/'
              >
                Link 3
              </Link>
            </li>
          </ul>
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='flex items-center hover:bg-blueGray-400 cursor-pointer rounded-full px-2'>
              <FaGlobe size={20} color={'#CBD5E1'} />
            </li>
            <li className='flex items-center hover:bg-green-600 cursor-pointer rounded-md lg:ml-3'>
              <Link
                className='hover:text-blueGray-700 text-blueGray-300 px-5 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                to='/signup'
              >
                Register
              </Link>
            </li>
            <li className='flex items-center'>
              <Link
                className='bg-blue-500 text-red-100 hover:text-gray-500 active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                to='/signin'
              >
                <i className='fas fa-arrow-alt-circle-down'></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
