'use client';
import Image from 'next/image';
import Link from 'next/link';


 const Collections = () => {
    return (
    <div class="bg-[#FFFDD0]">
     <div class="py-9 px-7">
      <div class="flex flex-col sm:flex-row gap-8 mb-9"> 
        <div class="flex flex-col sm:flex-row shadow-lg shadow-gray-800">
        <div class="w-full sm:w-auto mb-4 sm:mb-0">
            <Image
            src="/collections_img/pink_gown/pink gown.jpg"
            alt="collections"
            width={300}
            height={400}
            class="rounded"
            />
        </div>
        <div class="w-full sm:w-auto">
            <Image
            src="/collections_img/pink_gown/pink gown 2.jpg"
            alt="collections"
            width={300}
            height={400}
            class="rounded" 
            />
        </div>
       </div>


         <div class="flex flex-col sm:flex-row shadow-lg shadow-gray-800">
         <div class="w-full sm:w-auto mb-4 sm:mb-0">
            <Image
            src="/collections_img/blue_gown/blue gown.jpg"
            alt="collections"
            width={300}
            height={400}
            class="rounded" 
            />
            </div>

            <div class="w-full sm:w-auto">
                <Image
                src="/collections_img/blue_gown/blue gown 2.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded" 
                 />
            </div>
            </div>
            </div>

         <div class="flex flex-col sm:flex-row gap-8 mb-9">
         <div class="flex flex-col sm:flex-row shadow-lg shadow-gray-800">
            <div class="w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                src="/collections_img/hips_gown/hips gown.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded" 
                />
            </div>
            <div class="w-full sm:w-auto">
                <Image
                src="/collections_img/hips_gown/hips gown 2.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
                </div>
                </div>

         <div class="flex flex-col sm:flex-row shadow-lg shadow-gray-800">
            <div class="w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                src="/collections_img/mixed_gown/mixed gown.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded" 
                />
                </div>
            <div class="w-full sm:w-auto">
                <Image
                src="/collections_img/mixed_gown/mixed gown 2.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>
           </div>
         </div>

         <div class="flex flex-col sm:flex-row gap-8 mb-9">
         <div class="flex flex-col sm:flex-row shadow-lg shadow-gray-800">
            <div class="w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                src="/collections_img/green_gown/green gown.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>

            <div class="w-full sm:w-auto">
                <Image
                src="/collections_img/green_gown/green gown 2.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>
         </div>

         <div class="flex flex-col sm:flex-row shadow-lg shadow-gray-800">
            <div class="w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                src="/collections_img/yellow_gown/yellow gown.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>
            <div class="w-full sm:w-auto">
                <Image
                src="/collections_img/yellow_gown/yellow gown 2.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>
         </div>
         </div>

         <div class="flex flex-col sm:flex-row gap-8">
         <div class="flex flex-col sm:flex-row shadow-lg shadow-gray-800">
            <div class="w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                src="/collections_img/zebra_gown/zebra gown.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>
            <div class="w-full sm:w-auto">
                <Image
                src="/collections_img/zebra_gown/zebra gown.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>
         </div>

         <div class="flex flex-col sm:flex-row shadow-lg shadow-gray-800">
            <div class="w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                src="/collections_img/white_gown/white gown.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>
            <div class="w-full sm:w-auto">
                <Image
                src="/collections_img/white_gown/white gown 2.jpg"
                alt="collections"
                width={300}
                height={400}
                class="rounded"
                />
            </div>
         </div>
         </div>
       </div>
       </div>
    )
 }

 export default Collections;