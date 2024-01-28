import BlurImage from '@/components/BlurImage'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import ProductSize from '@/components/ProductSize';
import ProductQuantity from '@/components/ProductQuantity';

export default async function Product() {
    return (
        <section className='container space-y-8'>
            <div className='flex flex-col md:flex-row justify-center gap-4 mt-8 p-4 md:p-8 border border-blight-1 dark:border-bdark-1 rounded-md shadow-md'>
                <div className="flex-1 flex justify-center items-center">
                    <div className='overflow-hidden rounded-md'>
                        <BlurImage
                            src={'/jersy/1.jpg'}
                            alt={'Title'}
                        />
                    </div>
                </div>
                <div className="flex-1 space-y-4">
                    <div>
                        <div className="title">Times Premium Detergent Powder - Buy 500gm & Get 500gm Free</div>
                        <div className="text-sm space-x-2">
                            <span className='font-semibold'>Category:</span>
                            <Link href={''} className='text-blue-500'>Jersy</Link>
                        </div>
                    </div>
                    <div className='flex mt-4 gap-2 items-center'>
                        <p className='font-semibold text-sm'>Price: </p>
                        <div className="font-bold text-lg md:text-xl">৳2,000</div>
                        <del className="text-sm self-end text-gray-500">৳3500</del>
                    </div>

                    <ProductSize />
                    <ProductQuantity />

                    <Button className='rounded-md font-medium px-6 bg-gray-800 dark:bg-gray-700' variant='solid'>
                        Add to Cart
                    </Button>

                    <div className='flex items-center gap-3 text-gray-500'>
                        <p>Share: </p>
                        <div className='w-80px cursor-pointer aspect-square bg-blue-500 rounded-full'>
                            <FaFacebookF className='p-[6px] text-3xl text-white' />
                        </div>
                        <div className='w-80px cursor-pointer aspect-square bg-blue-500 rounded-full'>
                            <FaTwitter className='p-[6px] text-3xl text-white' />
                        </div>
                    </div>

                </div>
            </div>


            <div className='p-4 md:p-8 border border-blight-1 dark:border-bdark-1 rounded-md shadow-md'>
                <div className="title">Description</div>
                <div className='mt-4'>
                    <p>⭕ স্পেশাল দাওয়াহ কম্বো⭕</p>
                    <p>🟢 স্যাম্পল টিশার্ট/জার্সি দেখতে ভিজিট করুন-</p>
                    <p>🟢 এই স্পেশাল দাওয়াহ কম্বোতে যা যা থাকছে-——————————</p>
                    <p>– ১০টি আতর</p>
                    <p>– ১টি টিশার্ট/জার্সি</p>
                    <p>– ১টি আফগানী টুপি</p>
                    <p>– ১২টি দুয়া স্টিকার</p>
                    <p>সর্বমোট রেগুলার প্রাইস – ৯৫০/-</p>
                    <p>🔸 ডিভাইসের ব্রাইটনেস, ফটোগ্রাফির সময় আলোর রিফ্লেকশান, ফটো এডিটিং ইত্যাদি কারণে ছবির সাথে বাস্তবের খুব সামাণ্য পার্থক্য থাকতে পারে।</p>
                </div>
            </div>
        </section>
    )
}
