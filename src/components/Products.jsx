'use client'

import Link from 'next/link'
import BlurImage from './BlurImage'
import ReactStarsRating from 'react-awesome-stars-rating';
import { Skeleton } from '@nextui-org/react';


export default function Products({ products, title }) {
  return (
    <>
      <section>
        <div className="title">{title}</div>
        <div style={{ gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }} className="grid gap-4">
          {
            products.map((product, i) => (
              <div key={i}>
                <Link href={'/product'}>
                  <div className='bg-white h-full flex flex-col relative rounded-md overflow-hidden shadow-sm md:hover:shadow-md duration-150'>
                    <div className='h-full min-w-full w-full !aspect-[1/1] bg-gray-300'>
                      <BlurImage src={product.image} alt="Product Image" id={i} />
                    </div>
                    <div className='p-2 pb-4 flex h-full flex-col justify-between'>
                      <div className="title2 text-sm font-medium">{product.title}</div>
                      <div className="price space-x-2">
                        <span className='font-semibold text-mdd '>Tk {product.price}</span>
                        <span className='text-gray-400 line-through font-light'>{product.oldPrice}</span>
                      </div>
                      <ReactStarsRating
                        className='flex'
                        size={15}
                        value={product.rating}
                        secondaryColor="grey"
                        primaryColor="orange"
                        isEdit={false}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}
