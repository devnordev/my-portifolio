import { HorizontalDivider } from "@/components/divider/horizontal"
import { SectionTitle } from "@/components/section-title/page"
import { ProjectCard } from "./project-card/page"
import { Link } from "@/components/link/page"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlightedProjects = () => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em destaque"/>
            <HorizontalDivider className="mb-16"/>
            <ProjectCard project={{
                title: 'Projeto 1',
                description: 'Descrição do projeto 1',
                image: 'https://via.placeholder.com/300',
                techs: ['React', 'TailwindCSS'],
                url: '#'
            }}/>
            <HorizontalDivider className="my-16"/>
            <ProjectCard project={{
                title: 'Projeto 1',
                description: 'Descrição do projeto 1',
                image: 'https://via.placeholder.com/300',
                techs: ['React', 'TailwindCSS'],
                url: '#'
            }}/>
            <HorizontalDivider className="my-16"/>
            <ProjectCard project={{
                title: 'Projeto 1',
                description: 'Descrição do projeto 1',
                image: 'https://via.placeholder.com/300',
                techs: ['React', 'TailwindCSS'],
                url: '#'
            }}/>
            <HorizontalDivider className="my-16"/>

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