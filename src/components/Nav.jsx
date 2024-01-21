import { Badge, Button } from '@nextui-org/react'
import { CiShoppingCart, CiUser } from "react-icons/ci";
import React from 'react'
import Link from 'next/link';

export default function Nav() {
    return (
        <header className='py-4 shadow-lg'>
            <div className="container flex flex-wrap justify-between items-center gap-2">
                <Link href={'/'} className="logo md:order-1 font-medium text-3xl">LOGO</Link>
                <div className="search lg:max-w-[600px] md:max-w-[400px] w-full md:order-2 order-3">
                    <input
                        type="search"
                        className='border border-gray-300 rounded-md px-4 py-2 outline-none w-full'
                        placeholder='Search'
                    />
                </div>
                <div className='space-x-4 md:order-3'>
                    <Button href='/cart' as={Link} isIconOnly variant='bordered' className='border-1 border-gray-200 rounded-md'>
                        <Badge content='5' color='primary'>
                            <CiShoppingCart className='text-2xl' />
                        </Badge>
                    </Button>
                    <Button href='/signin' as={Link} variant='bordered' className='border-1 border-gray-200 rounded-md sm:min-w-unit-20 sm:px-unit-md min-w-unit-10 px-0'>
                        <CiUser className='text-2xl !m-0' />
                        <p className='hidden sm:block'>Sign In</p>
                    </Button>
                </div>
            </div>
        </header>
    )
}
