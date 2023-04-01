import React from 'react'
import Logo from "/public/panaverse-logo.png"
import Image from 'next/image'
import Link from 'next/link'
import Wraper from '@/components/shared/Wraper'

export default function Header() {
    return (
        <header className='sticky top-0 z-10 bg-white'>
            <Wraper>
                <div className='flex items-center mx-auto justify-between py-4'>
                    {/* Logo */}
                    <div>
                        <Image src={Logo} alt='logo'></Image>
                    </div>
                    {/* Navigation bar */}
                    <ul className='flex space-x-4'>
                        <li>
                            <Link href={"/"}>   Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/courses"}>  Courses
                            </Link>
                        </li>
                    </ul>
                </div>
            </Wraper>
        </header>
    )
}
