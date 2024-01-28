'use client'

import React, { useState } from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import { Button } from '@nextui-org/react'

export default function ProductQuantity() {
    const [value, setValue] = useState(1)
    return (
        <div className='flex gap-4 items-center'>
            <div className='flex'>
                <Button onClick={()=>setValue(e=>e>1?e-1:e)} isIconOnly className='rounded-md rounded-r-none'>
                    <FiMinus />
                </Button>
                <input
                    type='text'
                    className='max-w-[40px] h-[40px] bordser outline-none bg-[#D4D4D8] dark:bg-[#3F3F45] text-center'
                    value={value}
                    onChange={(e) => {
                        let x = e.target.value
                        if ((x>=0 && x<=9) || !x) setValue(Number(x))
                    }}
                    onBlur={()=>!value && setValue(1)}
                />
                <Button onClick={()=>setValue(e=>e<9?e+1:e)} isIconOnly className='rounded-md rounded-l-none'>
                    <FiPlus />
                </Button>
            </div>
            {false && <p className='text-gray-400 text-sm font-light'>(Stock Out)</p>}
        </div>
    )
}
