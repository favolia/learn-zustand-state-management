import React, { forwardRef } from 'react'
import { cn } from '../libs/utils';
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    'flex justify-center items-center rounded-md font-medium text-white transition duration-300 ease-in-out',
    {
        variants: {
            variant: {
                primary: 'bg-white text-black shadow-xl shadow-gray-300 hover:bg-gray-300',
                success: 'bg-green-600 shadow-xl shadow-green-300 hover:bg-green-800',
                safe: 'bg-blue-600 shadow-xl shadow-blue-300 hover:bg-blue-800',
                warning: 'bg-yellow-600 shadow-xl shadow-yellow-300 hover:bg-yellow-800',
                danger: 'bg-red-600 shadow-xl shadow-red-300 hover:bg-red-800',
            },
            size: {
                sm: 'w-12 px-3 py-1 text-sm',
                md: 'w-20 py-2 px-3',
                lg: 'w-20 px-5 py-2 text-md',
                xl: 'px-6 text-xl'
            }
        },
        defaultVariants: {
            variant: 'safe',
            size: 'md'
        }
    }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (
            <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
        )
    }
)

export { Button, buttonVariants }