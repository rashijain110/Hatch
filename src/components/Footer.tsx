import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#4E3FEB] overflow-hidden mt-20">
      <div className="flex">
        {/* Left Section */}
        <div className=" ">
            <Image
                src="/image/Footer.png"
                alt="Hatch Logo"
                width={163}
                height={156}
                className="bg-white w-{223px} h-{239px}"
            />
            <h2 className="text-white text-{24px} font-semibold">
              Find your people, Build your pods
            </h2>
        </div>
      </div>

    </footer>
  );
}