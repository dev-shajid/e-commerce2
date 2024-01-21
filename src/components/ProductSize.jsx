'use client'

import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

export default function ProductSize() {
    const [size, setSize] = useState(0)
    return (
        <div className='flex gap-4 items-center'>
            <p className='font-semibold text-sm'>Size: </p>
            {
                ['m', 'l', 'xl', 'xll'].map((item, i) => (
                    <Button
                        key={i}
                        isIconOnly
                        className={`capitalize border-1 rounded-md font-medium ${i == size ? 'bg-gray-800 text-white' : ''}`}
                        variant={`${i == size ? 'solid' : 'bordered'}`}
                        onClick={() => setSize(i)}
                    >
                        {item}
                    </Button>
                ))
            }
        </div>
    )
}
