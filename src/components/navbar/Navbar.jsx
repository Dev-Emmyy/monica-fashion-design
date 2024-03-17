"use client";
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
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return(
        <div className="relative">
            <div className="flex justify-between items-center px-10 py-3 bg-[#013220] font-sans sticky top-0 z-10 border-black-300">
                <div>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        priority
                    />
                </div>
                <div className="text-[#FFFDD0] flex justify-between items-center text-lg font-medium font-dancing w-full sm:w-2/6">
                    <button onClick={toggleMenu} className="sm:hidden">Menu</button>
                </div>
            </div>
            <div className={`fixed top-0 right-0 h-full w-full bg-[#013220] text-white transition-transform duration-300 sm:transform-none ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full">
                    <button onClick={toggleMenu} className="absolute top-0 right-0 m-4">X</button>
                    {links.map(link => (
                        <Link key={link.id} href={link.url} legacyBehavior>
                            <a className="py-2">{link.title}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
