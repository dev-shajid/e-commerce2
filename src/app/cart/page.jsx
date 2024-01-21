import BlurImage from '@/components/BlurImage';
import ProductQuantity from '@/components/ProductQuantity';
import { Button } from '@nextui-org/react';
import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default async function Cart() {
    return (
        <section className='container'>
            <h1 className="md:mb-10 mb-4 mt-6 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg w-full space-y-2">
                    {
                        [1, 2, 3].map((product, i) => (
                            <div className='rounded-md flex items-center gap-4 bg-white px-4 py-2 shadow-md'>
                                <div className='max-w-[80px] rounded-md overflow-hidden'>
                                    <BlurImage src="/jersy/1.jpg" alt="product-image" className="" />
                                </div>
                                <div className="flex justify-between flex-1">
                                    <div className=''>
                                        <div className='font-semibold'>Nike Air Max 2019</div>
                                        <div><span className='font-medium text-sm'>Size: </span> Xl</div>
                                        <div className='scale-[.7] origin-left'>
                                            <ProductQuantity />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end space-y-2'>
                                        <RxCross2 className='cursor-pointer' />
                                        <div className="text-lg font-medium">৳490</div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>


                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 lg:max-w-[350px] md:max-w-[300px] w-full">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">৳129.99</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">৳4.99</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">৳134.98 BDT</p>
                        </div>
                    </div>
                    <Button className="mt-4 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</Button>
                </div>
            </div>
        </section>
    )
}
