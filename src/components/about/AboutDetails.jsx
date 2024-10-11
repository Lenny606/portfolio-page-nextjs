import ItemsLayout from "@/components/about/ItemsLayout";

function getYearsOfExperience() {
    const yearOfBootcamp =  2022
    return new Date().getFullYear() - yearOfBootcamp;
}


const AboutDetails = () => {
    return (
        <section className={'w-full py-20'}>
            <div className={'grid grid-cols-12 gap-4 md:gap-8 xs:gap-6 w-full'}>


                <ItemsLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className={'text-xl md:text-2xl text-left w-full capitalize'}>
                        Info
                    </h2>
                    <p className={'font-light text-xs sm:text-sm md:text-base'}>
                        Lorem ipsum dolor sit amet, consectetur adip nonum soc tempor invidue non proident
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </ItemsLayout>
                <ItemsLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className={'font-semibold w-full text-left text-2xl sm:text-5xl'}>
                        {getYearsOfExperience()}+ <sub className={'font-semibold text-base'}>years</sub>
                    </p>
                </ItemsLayout>
                <ItemsLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className={'font-semibold w-full text-left text-2xl sm:text-5xl'}>
                        2+ <sub className={'font-semibold text-base'}>clients</sub>
                    </p>
                </ItemsLayout>
                {/*Github stats*/}
                <ItemsLayout className={'col-span-full md:col-span-6 md:col-span-4 !p-0 text-accent'}>
                    <img className={'w-full h-auto'}
                         src={'https://github-readme-stats.vercel.app/api/top-langs/?username=Lenny606&hide_border=true&title_color=FEFE5B&theme=transparent&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'}
                         alt={'Github stats'} loading={'lazy'}/>
                </ItemsLayout>
                <ItemsLayout className={'col-span-full md:col-span-8 !p-0 text-accent'}>
                    <img className={'w-full h-auto'}
                         src={'https://github-readme-stats.vercel.app/api?username=Lenny606&hide_border=true&title_color=FEFE5B&theme=transparent&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'}
                         alt={'Github stats'} loading={'lazy'}/>
                </ItemsLayout>
                <ItemsLayout className={'col-span-full'}>
                    <img className={'w-full h-auto'}
                         src={'https://skillicons.dev/icons?i=js,html,css,php,git,react,aws,bitbucket,bootstrap,docker,git,github,gitlab,phpstorm,postman,postgres,regex,redux,sass,symfony,tailwind,threejs,ts,vite,wordpress,mysql,jquery,laravel,mongodb,nginx,nodejs'}
                         alt={'Github stats'} loading={'lazy'}/>
                </ItemsLayout>
                <ItemsLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className={'w-full h-auto'}
                         src={'https://github-readme-streak-stats.herokuapp.com?user=Lenny606&hide_border=true&type=png&theme=dark&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B'}
                         alt={'Github stats'} loading={'lazy'}/>
                </ItemsLayout>
                <ItemsLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className={'w-full h-auto'}
                         src={'https://github-readme-stats.vercel.app/api/pin/?username=Lenny606&repo=mern-stack-app&theme=transparent&hide_border=true&title_color=FEFE5&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_line_count=2'}
                         alt={'Github stats'} loading={'lazy'}/>
                </ItemsLayout>

            </div>

        </section>
    )
}

export default AboutDetails;