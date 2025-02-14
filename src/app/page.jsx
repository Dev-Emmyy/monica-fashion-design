'use client';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <div class="bg-[url('/img/Main_bg.jpg')] bg-cover bg-center bg-no-repeat bg-local h-screen relative"></div>
      <div class="flex flex-col justify-between h-full">
      <div class="bg-[#FFFDD0] sm:flex flex-row justify-between gap-7 p-5"> 
      <div class="w-full sm:w-2/5 p-6 bg-[#013220] text-[#f9f9f9] font-dancing flex flex-row justify-between items-center ">
        <h2 class="text-5xl pl-16 text-[#FFFDD0]">Our Story</h2>
      </div>
      <div class="w-full sm:w-3/5 p-5">
        <div class="pt-8">
          <p class="text-justify font-dancing text-lg text-[#013220]">
            In the vibrant and culturally rich land of Benue, Nigeria, there emerged a trailblazing fashion designer named Monique Chanel Coco. 
            Born into the heart of West Africa, Monique&apos;s journey in the world of fashion began with the rhythmic beats of traditional Benue music and the vibrant colors of her homeland.
            Growing up in a community that celebrated diversity, Monique was inspired by the kaleidoscope of fabrics worn during festive occasions. 
          </p>
        </div>
        <div class="mt-8 flex justify-end items-end">
          <Link href="/about-us">
            <p class="bg-[#013220] text-[#FFFDD0] px-6 py-2 transition-all duration-300 border hover:text-black hover:border-black hover:bg-[#f9f9f9]">Read More</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
 </div>
  )
};
