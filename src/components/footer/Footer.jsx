import React from "react";
import Link from "next/link";


const Footer = () => {
    return (
        <div class=" bg-[#013220] text-[#FFFDD0] flex flex-col sm:flex-row items-center justify-between gap-20 py-16 px-12 w-full">
            <div class="w-full sm:w-2/6">
                <h2 class="font-semibold font-mono italic">
                   Monique Coco Fashion Design leads the way so embrace elegance and define your essence.
                </h2>
            </div>

            <div class="w-full sm:w-2/6 font-mono flex flex-col content-center justify-between gap-3">
                <h2 class="text-xl font-semibold">BAUCHI</h2>
                <div>
                    <p class="underline">moniquecocofashion24@gmail.com</p>
                    <p>+234 9034573549</p>
                    <p>No 5 Hd Plaza, Ahmadu Bello Way, Bauchi, Nigeria.</p>
                </div>
                <Link href="https://www.google.com/maps/place/Hd+Plaza/@10.3149836,9.8135128,17z/data=!3m1!4b1!4m6!3m5!1s0x1054d735b46b6955:0xad5ff581091b0adf!8m2!3d10.3149783!4d9.8160877!16s%2Fg%2F11t9k65_hq?entry=ttu" target="blank">
                    <p class="text-xl font-semibold underline">
                    SEE ON MAP
                    </p>
                </Link>
            </div>

            <div class="w-full sm:w-2/6 font-mono flex flex-col content-center justify-between gap-6">
                <h2 class="text-xl font-semibold">FOLLOW US ON</h2>
                <div class="flex flex-col content-center justify-between gap-5">
                    <Link href="">
                        <p class="underline">
                        Facebook
                        </p>
                    </Link>
                    <Link href="https://www.instagram.com/moniquecocochanel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank">
                        <p class="underline">
                        Instagram 
                        </p>
                    </Link>
                    <Link href="">
                        <p class="underline">
                        Tiktok
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;