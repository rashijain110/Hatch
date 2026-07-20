import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";


interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamCard({
  name,
  role,
  image,
}: TeamCardProps) {
  return (
    <div className="flex flex-col items-center">

      <div className="relative w-[220px] h-[240px] flex justify-center">
        <div className="absolute top-12 w-[180px] h-[180px] rounded-full border-3 border-[#5B3FE4]" />
        <Image
          src={image}
          alt={name}
          width={180}
          height={220}
          className="absolute bottom-0"
        />
      </div>

      <div className="w-[180px]">

        <h3 className="text-[#5B3FE4] text{24px}">
          {name}
        </h3>

        <p className="text-[#5B3FE4] text-{16px} -mt-2">
          {role}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* <Image
            src="/image/linkedin.png"
            alt="LinkedIn"
            width={16}
            height={16}
          /> */}
          <IoLogoLinkedin className="text-[#5B3FE4] text-{16px}" />
          <button className="text-[#5B3FE4] text-{16px}">
            BIO +
          </button>
        </div>

      </div>

    </div>
  );
}