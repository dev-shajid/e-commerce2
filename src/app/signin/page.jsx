'use client'

import useApi from '@/hook/useApi';
import { Button, input } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";

export default function SigIn() {
    const { isLoading, apiLogin } = useApi()
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({ email: "shajid@gmail.com", password: "12345", })

    function handleChange(e) {
        setUserInfo(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    return (
        <section className="container">
            <div className="flex flex-col items-center justify-center mx-auto mt-8">
                <div className="w-full bg-light rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-dark dark:border-bdark-1">
                    <div className="space-y-4 md:space-y-6 sm:p-8 px-4 py-8">
                        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Log in to your account
                        </h1>
                        <Button className='google_button'>
                            <FcGoogle className='text-2xl' />
                            Sign in with Goole
                        </Button>
                        <div className='flex gap-3 font-medium items-center text-gray-400'>
                            <hr />
                            or
                            <hr />
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={(e) => apiLogin(userInfo,e)}>
                            <div>
                                <label htmlFor="email">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="abc@company.com"
                                    required
                                    onChange={handleChange}
                                    value={userInfo.email}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="******"
                                    required
                                    onChange={handleChange}
                                    value={userInfo.password}
                                />
                            </div>
                            <Button
                                type='submit'
                                className='w-full rounded-md'
                                color='primary'
                                isLoading={isLoading}
                            >
                                Sing in
                            </Button>
                            <div>
                                <div className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?
                                    <Link href='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </div>
                                <div className="flex items-center justify-center">
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
