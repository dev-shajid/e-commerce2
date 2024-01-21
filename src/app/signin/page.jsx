import { Button, input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default async function SigIn() {
    return (
        <section className="container">
            <div className="flex flex-col items-center justify-center mx-auto mt-8">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="space-y-4 md:space-y-6 sm:p-8 px-4 py-8">
                        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Log in to your account
                        </h1>
                        <Button
                            className='w-full rounded-md font-medium border border-[#0003] bg-gray-100 hover:bg-gray-300'
                        >
                            <FcGoogle className='text-2xl' />
                            Sign in with Goole
                        </Button>
                        <div className='flex gap-3 font-medium items-center text-gray-400'>
                            <hr className="w-full border-gray-300 dark:border-gray-700" />
                            or
                            <hr className="w-full border-gray-300 dark:border-gray-700" />
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md outline-none focus:ring-1 focus:ring-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                    placeholder="abc@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="******"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md outline-none focus:ring-1 focus:ring-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                />
                            </div>
                            <Button
                                type='submit'
                                className='w-full rounded-md'
                                color='primary'
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