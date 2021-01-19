import Link from "next/link"
import heroImg from '@/img/Skilt.png'

export default function HeroSection(){
    return(
        <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
            <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-primary title-font">
                    RegReSir
                </h2>
                <h1 className="mb-8 text-xl font-bold tracking-tighter text-center text-primary lg:text-left lg:text-3xl title-font">
                Regional Resilience and Sustainable Industrial Restructuring
                </h1>
                <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                Mapping and explaining the uneven economic resilience of industries and regions to the Corona crisis
                </p>
                <div className="flex justify-center">
                    <Link href="/about">
                    <button
                        className="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-secondary hover:from-red-500 to-red-600 hover:to-secondary focus:ring focus:outline-none">
                        Project Details
                    </button>
                    </Link>
                    <p className="mt-2 text-sm text-center text-gray-600 md:ml-6 md:mt-0 sm:text-left">
                        Learn more about the work packages
                        <br className="hidden lg:block"/>
                        <Link href="/work-packages">
                        <a
                            className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                            Here
                            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                width="20" height="20" fill="currentColor">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                            </svg>
                        </a>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                <img className="object-cover object-center rounded-lg " alt="hero" src={heroImg}/>
            </div>
        </div>
    </section>
    )
}