import Image from "next/image";

const teamMembers = [
    {
        name: "Arthur Dupont",
        role: "CEO",
        description:
            "Arthur est le cœur et l'âme de ClickEtPaf. Avec plus de 10 ans d'expérience dans l'industrie des jeux en ligne, il guide notre équipe vers l'excellence.",
        image: "/images/ceo.webp",
        alt: "Image de CEO"
    },
    {
        name: "Clarisse Faure",
        role: "Responsable Marketing",
        description:
            "Clarisse supervise nos stratégies marketing, s'assurant que ClickEtPaf attire et fidélise une communauté de joueurs passionnés.",
        image: "/images/marketing.webp",
        alt: "Image du marketing"
    },
    {
        name: "Gaby Langlois",
        role: "Développeur Principal",
        description:
            "Gaby est responsable de la conception et de l'amélioration de notre plateforme, s'assurant qu'elle reste intuitive et performante.",
        image: "/images/dev.webp",
        alt: "Image de développement"
    },
];

export default function Team() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-6 text-blue-700 pt-5">
                Rencontrez l'Équipe
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src={member.image}
                                alt={member.alt}
                                width={100}
                                height={100}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-yellow-500">{member.name}</h3>
                        <p className="text-white font-medium">{member.role}</p>
                        <p className="text-gray-400 mt-2">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
