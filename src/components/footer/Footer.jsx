import React from "react";
import Link from "next/link";


const Footer = () => {
    return (
        <div class="mt-6 bg-[#000000] text-[#f9f9f9] flex items-center justify-between gap-5 py-16 px-12 w-full">
            <div class="w-2/6">
                <h2 class="font-semibold font-mono  italic">
                   Monique Coco Fashion Design leads the way so embrace elegance and define your essence.
                </h2>
            </div>

            <div class="w-2/6 font-mono flex flex-col content-center justify-between gap-3">
                <h2 class="text-xl font-semibold">BAUCHI</h2>
                <div>
                    <p class="underline">moniquecocofashion24@gmail.com</p>
                    <p>+234 9034573549</p>
                    <p>No 5 Hd Plaza, Ahmadu Bello Way, Bauchi, Nigeria.</p>
                </div>
                <Link href="">
                    <p class="text-xl font-semibold underline">
                    SEE ON MAP
                    </p>
                </Link>
            </div>

            <div class="font-mono flex flex-col content-center justify-between gap-6">
                <h2 class="text-xl font-semibold">FOLLOW US ON</h2>
                <div class="flex flex-col content-center justify-between gap-5">
                    <Link href="">
                        <p class="">
                        Facebook
                        </p>
                    </Link>
                    <Link href="">
                        <p class="">
                        Instagram 
                        </p>
                    </Link>
                    <Link href="">
                        <p class="">
                        Tiktok
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;