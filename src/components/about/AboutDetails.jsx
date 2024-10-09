import ItemsLayout from "@/components/about/ItemsLayout";

const AboutDetails = () => {
    return (
        <section className={'w-full py-20'}>
            <div className={'grid grid-cols-12 gap-8 w-full'}>


                <ItemsLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className={'text-2xl text-left w-full capitalize'}>
                        Info
                    </h2>
                    <p className={'font-light'}>
                        Lorem ipsum dolor sit amet, consectetur adip nonum soc tempor invidue non proident
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </ItemsLayout>
                <ItemsLayout className={'col-span-4 text-accent'}>
                    <p className={'font-semibold w-full text-left text-5xl'}>
                        4+ <sub className={'font-semibold text-base'}>years</sub>
                    </p>
                </ItemsLayout>
                <ItemsLayout className={'col-span-4 text-accent'}>
                    <p className={'font-semibold w-full text-left text-5xl'}>
                        2+ <sub className={'font-semibold text-base'}>clients</sub>
                    </p>
                </ItemsLayout>

            </div>

        </section>
    )
}

export default AboutDetails;