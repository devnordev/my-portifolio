'use client'
import { Button } from "@/components/button/page"
import { TechBadge } from "@/components/tech-badge/page"
import Image from "next/image"
import {HiArrowNarrowRight} from 'react-icons/hi'
import {TbBrandGithub, TbBrandLinkedin, TbBrandYoutube, TbBrandWhatsapp} from 'react-icons/tb'

const MOCK_CONTACTS = [
    {   url: 'https://github.com.br',
        icon: <TbBrandGithub/>,
    },
    {   url: 'https://github.com.br',
        icon: <TbBrandLinkedin/>,
    },
    {   url: 'https://github.com.br',
        icon: <TbBrandYoutube/>,
    },
    {   url: 'https://github.com.br',
        icon: <TbBrandWhatsapp/>,
    },
]

export const HeroSection = () => {
    const handleContact = () => {
        const contactSection = document.querySelector('#contact');
        if(contactSection){
            contactSection.scrollIntoView({behavior: 'smooth'});
            console.log('entrou')
        }else{
            console.log('Não achou')
        }
    }
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-no-repeat bg-center flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px] ">
                    <p className="text-emerald-400 font-mono">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Hugo Ferreira</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é Hugo Ferreira e sou um porgramador front-end apaixonado por tecnologia. Com mais de 3 anos de experiência. Meu objetivo é criar interfaces de usuário bonitas e funcionais, além de liderar equipes técnicas em projetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.</p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({length: 10}).map((_, index) => (
                            <TechBadge key={index} name="teste"/>
                        ))}
                    </div>
                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 sm:flex-row flex-col">
                        <Button className="shadow-button w-max" onClick={handleContact}>
                            Entre em contato 
                            <HiArrowNarrowRight size={18}/>
                        </Button>
                        <div className="text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a 
                                    href={contact.url} 
                                    key={`contact-${index}`} 
                                    target="_blank" 
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    width={420}
                    height={404}
                    alt="Foto de perfil do Hugo Ferreira"
                    src="/images/profile-pic.png"
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />
            </div>
        </section>
    )
}