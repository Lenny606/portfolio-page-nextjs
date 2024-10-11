import bg from "../../../../public/background/contact-background.png"
import Image from "next/image";
import Form from "@/components/contact/Form";

const Contact = () => {
    return (
        <>
            <Image priority sizes={'100vw'} src={bg} alt={'background-image'}
                   className={'-z-50 fixed top-0 left-0 w-full object-cover object-center opacity-25'}/>

            <article className={'flex flex-col items-center justify-center space-y-8 relative py-8 sm:py-0 w-full'}>
                <div className={'flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4'}>
                    <h1 className={'text-accent font-semibold text-center text-4xl capitalize'}>
                        Contact Me
                    </h1>
                    {/*TODO change text*/}
                    <p className={'text-center font-light text-sm sm:text-base'}>
                        Im always here to help you. Feel free to reach out by filling out the form below.
                    </p>
                    <Form />
                </div>
            </article>
        </>
    )
}

export default Contact;