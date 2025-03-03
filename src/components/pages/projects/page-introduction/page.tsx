import { Link } from "@/components/link/page"
import { SectionTitle } from "@/components/section-title/page"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
    return (
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle 
                subtitle="projetos" 
                title="Meus Projetos"
                className="text-center items-center [&>h3]:text-4xl"
            />
            <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Aqui você pode ver alguns dos trabalhos que desenvolvi ao longo da minha carreira. Navegue pelos projetos e veja mais detalhes sobre cada um deles.
                </p>
                <Link href='/'>
                    <HiArrowNarrowLeft size={20}/>
                    Voltar para home
                </Link>
            </div>
        </section>
    )
}