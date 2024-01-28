'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function useApi() {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setError] = useState(false)
    const router = useRouter()

    axios.defaults.baseURL = 'https://shajid-store.vercel.app'

    async function apiLogin(credentials, e) {
        let loadingPromise = toast.loading("Loading...")
        e.preventDefault()
        try {
            setIsLoading(true)
            const res = await axios.post('https://shajid-store.vercel.app/api/auth/login', credentials)
            if (res.status == 200) {
                toast.success(res.data.message, { id: loadingPromise })
                router.push('/')
            } else {
                toast.error(res?.response?.data?.error || "Some error arised", { id: loadingPromise })
            }
        } catch (error) {
            console.log(error)
            return error?.response?.data
        }
        finally {
            setIsLoading(false)
        }
    }

    async function apiRegister(credentials, e) {
        let loadingPromise = toast.loading("Loading...")
        e.preventDefault()
        try {
            setIsLoading(true)
            const res = await axios.post('https://shajid-store.vercel.app/api/auth/register', credentials)
            if (res.status == 200) {
                toast.success(res.data.message, { id: loadingPromise })
                router.push('/')
            } else {
                toast.error(res?.response?.data?.error || "Some error arised", { id: loadingPromise })
            }

        } catch (error) {
            console.log(error?.response?.data)
            return error?.response?.data
        }
        finally {
            setIsLoading(false)
        }
    }

    async function apiLogout() {
        let loadingPromise = toast.loading("Loading...")
        try {
            setIsLoading(true)
            const res = await axios.get('https://shajid-store.vercel.app/api/auth/logout')
            if (res.status == 200) {
                toast.success(res.data.message, { id: loadingPromise })
                router.push('/')
            } else {
                toast.error(res?.response?.data?.error || "Some error arised", { id: loadingPromise })
            }

        } catch (error) {
            console.log(error?.response?.data)
            return error?.response?.data
        }
        finally {
            setIsLoading(false)
        }
    }


    return {
        isLoading,
        isError,
        apiLogin,
        apiRegister,
        apiLogout,
    }
}
