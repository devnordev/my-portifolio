import { RichText } from "@/components/rich-text/page"
import { TechBadge } from "@/components/tech-badge/page"
import { WorkExperience } from "@/types/work-experience"
import Image from "next/image"

type ExperienceItemProps = {
    workExperience: WorkExperience
}

export const ExperienceItem = ({workExperience}: ExperienceItemProps) => {
    return (
        <div className="flex flex-row gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4 min-w-[40px]">
                <div className="rounded-full border border-gray-400 p-0.5">
                    <Image
                        src={workExperience.companyUrl}
                        alt={`Logo da empresa ${workExperience.companyName}`}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800"/>
            </div>
            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href={workExperience.companyUrl} target="_blank" className="text-gray-500 hover:text-emerald-500 transition-colors">@ Workwolf</a>
                    <h4 className="text-gray-300">{workExperience.role}</h4>
                    <span className="text-gray-500">
                        out 2022  •  0 momento  •  (6 meses)
                    </span>
                    <div className="text-gray-400">
                        <RichText content={workExperience.description.raw}/>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[400px] mb-8">
                    {workExperience.technologies.map(tech => (
                        <TechBadge name={tech.name} key={`tech-${tech.name}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}