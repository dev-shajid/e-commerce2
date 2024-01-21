'use client'

import { NextUIProvider } from "@nextui-org/react"

export default function NextUiProvider({children}) {
  return (
    <NextUIProvider className="min-h-[100vh] flex flex-col">
        {children}
    </NextUIProvider>
  )
}
