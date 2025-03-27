import Image from "next/image";

interface EduCardProps {
    title: string;
    content: string;
    img: string;
    time: string;
}

export default function EduCard({ title, content, img, time }: EduCardProps) {
    return (
        <div className="flex my-4 items-center justify-between">
            <div className="flex mr-10">
                <Image src={img} className="h-full rounded-full aspect-square mr-2" width={50} height={50} alt="" />
                <div>
                    <h3 className="mb-1">{title}</h3>
                    <p className="text-muted-foreground">{content}</p>
                </div>
            </div>
            <div className="text-muted-foreground text-nowrap">
                {time}
            </div>
        </div>
    )
}