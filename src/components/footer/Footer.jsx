import React from "react";
import Link from "next/link";


const Footer = () => {
    return (
        <div class=" bg-[#013220] text-[#FFFDD0] flex items-center justify-between gap-5 py-16 px-12 w-full">
            <div class="w-2/6">
                <h2 class="font-semibold font-mono f italic">
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
                <Link href="https://l.instagram.com/?u=https%3A%2F%2Fmaps.app.goo.gl%2FMURYtBKeaHxx9fts5&e=AT1EiAkyysMB3rO_LqzWmNXJxhLY2dIn8V5s63UtGy1WLZghT4mfLecA6Di7U6SlkD8_fQbpfvvbe_ONcoS2fOf72_CmvGIpZWK0mw8" target="blank">
                    <p class="text-xl font-semibold underline">
                    SEE ON MAP
                    </p>
                </Link>
            </div>

            <div class="font-mono flex flex-col content-center justify-between gap-6">
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