import { SectionTitle } from "@/components/section-title/page"
import { KnownTech } from "./known-tech"
import {TbBrandNextjs} from 'react-icons/tb'

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle title="Conhecimentos" subtitle="competências"/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {Array.from({length: 8}).map((_, index) => (
                    <KnownTech key={index} tech={{
                        icon: <TbBrandNextjs size={24}/>,
                        name: 'Next.js',
                        startDate: '2021-01-01'
                    }}/>
                ))}
            </div>
        </section>
    )
}