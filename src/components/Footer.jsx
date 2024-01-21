import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaFacebookMessenger, FaInstagram, FaLocationArrow, FaPhoneVolume, FaRegEnvelopeOpen, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='bg-gray-900 py-8 pb-4 mt-8 md:mt-12'>
            <div className='container'>
                <div className="md:flex md:justify-between text-white md:space-y-0 space-y-8">
                    <div className='text-3xl uppercase font-medium'>Logo</div>
                    {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> */}
                    <div>
                        <div className="md:mb-4 mb-3 font-semibold  uppercase">Contact Us</div>
                        <div className="text-sm flex flex-col gap-2">
                            <div className='flex items-center gap-2'>
                                <FaLocationArrow/>
                                Shop-3/1, 2nd Floor (৩য় তলা), Eastern Plaza, Hatirpool, Dhaka
                            </div>
                            <a href={`tel:#`} className='flex items-center gap-2'>
                                <FaPhoneVolume/>
                                +8801751111111
                            </a>
                            <a href={`mailto:#`} className='flex items-center gap-2'>
                                <FaRegEnvelopeOpen/>
                                info@dreamstylebd.com
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="md:mb-4 mb-3 font-semibold  uppercase">Useful Links</div>
                        <div className="text-sm flex flex-col gap-2">
                            <Link href="#" className="hover:underline">Contact</Link>
                            <Link href="#" className="hover:underline">About Us</Link>
                            <Link href="#" className="hover:underline">Privacy Policy</Link>
                            <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                        </div>
                    </div>
                    <div>
                        <div className="md:mb-4 mb-3 font-semibold uppercase">Follow us</div>
                        <div className='flex text-[32px] items-center gap-3'>
                            <FaFacebookF className='cursor-pointer h-40px aspect-square bg-blue-500 rounded-full p-[6px]' />
                            <FaFacebookMessenger className='cursor-pointer h-40px aspect-square bg-blue-500 rounded-full p-[6px]' />
                            <FaInstagram className='cursor-pointer h-40px aspect-square bg-pink-700 rounded-full p-[6px]' />
                            <FaYoutube className='cursor-pointer h-40px aspect-square bg-red-600 rounded-full p-[6px]' />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <hr className="mt-4 border-gray-700 sm:mx-auto lg:mt-8 mb-4" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024 <a href="https://dev-shajid.vercel.app" target='-' className="underline">Shajid</a>. All Rights Reserved.
                    </span>
                    <div>

                    </div>
                </div>
            </div>
        </footer>
    )
}
