import Image from "next/image";

export default function MissionCard() {
  return (
    <section className="mx-auto max-w-314 px-12 pt-20 flex flex-col gap-20">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-[48px] text-[#5B3FE4] font-semibold">
          Our Mission
        </h2>
        <p className="">
          To become the default platform where young people achieve goals
          together.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="  bg-[#E5F550] flex flex-col items-center gap-5 p-5 max-w-76.25">
    <div className="flex flex-col gap-5 px-2.5 max-w-61.25">
        <h2 className="text-3xl font-semibold">Accountability</h2>
        <p className="text-base ">Commitment to others is stronger than commitment to yourself. It’s easy to break promises to yourself, but much harder to let others down.</p>
    </div>
          <Image
            src="/image/U1.png"
            alt="Friends Illustration"
            width={242}
            height={242}
            className="w-60.5 h-60.5"
          />
        </div>

      </div>
    </section>
  );
}
