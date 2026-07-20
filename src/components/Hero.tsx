import Image from "next/image";
import { Fredoka } from "next/font/google";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1256px] px-12 pt-20 ">
      <div className="flex items-center justify-between">

        {/* Left Content */}
        <div>

          <p className="text-gray-700 text-lg mb-2">
            Who we are
          </p>

          <h1 className="text-[#5B3FE4] text-6xl max-w-186.5 font-extrabold ">
            Real friends who actually show up
          </h1>

          <p className="text-gray-700 text-2xl  mt-8 max-w-[746px]">
            Hatch is a social platform for Gen Z built around real accountability — small groups, shared goals, and the kind of friendships that come from actually doing things together.G
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-10">

            <button className="bg-[#5B3FE4]  text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-4">

              Find Your Pod

            </button>

            <button className="bg-[#EFFF43] text-black px-10 py-4 rounded-xl font-semibold border border-gray-400">
              See How It Works
            </button>

          </div>

        </div>

        {/* Right Image */}

          <Image
            src="/image/hero.png"
            alt="Friends Illustration"
            width={493}
            height={554}
          />

      </div>
    </section>
  );
}