'use client';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <div class="bg-[url('/img/Bg_5.jpg')]  bg-cover bg-center bg-no-repeat bg-center bg-local h-screen relative"></div>
      <div>
        <div class="flex flex-row justify-between gap-7"> 
          <div class="w-2/5 bg-[#000000] text-[#f9f9f9] font-dancing flex flex-row justify-between items-center ">
            <h2 class="text-5xl pl-16">Our Story</h2>
          </div>
          <div class="w-3/5 p-5">
           <div class="pt-8">
           <p class="text-justify font-dancing text-lg">
            In the vibrant and culturally rich land of Benue, Nigeria, there emerged a trailblazing fashion designer named Monique Chanel Coco. 
            Born into the heart of West Africa, Monique's journey in the world of fashion began with the rhythmic beats of traditional Benue music and the vibrant colors of her homeland.
            Growing up in a community that celebrated diversity, Monique was inspired by the kaleidoscope of fabrics worn during festive occasions. 
            The intricate patterns and bold colors of traditional Nigerian attire fueled her imagination and kindled a passion for design.
            </p>
           </div>
           <div class="mt-8 flex justify-end items-end">
           <Link href="">
            <p class="bg-[#000000] text-[#f9f9f9] px-6 py-2 transition-all duration-300 border hover:text-black hover:border-black hover:bg-[#f9f9f9]">Read More</p>
            </Link>
           </div>
          </div>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  )
}
