import Image from "next/image";


export default function AboutSection() {
  return (
        <section className="py-[120px] flex justify-center px-12">
            <div className=" max-w-7xl">
                {/* story */}
                <div className=" flex justify-between items-center gap-16">
                    <div>
                        <h2 className="text-[48px] text-[#5B3FE4] mb-20 font-semibold">
                            Our Story
                        </h2>
                        <div className="flex flex-col gap-5  leading-tight">
                        <p className="text-[24px]">
                            We built Hatch because of something we kept seeing: people with real ambition, real goals, and real drive — grinding alone, losing momentum, and eventually giving up. Not because they weren't motivated. Because motivation alone has never been enough.
                        </p>
                        <p className="text-[24px]">
                            The science on this is clear. People achieve more in small committed groups than they do alone. The most effective systems ever built for human growth — recovery communities, military training, the study groups that actually work — all run on the same principle: you show up for others, and others show up for you.
                        </p>
                        </div>
                    </div>

                        <Image
                        src="/image/Frame 425.png"
                        alt="Our Story"
                        width={550}
                        height={325}
                        className="w-[550p] h-[325] "
                        />
                        
                    
                </div>
            </div>
        </section>
    );
}