'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white shadow-md py-4 mt-12'>
      <div className='container mx-auto text-center'>
        <div className='mt-4'>
          <a
            href='https://x.com/'
            target='_blank'
            className='text-gray-600 mx-2'
          >
            Twitter
          </a>
          <a
            href='https://www.linkedin.com/in/anchaltyagi/'
            target='_blank'
            className='text-gray-600 mx-2'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/anchaltyagii'
            target='_blank'
            className='text-gray-600 mx-2'
          >
            GitHub
          </a>
          <p className='text-gray-600'>Copyright © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
