import Image from "next/image";
import MissionCard from "./MissionCard";

export default function MissionSection() {
  return (
    <section className="py-{170px}">

      <div className="text-center">
        <h2 className="text-[48px] font-semibold text-[#5B3FE4]">
          Our Mission
        </h2>

        <p className="mt-4 text-{16px}">
            To become the default platform where young people achieve goals together.        
        </p>
      </div>

      <div className="flex justify-center gap-20 mt-16">

        <MissionCard
          title="Accountability"
          description="Commitment to others is stronger than commitment to yourself. It’s easy to break promises to yourself, but much harder to let others down."
          bgColor="bg-[#E5F550]"
          textColor="text-black"
        >
          <Image
            src="/image/U1.png"
            alt="Accountability"
            width={242}
            height={242}
            className="w-{242px} h-{242px}"
          />
        </MissionCard>

        <MissionCard
          title="Bond"
          description="The strongest relationships are built through shared struggle.  What you go through together creates connections that actually last."
          bgColor="bg-[#4E3FEB]"
          textColor="text-white"
        >
          <Image
            src="/image/U3.png"
            alt="Bond"
            width={242}
            height={242}
            className="w-{242px} h-{242px}"
          />
        </MissionCard>

        <MissionCard
          title="Collective"
          description="Small groups outperform individuals. Always. 
          4–6 people who know each other will beat one motivated individual, every time."
          bgColor="bg-[#E5F550]"
          textColor="text-black"
        >
          <Image
            src="/image/U2.png"
            alt="Collective"
            width={242}
            height={242}
            className="w-{242px} h-{242px}"
          />
        </MissionCard>

      </div>
    </section>
  );
}