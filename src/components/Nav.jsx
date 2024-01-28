'use client'

import { Avatar, Badge, Button } from '@nextui-org/react'
import { CiShoppingCart, CiUser } from "react-icons/ci";
import React from 'react'
import Link from 'next/link';
import useApi from '@/hook/useApi';

export default function Nav() {
    const { apiLogout, isLoading } = useApi()

    return (
        <header className='py-4 shadow-md dark:bg-dark dark:text-white border-b border-gray-200 dark:border-gray-800'>
            <div className="container flex flex-wrap justify-between items-center gap-2">
                <Link href={'/'} className="logo md:order-1 font-medium text-3xl">LOGO</Link>
                <div className="search lg:max-w-[600px] md:max-w-[400px] w-full md:order-2 order-3">
                    <input
                        type="search"
                        className='border border-blight-1 dark:border-bdark-1 dark:bg-dark-2 focus:shadow-md rounded-md px-4 py-2 outline-none w-full'
                        placeholder='Search'
                    />
                </div>
                <div className='space-x-4 md:order-3 flex items-center'>
                    <Button href='/cart' as={Link} isIconOnly className='border-1 bg-transparent hover:bg-light-2 hover:dark:bg-dark-2 border-blight-1 dark:border-bdark-1 rounded-md'>
                        <Badge content='5' color='primary'>
                            <CiShoppingCart className='text-2xl' />
                        </Badge>
                    </Button>
                    <Button href='/signin' as={Link} variant='bordered' className='border-1 hover:bg-light-2 hover:dark:bg-dark-2 border-blight-1 dark:border-bdark-1 rounded-md sm:min-w-unit-20 sm:px-unit-md min-w-unit-10 px-0'>
                        <CiUser className='text-2xl !m-0' />
                        <p className='hidden sm:block'>Sign In</p>
                    </Button>
                    <Button isLoading={isLoading} onClick={apiLogout} variant='bordered' className='border-1 hover:bg-light-2 hover:dark:bg-dark-2 border-blight-1 dark:border-bdark-1 rounded-md sm:min-w-unit-20 sm:px-unit-md min-w-unit-10 px-0'>
                        <p className='hidden sm:block'>Logout</p>
                    </Button>
                    <Button href='/profile' isIconOnly className='rounded-full bg-none border border-blight-1 dark:border-bdark-1' as={Link}>
                        <Avatar showFallback name='Jane' src='https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

                    </Button>
                </div>
            </div>
        </header>
    )
}
