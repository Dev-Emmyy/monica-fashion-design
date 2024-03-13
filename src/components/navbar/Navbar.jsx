import React from "react";
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
    return(
       <div class="flex justify-between items-center px-10 py-3 bg-[#013220] font-sans sticky top-0 z-10 border-black-300 h-full">
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
            {
             links.map(link => (
                <Link key={link.id} href={link.url}>{link.title}</Link>
             ))
            }
        </div>
       </div>
    )
}

export default Navbar;