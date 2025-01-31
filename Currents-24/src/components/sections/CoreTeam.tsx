import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
    <div className="relative flex flex-col items-center p-6 bg-black rounded-lg">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-pink-500">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-orbitron text-white mb-1">{member.name}</h3>
      <p className="text-pink-500">{member.role}</p>
    </div>
  </div>
);

const CoreTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "member 1",
      role: "Core 1",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "member 2",
      role: "Core 2",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Member 3",
      role: "core 3",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Member 4",
      role: "core 4",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "member 5",
      role: "Core 5",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },{
      name: "member 6",
      role: "Core 6",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
  ];

  return (
    <section id="core-team" className="py-20 min-h-screen flex items-center bg-black/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center mb-16">
          Core Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;