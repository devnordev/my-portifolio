import { SectionTitle } from "@/components/section-title/page"
import { KnownTech } from "./known-tech"
import { KnownTech as IKnownTech } from "@/types/projects"

type KnownsTechsProps = {
    techs: IKnownTech[]
}

export const KnownTechs = ({techs}: KnownsTechsProps) => {
    return (
        <section className="container py-16">
            <SectionTitle title="Conhecimentos" subtitle="competências"/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {techs?.map((tech) => (
                    <KnownTech key={tech.name} tech={tech}/>
                ))}
            </div>
        </section>
    )
}