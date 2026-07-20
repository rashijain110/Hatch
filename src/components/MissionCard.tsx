import Image from "next/image";

export default function MissionCard() {
  return (
        <section>
            
                <div>
                    <h2 className="text-[48px] text-[#5B3FE4] font-semibold flex justify-center">
                        Our Mission
                    </h2>
                    <p className="flex justify-center">
                        To become the default platform where young people achieve goals together.
                    </p>
                </div>
                <div className="flex ">

                    <div className=" mx-auto max-w-314 w-76.25 h-108.75 bg-[#E5F550] mt-20 flex flex-col p-[20px]">

                        <h3 className="text-[32px] font-bold"> Accountability</h3>
                        <p className="mt-1 text-sm ">
                            Commitment to others is stronger than commitment to yourself. It’s easy to break promises to yourself, but much harder to let others down.
                        </p>
                        <Image
                            src="/image/U1.png"
                            alt="Friends Illustration"
                            width={242}
                            height={242}
                            className="mt-[20px]"
                        />
                    </div>
                    
                    <div className=" mx-auto max-w-314 w-76.25 h-108.75 bg-[#4E3FEB] mt-20 flex flex-col p-[20px]">

                        <h3 className="text-[32px] font-bold text-white"> Bond</h3>
                        <p className="mt-1 text-sm">
                            Commitment to others is stronger than commitment to yourself. It’s easy to break promises to yourself, but much harder to let others down.
                        </p>
                        {/* <div className="">
                            <div className="w-44 h-22 bg-[#5B3FE4] rounded-t-full"></div>
                            <div className="w-24 h-24 bg-[#5B3FE4] rounded-tr-full"></div>
                            <div className="w-24 h-24 bg-[#4F39E6] rounded-tl-full"></div>
                        </div>*/}
                        <Image
                            src="/image/U3.png"
                            alt="Friends Illustration"
                            width={242}
                            height={242}
                            className="mt-[20px]"
                        />
                    </div>


                    <div className=" mx-auto max-w-314 w-76.25 h-108.75 bg-[#E5F550] mt-20 flex flex-col p-[20px]">

                        <h3 className="text-[32px] font-bold"> Collective</h3>

                        <p className="mt-1 text-sm">
                            Commitment to others is stronger than commitment to yourself. It’s easy to break promises to yourself, but much harder to let others down.
                        </p>

                        <Image
                            src="/image/U2.png"
                            alt="Friends Illustration"
                            width={242}
                            height={242}
                            className="mt-[20px]"
                        />
                    </div>

                </div>
        </section>
    );
}