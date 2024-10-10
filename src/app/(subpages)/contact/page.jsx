import bg from "../../../../public/background/contact-background.png"
import Image from "next/image";
import Form from "@/components/contact/Form";

const Contact = () => {
    return (
        <>
            <Image src={bg} alt={'background-image'} fill
                   className={'-z-50 w-full h-screen object-cover object-center opacity-25'}/>

            <article className={'flex flex-col items-center justify-center space-y-8 relative w-full'}>
                <div className={'flex flex-col items-center justify-center space-y-6 w-3/4'}>
                    <h1 className={'text-accent font-semibold text-center text-4xl capitalize'}>
                        Contact Me
                    </h1>
                    {/*TODO change text*/}
                    <p className={'text-center font-light'}>
                        Im always here to help you. Feel free to reach out by filling out the form below.
                    </p>
                    <Form />
                </div>
            </article>
        </>
    )
}

export default Contact;