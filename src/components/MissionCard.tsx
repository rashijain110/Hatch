// import Image from "next/image";

// export default function MissionCard() {
//   return (
//         <section>
            
//                 <div>
//                     <h2 className="text-[48px] text-[#5B3FE4] font-semibold flex justify-center">
//                         Our Mission
//                     </h2>
//                     <p className="flex justify-center">
//                         To become the default platform where young people achieve goals together.
//                     </p>
//                 </div>
//                 <div>
//                     {/* card1 */}
//                     <div className=" mx-auto max-w-314 w-76.25 h-108.75 bg-[#E5F550] mt-20 flex flex-col items-center">

//                         <h3 className="text-[32px] font-bold"> Accountability</h3>

//                         <p className="mt-5 text-sm">
//                             Commitment to others is stronger than commitment to yourself. It’s easy to break promises to yourself, but much harder to let others down.
//                         </p>

//                         {/* <div className="">
//                             <div className="w-44 h-22 bg-[#5B3FE4] rounded-t-full"></div>

//                             <div className="w-24 h-24 bg-[#5B3FE4] rounded-tr-full"></div>
                                
//                             <div className="w-24 h-24 bg-[#4F39E6] rounded-tl-full"></div>
//                         </div>*/}
//                         <Image
//                             src="/image/U1.png"
//                             alt="Friends Illustration"
//                             width={242}
//                             height={242}
//                         />
//                     </div>
                    

//                 </div>
//         </section>
//     );
// }







import { ReactNode } from "react";

interface MissionCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  children: ReactNode;
}

export default function MissionCard({
  title,
  description,
  bgColor,
  textColor,
  children,
}: MissionCardProps) {
  return (
    <div
      className={`w-[305px] h-[435px] ${bgColor} p-4 flex flex-col justify-between`}
    >
      <div>
        <h3 className={`text-{32px} font-semibold ${textColor}`}>
          {title}
        </h3>

        <p className={`text-{16px} mt-{20px} leading-5 ${textColor}`}>
          {description}
        </p>
      </div>

      <div className="flex justify-center mt-{20px}">
        {children}
      </div>
    </div>
  );
}