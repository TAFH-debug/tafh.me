import {Icons} from "@/components/icons";

export const data = {
    about: "Full-stack web developer with interest in ML & Gamedev. IOAI 25' Silver medalist. Love being silly.",
    experience: [
        {
            img: "/nfactorial.jpg",
            title: "nFactorial School",
            content: "Software Developer",
            time: "Jan 2026 - Present"
        }
    ],
    education: [
        {
            img: "/pusan.jpg",
            title: "Pusan National University",
            content: "Undergraduate studies.",
            time: "Sept 2025 - July 2029"
        },
        {
            img: "/nfactorial.jpg",
            title: "nFactorial Incubator",
            content: "Startup incubator.",
            time: "June 2024 - August 2024"
        },
        {
            img: "/nspm.jpg",
            title: "National School of Physics and Maths",
            content: "Physics, Informatics, AI.",
            time: "Sept 2020 - June 2025"
        }
    ],
    socials: [
        {
            icon: Icons.github,
            href: "https://github.com/TAFH-debug"
        },
        {
            icon: Icons.linkedin,
            href: "https://www.linkedin.com/in/talim-aushakhman-5a2194225/"
        },
        {
            icon: Icons.email,
            href: "mailto:aushahman2007@gmail.com"
        }
    ],
    skills: [
        "Python",
        "C++",
        "FastAPI",
        "Next.js",
        "Svelte.js",
        "Rust",
        "Tauri",
        "Java",
        "MongoDB",
        "PostgreSQL",
        "Docker"
    ],
    projects: [
        {
            img: "/crypt.ico",
            title: "Crypt",
            content: "Password manager with Aes256Gcm encryption for passwords.",
            skills: ["Tauri", "Rust", "Svelte.js"],
            href: "https://github.com/TAFH-debug/crypt"
        },
        {
            img: "/pygame_tools.png",
            title: "Pygame Tools",
            content: "Pygame library wrapper with some advanced game engine abstractions.",
            skills: ["Python"],
            href: "https://github.com/TAFH-debug/pygame_tools_tafh"
        }
    ],
    achievements: [
        {
            img: "/ioai.png",
            name: "IOAI 2025 Silver Medal",
            description: "Silver medal at the International Olympiad in Artificial Intelligence.",
            time: "Aug 2025"
        },
        {
            name: "nFactorial AI Cup 2025 4th place",
            description: "Deploy AI - AI agent that automatically deploy your app to VPS/VDS. Got 4th place.",
            time: "May 2025"
        },
        {
            name: "HackKz hackathon",
            description: "We made learning platform with cources & AI mentor feedback system. Got 1st place.",
            time: "July 2024"
        },
        {
            name: "nFactorial LLM Cup 2024 4th place",
            description: "Made AI Game Designer - AI that helps people to generate game assets, sprites and game plot with given idea. Got 4th place.",
            time: "May 2024"
        },
        {
            name: "PetHack",
            description: "It was my first real hackathon. Learned how to work in a team and got first glimpse of Django.",
            time: "April 2024"
        },
    ]
}