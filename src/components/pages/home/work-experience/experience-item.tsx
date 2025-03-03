import { TechBadge } from "@/components/tech-badge/page"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="flex flex-row gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4 min-w-[40px]">
                <div className="rounded-full border border-gray-400 p-0.5">
                    <Image
                        src="https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5"
                        alt="Logo da empresa Workwolf"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800"/>
            </div>
            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href="https://www.linkedin.com" target="_blank" className="text-gray-500 hover:text-emerald-500 transition-colors">@ Workwolf</a>
                    <h4 className="text-gray-300">Desenvolvedor Font-End</h4>
                    <span className="text-gray-500">
                        out 2022  •  0 momento  •  (6 meses)
                    </span>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim tempore quisquam sit perspiciatis eius quidem, aut temporibus. Amet, doloribus!</p>
                </div>
                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[400px] mb-8">
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                </div>
            </div>
        </div>
    )
}