'use client';
import Image from 'next/image';
import Link from 'next/link';


 const About_us = () => {
    return (
    <div class="flex flex-col-reverse sm:flex-row justify-between gap-3.5 bg-[#FFFDD0] text-[#013220]">
    <div class="order-2 sm:order-1 sm:w-2/4 sm:mt-12 sm:ml-12 mt-12 ml-3 mr-3 text-justify">
        <h2 class="mb-5 text-4xl font-semibold font-mono">About Monique Coco</h2>
        <p class="text-base italic">
            In the vibrant and culturally rich land of Benue, Nigeria, there emerged a trailblazing and visionary fashion designer named Monique Chanel Coco. Born into the heart of West Africa, Monique's remarkable journey in the world of fashion began amidst the rhythmic beats of traditional Benue music and the kaleidoscope of vibrant colors that painted her homeland. Growing up in a community that passionately celebrated diversity, Monique found inspiration in the rich tapestry of fabrics worn during festive occasions.
            The intricate patterns and the bold, vivacious colors of traditional Nigerian attire not only fueled her imagination but also kindled a profound and unwavering passion for design within Monique. From these early influences, she embarked on a creative odyssey, crafting her unique style that harmonizes the essence of her heritage with a contemporary flair. Monique Chanel Coco stands as a testament to the fusion of tradition and innovation, creating fashion that transcends boundaries and celebrates the beauty of cultural diversity.
        </p>
        <div class="mt-8 flex justify-start items-start">
            <Link href="/contact">
                <p class="bg-[#013220] text-[#FFFDD0] px-6 py-2 transition-all duration-300 border hover:text-black hover:border-black hover:bg-[#f9f9f9]">Contact</p>
            </Link>
        </div>
    </div>
    <div class="order-1 sm:order-2 w-full sm:w-auto">
        <Image
            src="/img/about.jpg"
            alt="rating"
            width={500}
            height={400} 
        />
    </div>
    </div>
)
 }

 export default About_us;