'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  searchValue: string;
  setSearchValue: Function;
};

const Header = ({ searchValue, setSearchValue }: Props) => {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <>
      <nav className='bg-white shadow-md'>
        <div className='container mx-auto flex justify-end items-center py-4 px-12'>
          <input
            placeholder='Search title, tags...'
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
            className='p-2 me-3 rounded-md border-2 outline-none border-slate-100'
          />
          <div className='text-lg font-bold hidden lg:block'>
            <ul className='flex flex-wrap md:flex-nowrap space-x-4 font-semibold'>
              <li className='text-black cursor-pointer font-medium text-2xl hover:text-red-500 dark:text-white dark:hover:text-red-500'>
                <Link href='/work'>Works</Link>
              </li>
              <li className='text-black cursor-pointer font-medium text-2xl hover:text-red-500  dark:text-white dark:hover:text-red-500'>
                <Link href='/'>Blog</Link>
              </li>
              <li className='text-black cursor-pointer font-medium text-2xl hover:text-red-500 dark:text-white dark:hover:text-red-500'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

          <div className='block lg:hidden'>
            <button
              className='flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400'
              onClick={() => setShowToggle(!showToggle)}
            >
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
        </div>

        {showToggle && (
          <>
            <div className='font-medium'>
              <ul
                className='flex items-center justify-center flex-wrap md:flex-nowrap space-x-4'
                style={{ background: 'lightGray' }}
              >
                <li className='text-black cursor-pointer font-medium text-2xl hover:text-red-500 dark:text-white dark:hover:text-red-500 font-semibold'>
                  <Link href='/work'>Works</Link>
                </li>
                <li className='text-black cursor-pointer font-medium text-2xl hover:text-red-500  dark:text-white dark:hover:text-red-500'>
                  <Link href='/'>Blog</Link>
                </li>
                <li className='text-black cursor-pointer font-medium text-2xl hover:text-red-500 dark:text-white dark:hover:text-red-500'>
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>

      <header className='bg-white shadow-md py-12'>
        <div className='container mx-auto text-center px-6 lg:px-20 lg:flex lg:flex-row-reverse md:flex md:flex-row-reverse'>
          <div className='relative w-32 h-32 lg:w-56 lg:h-56 mx-auto'>
            <Image
              src='/profilePic.jpg'
              alt='Profile Picture'
              className='rounded-full'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='text-start'>
            <h1 className='text-3xl lg:text-5xl font-semibold mt-4 leading-10'>
              Hi, I am John, <br /> Creative Technologist
            </h1>
            <p className='text-gray-600 mt-8 mx-auto max-w-screen-sm'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className='bg-red-500 text-white px-6 py-2 rounded-sm mt-7'>
              <a href='/Anchal_Tyagi_Resume.pdf' download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
