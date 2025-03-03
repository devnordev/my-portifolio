import { Link } from "@/components/link/page";
import { TechBadge } from "@/components/tech-badge/page";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

type ProjectCardProps = {
    project: {
        title: string;
        description: string;
        image: string;
        techs: string[];
        url: string;
    }
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
                    alt="Project Image"
                    className="w-full lg:min-h-full h-[200px] sm:h-[300px] lg:w-[420px] object-cover rounded-lg"
                />
            </div>
            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    BookWise
                </h3>
                <p className="text-gray-400 my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis voluptatem, dignissimos eos odit ullam officiis nemo temporibus veniam quas?</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                </div>
                <Link href='/projects'>
                    Ver projeto
                    <HiArrowRight/>
                </Link>
            </div>
        </div>
    )
}