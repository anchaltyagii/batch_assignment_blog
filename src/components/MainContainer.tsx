'use client';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BlogBody from './BlogBody';

const MainContainer = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <BlogBody searchValue={searchValue} />
      <Footer />
    </div>
  );
};

export default MainContainer;
