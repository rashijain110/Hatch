import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-[#4E3FEB] mt-20">
            <div className="flex">

                <div className=" ">
                    <Image
                        src="/image/Footer.png"
                        alt="Hatch Logo"
                        width={223}
                        height={239}
                        className="bg-[#F6FAFD]"
                    />
                    <h2 className="text-white text-[24px] font-semibold">
                        Find your people, Build your pods
                    </h2>
                    <p className="text-[14px] text-white mt-6">© 2026 Hatch, All rights reserved.</p>
                </div>
            </div>
        </footer>
  ); 
} 