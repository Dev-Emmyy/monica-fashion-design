'use client';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <div class="bg-[url('/img/main_bg.webp')] -my-20 bg-contain bg-center bg-no-repeat bg-center bg-local min-h-screen relative"></div>
      <div>
        <div class="flex flex-row justify-between items-center gap-7"> 
          <div class="w-2/5 bg-[#000000] text-[#f9f9f9] h-56 font-dancing flex flex-row justify-between items-center ">
            <h2 class="text-4xl pl-10">Our Story</h2>
          </div>
          <div class="w-3/5 p-5">
            <p class="text-justify font-dancing text-">
            In the vibrant and culturally rich land of Benue, Nigeria, there emerged a trailblazing fashion designer named Monique Chanel Coco. 
            Born into the heart of West Africa, Monique's journey in the world of fashion began with the rhythmic beats of traditional Benue music and the vibrant colors of her homeland.
            Growing up in a community that celebrated diversity, Monique was inspired by the kaleidoscope of fabrics worn during festive occasions. 
            The intricate patterns and bold colors of traditional Nigerian attire fueled her imagination and kindled a passion for design.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
