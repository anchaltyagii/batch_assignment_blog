'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { featuredData, recentPostData } from '@/utils/constant';
import { BlogItem } from '@/utils/types';
import styles from '../app/styles/styles.module.css';
import moment from 'moment';

type Props = {
  searchValue: string;
};

const BlogBody = ({ searchValue }: Props) => {
  const [viewAll, setViewAll] = useState<boolean>(false);
  const [recentData, setRecentData] = useState<BlogItem[]>(recentPostData);

  const ViewAllFn = () => setViewAll(!viewAll);

  const filteredData = recentData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
      ) ||
      item.content.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredFeaturedData = featuredData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.content.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div
        className='container mx-auto py-12 px-6 lg:px-0'
        style={{ background: 'lightCyan' }}
      >
        <section className='mb-12 lg:px-20'>
          <div className='flex justify-between cursor-pointer'>
            <h2 className='text-2xl font-bold mb-4'>Recent Posts</h2>
            <h6 style={{ color: '#60a5fa' }} onClick={ViewAllFn}>
              {filteredData.length > 0 && (viewAll ? 'View Less' : 'View All')}
            </h6>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
            {filteredData.length > 0 ? (
              !viewAll ? (
                filteredData?.slice(0, 2).map((item, key) => {
                  return (
                    <div
                      className={`bg-white shadow-md p-4 ${styles.hoverEffect}`}
                      key={key}
                    >
                      <h3 className='font-bold text-lg'>{item.title}</h3>
                      <p className='text-gray-600'>{`${moment(item.date).format(
                        'DD MMM YYYY'
                      )}  | ${item.tags.map((tags) => tags)}`}</p>
                      <p className='mt-2'>{item.content}</p>
                    </div>
                  );
                })
              ) : (
                filteredData.map((item, key) => {
                  return (
                    <div className='bg-white shadow-md p-4' key={key}>
                      <h3 className='font-bold text-lg'>{item.title}</h3>
                      <p className='text-gray-600'>{`${moment(item.date).format(
                        'DD MMM YYYY'
                      )} | ${item.tags.map((tags) => tags)} `}</p>
                      <p className='mt-2'>{item.content}</p>
                    </div>
                  );
                })
              )
            ) : (
              <>No Recent Post found!</>
            )}
          </div>
        </section>
      </div>

      {/* Featured Works */}
      <main
        className='container mx-auto py-12 px-6 lg:px-0'
        style={{ background: 'white' }}
      >
        <section className='lg:px-20'>
          <h2 className='text-2xl font-bold mb-4'>Featured Works</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
            {filteredFeaturedData.length > 0 ? (
              filteredFeaturedData?.map((item, key) => {
                return (
                  <div
                    className={`bg-white shadow-md p-4 md:flex lg:flex gap-5 ${styles.hoverEffect}`}
                    key={key}
                  >
                    <Image
                      src={item.image}
                      alt='dashboard'
                      width={200}
                      height={150}
                      className='text-center w-full md:w-auto lg:w-auto'
                    />
                    <div>
                      <h3 className='font-bold text-lg'>{item.title}</h3>
                      <div className='flex gap-5 mt-3'>
                        <p className='bg-[#000] text-white text-sm flex items-center px-2 rounded-3xl'>
                          {moment(item.date).format('yyyy')}
                        </p>
                        <p className='text-gray-600'>{item.hint}</p>
                      </div>
                      <p className='mt-2'>{item.content}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <>No Featured Post found!</>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogBody;
