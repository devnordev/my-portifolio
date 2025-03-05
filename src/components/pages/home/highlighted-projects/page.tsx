import { HorizontalDivider } from "@/components/divider/horizontal"
import { SectionTitle } from "@/components/section-title/page"
import { ProjectCard } from "./project-card/page"
import { Link } from "@/components/link/page"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Project } from "@/types/projects"

type HighlightedProjectsProps = {
    projects: Project[]
}

export const HighlightedProjects = ({projects}: HighlightedProjectsProps) => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em destaque"/>
            <HorizontalDivider className="mb-16"/>
            <div>
                {projects.map(project => (
                    <div key={project.slug}>
                        <ProjectCard project={project}/>
                        <HorizontalDivider className="my-16"/>
                    </div>
                ))}
            </div>
            <p className="flex items-center gap-1.5">
                <span className="text-gray-400">Se interessou?</span>
                <Link href='/projects' className="inline-flex">
                    Ver todos
                    <HiArrowNarrowRight/>
                </Link>
            </p>
        </section>
    )
}