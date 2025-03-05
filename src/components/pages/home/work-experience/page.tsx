import { SectionTitle } from "@/components/section-title/page"
import { ExperienceItem } from "./experience-item"
import { WorkExperience as IWorkExperience } from "@/types/work-experience"

type WorkExperienceProps = {
    workExperience: IWorkExperience[]
}

export const WorkExperience = ({workExperience}: WorkExperienceProps) => {
    return(
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 md:flex-row flex-col">
            <div className="max-w-[420px]">
                <SectionTitle title="Experiência Profissional" subtitle="experiências"/>
                <p className="text-gray-400 mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptate fuga ut expedita et voluptas ratione corrupti reprehenderit, distinctio nobis!</p>
            </div>
            <div className="flex flex-col gap-4">
                {workExperience.map((experience, i) => (
                    <ExperienceItem workExperience={experience} key={i}/>
                ))}
            </div>
        </section>
    )
}