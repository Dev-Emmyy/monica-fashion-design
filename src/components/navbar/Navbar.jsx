'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
    {
       id: 1,
       title: "Home",
       url: "/"
   },
   {
       id: 2,
       title: "About Us",
       url: "/about-us"
   },
   {
       id: 3,
       title: "Collections",
       url: "/collections"
   },
   {
       id: 4,
       title: "Contact",
       url: "/contact"
   },
]


const Navbar = () => {

    const [isClick,setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    }
    return(
       <div className="bg-[#013220] sticky top-0 z-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-32">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        
                        priority
                    />
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-4">
                    {
                    links.map(link => (
                        <Link key={link.id} href={link.url} className="text-[#FFFDD0] text-lg font-medium font-dancing hover:bg-[#FFFDD0] hover:text-[#013220] rounded-lg p-2">{link.title}</Link>
                    ))
                    }
                    </div>
                </div>
                <div className="md:hidden items-center">
                    <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus-ring-white" onClick={toggleNavbar}>
                        {
                            isClick ? (
                                <svg
                                className="h-6 w-6"
                                xmlns="http://www/w3/org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                className="h-6 w-6"
                                xmlns="http://www/w3/org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
        {isClick && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {
                    links.map(link => (
                        <Link key={link.id} href={link.url} className="block  text-[#FFFDD0] text-lg font-medium font-dancing hover:bg-[#FFFDD0] hover:text-[#013220] rounded-lg p-2">{link.title}</Link>
                    ))
                    }
                </div>
            </div>
        )}
       </div>
    )
}

export default Navbar;





