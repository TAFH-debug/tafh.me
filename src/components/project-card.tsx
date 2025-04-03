import Image from "next/image";
import Chip from "./chip";

interface ProjectCardProps {
    title: string;
    content: string;
    img: string;
    skills: string[];
    href: string;
}

export default function ProjectCard({ title, content, img, skills, href }: ProjectCardProps) {
    return (
        <div className="flex my-2 items-center justify-between">
            <div className="flex mr-10">
                <Image src={img} className="h-full rounded-full aspect-square mr-2" width={70} height={70} alt="" />
                <div>
                    <a href={href}>
                    <h3 className="mb-1 text-xl hover:underline">{title}</h3>
                    </a>
                    <p className="text-muted-foreground">{content}</p>
                </div>
            </div>
            <div className="">
                {
                    skills.map((val, idx) => <Chip content={val} key={idx} />)
                }
            </div>
        </div>
    )
}