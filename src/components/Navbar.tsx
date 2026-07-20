import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return(

            <div>
                <div className="flex justify-center text-sm py-1 bg-[#E5F550]">Beta Launching Feb 7  •  1,890 people waiting</div>
                <div className="mx-auto max-w-[1256px] px-12 pt-[20px]">
                    <nav className="bg-[#5B3FE4] rounded-xl flex items-center justify-between p-[10px]  ">
                    <div>
                        {/* Logo */}
                        <Link href="/">
                            <Image
                                src='/image/logo.png'
                                alt="Hatch"
                                width={87.19}
                                height={30}
                            />
                        </Link>
                    </div>

                    <div className="flex items-center gap-11 text-white font-semibold text-sm">
                        {/* About Discovery Features Contact */}
                        <Link href="#" >
                            About
                        </Link>
                        <Link href="#">
                            Discovery
                        </Link>
                        <Link href="#">
                            Features
                        </Link>
                        <Link href="#">
                            Contact
                        </Link>
                        <button className="bg-white text-black px-4 rounded-lg h-full text-sx border-2 font-bold">
                            LOGIN
                        </button>
                    </div>
                </nav>
                </div>
                
            </div>
    )
}