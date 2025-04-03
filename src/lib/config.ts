import {Icons} from "@/components/icons";

export const data = {
    about: "Full-stack web developer with a passion in cyber security. Hackathons & Capture The Flag competitions enjoyer. \
    4+ years of coding experience. Solve problems on Codeforces & Make Tauri applications as a hobby.",
    education: [
        {
            img: "/nfactorial.jpg",
            title: "nFactorial Incubator",
            content: "Startup incubator.",
            time: "June 2024 - August 2024"
        },
        {
            img: "/nspm.jpg",
            title: "National School of Physics and Maths",
            content: "Top 4 of the school, olympiad participant.",
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
    hackathons: [
        {
            name: "HackKz hackathon",
            description: "We made learning platform with cources & AI mentor feedback system. Got 1st place.",
            time: "July 2024"
        },
        {
            name: "nFactorial LLM Cup 2024",
            description: "Made AI Game Designer - AI that helps people to generate game assets, sprites and game plot with given idea. Got 4th place.",
            time: "Aug 2024"
        },
        {
            name: "PetHack",
            description: "It was my first real hackathon. Learned how to work in a team and got first glimpse of Django.",
            time: "April 2024"
        },
    ]
}