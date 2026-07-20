import TeamCard from "./Teamcard";

const teamMembers = [
  {
    name: "Samarth Matta",
    role: "Founder & CEO",
    image: "/image/samarth.png",
  },
  {
    name: "Ritik Bhushan",
    role: "Tech Lead",
    image: "/image/ritik.png",
  },
  {
    name: "Nilanjan Singh",
    role: "Full Stack Developer",
    image: "/image/nilan.png",
  },
  {
    name: "Nadeem Ashraf",
    role: "Product Designer",
     image: "/image/ritik.png",
  },
  {
    name: "Rohain Aluakh",
    role: "Product Designer",
    image: "/image/nilan.png",
  },
  {
    name: "Tanisha Rajpurohit",
    role: "Brand Designer",
    image: "/image/samarth.png",
  },
  {
    name: "Veer Pratap Singh",
    role: "Algorithm Creator",
    image: "/image/nilan.png",
  },
  {
    name: "Kausar",
    role: "Motion Animator",
     image: "/image/ritik.png",
  },
  {
    name: "Nitesh Kumar",
    role: "Co-founding Team",
    image: "/image/samarth.png",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24">

      <div className="text-center">
        <h2 className="text-[70px] font-black uppercase text-black">
          MEET THE
        </h2>

        <h2 className="text-[82px] font-black uppercase italic text-[#5B3FE4] -mt-10">
          HATCHERS
        </h2>
      </div>

      <div className="grid grid-cols-3 ">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>

    </section>
  );
}
